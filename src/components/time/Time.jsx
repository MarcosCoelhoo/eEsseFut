import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Time.module.css';
import Header from '../header/Header';

import { ReactComponent as TimeIcon } from '../../assets/images/time.svg';
import { ReactComponent as CalendarIcon } from '../../assets/images/calendar.svg';
import { ReactComponent as LocalIcon } from '../../assets/images/local.svg';
import { ReactComponent as BallLogo } from '../../assets/images/ball.svg';
import backgroundImage from '../../assets/images/jmp.jpg';

import Head from '../head/Head';
import { getTimes } from '../../api';
// import Loading from '../helper/loading/Loading';
// import BgPattern from '../helper/pattern/BgPattern';

const Time = () => {
  const [dataTime, setDataTime] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    const getTime = async () => {
      try {
        const [data] = await getTimes(id);
        setDataTime(data);
      } catch (error) {
        console.log(error);
      }
    };

    getTime();
  }, [id]);

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  if (dataTime === null) return <></>;
  return (
    <>
      <Head
        title={`eEsseFut? | ${dataTime.title}`}
        description={dataTime.description}
      />

      <Header space={true}>
        <div className={styles.logo}>
          <a href="/">
            <BallLogo width={64} height={64} />
          </a>
        </div>
        <h1 className={styles.titleHeader}>Info. do Fut</h1>
      </Header>
      <div className={styles.image}>
        <img src={backgroundImage} alt="Image time" />
      </div>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.content}>
            <div className={styles.contentInfo}>
              <h2 className={styles.title}>{dataTime.title}</h2>
              <p className={styles.author}>
                <span>por</span> {dataTime.author}
              </p>
            </div>

            {/* <button className={styles.buttonConfirm}>Confirmar presença</button> */}
          </div>

          <ul className={styles.infoList}>
            <li className={styles.info}>
              <div className={styles.infoIcon}>
                <CalendarIcon />
              </div>
              <p>{dataTime.date}</p>
            </li>
            <li className={styles.info}>
              <div className={styles.infoIcon}>
                <TimeIcon />
              </div>
              <p>{dataTime.hour}h</p>
            </li>
            <li className={styles.info}>
              <div className={styles.infoIcon}>
                <LocalIcon />
              </div>
              <p>{dataTime.local}</p>
            </li>
          </ul>

          <div className={styles.description}>
            <h2 className={styles.descriptionTitle}>Descrição do fut</h2>

            <div className={styles.descriptionBox}>
              {dataTime.description.trim() ? (
                <p>{dataTime.description}</p>
              ) : (
                <p className={styles.noContent}>
                  O autor não colocou descrição :(
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Time;
