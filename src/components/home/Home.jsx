import React from 'react';
import Header from '../header/Header';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as BallLogo } from '../../assets/images/ball.svg';
import { ReactComponent as TimeIcon } from '../../assets/images/time.svg';
import { ReactComponent as CalendarIcon } from '../../assets/images/calendar.svg';
import { ReactComponent as LocalIcon } from '../../assets/images/local.svg';
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow.svg';
import backgroundImage from '../../assets/images/jmp.jpg';
import Avatar from 'boring-avatars';

// import data from '../../../data.json';

import styles from './Home.module.css';
import Head from '../head/Head';
import { getTimes } from '../../api';

const arrayColors = ['#CFE92F', '#E2F561', '#141414', '#DF8458'];

const Home = () => {
  const [dataTimes, setDataTimes] = React.useState([]);
  const navigate = useNavigate();

  const saveScroll = (event) => {
    event.preventDefault();

    const pathPage = event.target.pathname;
    window.sessionStorage.setItem('scroll', window.scrollY);
    navigate(pathPage);
    // console.log(event.target.pathname);
  };

  React.useEffect(() => {
    const scroll = window.sessionStorage.getItem('scroll');
    window.scrollTo({
      top: scroll || 0,
    });
  });

  React.useEffect(() => {
    const fetchTimes = async () => {
      try {
        const data = await getTimes();

        setDataTimes(data);
      } catch (error) {
        console.log(error);
      }
      // console.log(data);
    };

    fetchTimes();
  }, []);

  return (
    <>
      <Head
        title="eEsseFut? | Veja os futs que estão rolando"
        description="Encontre aquele fut que você tanto precisa!"
      />

      <Header space={true}>
        <div className={styles.logo}>
          <a href="/">
            <BallLogo width={64} height={64} />
          </a>
        </div>
        <div className={styles.avatar}>
          <Avatar size={64} variant="bauhaus" colors={arrayColors} />
        </div>
      </Header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.titleSection}>Futs recentes</h1>

          <ul className={styles.listCards}>
            {dataTimes.map(({ title, hour, date, local, id }) => (
              <li className={styles.card} key={id}>
                <div className={styles.cardImage}>
                  <img src={backgroundImage} alt="Image time" />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.info}>
                    <ul className={styles.details}>
                      <li>
                        <TimeIcon width={32} height={32} />
                        {hour}
                      </li>
                      <li>
                        <CalendarIcon width={32} height={32} />
                        {date}
                      </li>
                      <li>
                        <LocalIcon width={32} height={32} />
                        {local}
                      </li>
                    </ul>

                    <h2 className={styles.title}>{title}</h2>
                  </div>

                  <Link
                    onClick={saveScroll}
                    to={`/${id}/time`}
                    className={styles.button}
                  >
                    <ArrowIcon />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <Link className={styles.buttonAdd} to="/schedule">
          <BallLogo />
        </Link>
      </main>
    </>
  );
};

export default Home;
