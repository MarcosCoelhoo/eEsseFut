import React from 'react';
import Head from '../head/Head';
import Header from '../header/Header';

import styles from './Schedule.module.css';

const Schedule = () => {
  // const authorRef = React.useRef();
  // const titleRef = React.useRef();
  // const localRef = React.useRef();
  // const dateRef = React.useRef();
  // const hourRef = React.useRef();
  // const descriptionRef = React.useRef();
  const [inputValues, setInputValues] = React.useState({
    author: '',
    title: '',
    local: '',
    date: '',
    hour: '',
    description: '',
  });

  const handleBlur = ({ target }) => {
    console.log(target.id);

    // console.log(authorRef.current.value);

    setInputValues({ ...inputValues, [target.id]: target.value });
  };

  return (
    <>
      <Head
        title="eEsseFut? | Crie seu horário"
        description="Crie e poste o seu horário para que mais pessoas possam ver e curtir esse fut com vocé"
      />

      <Header>
        <h1 className={styles.titleHeader}>Crie seu horário</h1>
      </Header>

      <main className={styles.main}>
        <section className={styles.section}>
          <form action="" className={styles.form}>
            <div className={styles.inputContainer}>
              <label htmlFor="author" className={styles.inputLabel}>
                Dono do horário
              </label>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  placeholder="Ex.: Galera da ponte do macaco"
                  id="author"
                  name="author"
                  // ref={authorRef}
                  onBlur={handleBlur}
                  required
                />
              </div>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="title" className={styles.inputLabel}>
                Título do horário
              </label>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  placeholder="Ex.: Fut no campo da torre com a galera do toty"
                  id="title"
                  name="title"
                  // onBlur={handleBlur}
                  required
                />
              </div>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="local" className={styles.inputLabel}>
                Local do fut
              </label>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  placeholder="Ex.: Campo do nenem"
                  id="local"
                  name="local"
                  // onBlur={handleBlur}
                  required
                />
              </div>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="date" className={styles.inputLabel}>
                Data e hora
              </label>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  placeholder="Ex.: 11/09"
                  id="date"
                  name="date"
                  // pattern="(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])"
                  maxLength={5}
                  // onBlur={handleBlur}
                  required
                />
                <input
                  type="time"
                  placeholder="Ex.: 14:30"
                  id="hour"
                  name="hour"
                  min="06:00"
                  max="23:59"
                  // onBlur={handleBlur}
                  required
                />
              </div>
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="local" className={styles.inputLabel}>
                Descrição do fut (opcional)
              </label>
              <div className={styles.inputBox}>
                <textarea
                  name="description"
                  id="description"
                  cols="5"
                  rows="5"
                  placeholder="Vai rolar apostado contra a galera da mario covas bora ganhar porraaaa 🙉🙉🙉🎉🎉🎉"
                  // onBlur={handleBlur}
                ></textarea>
              </div>
            </div>

            <div className={styles.buttonContainer}>
              <button className={styles.button}>Postar fut</button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Schedule;
