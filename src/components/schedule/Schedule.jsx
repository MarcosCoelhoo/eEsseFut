import React from 'react';
import Head from '../head/Head';
import Header from '../header/Header';

import styles from './Schedule.module.css';
import { postTimes } from '../../api';
import { useNavigate } from 'react-router-dom';

const Schedule = () => {
  const [inputValues, setInputValues] = React.useState({
    author: '',
    title: '',
    local: '',
    date: '',
    hour: '',
    description: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await postTimes(inputValues);

    navigate('/');

    console.log(inputValues);
  };

  const handleChangeInput = ({ target }) => {
    if (target.id === 'date') {
      const dateTs = target.valueAsNumber;

      const date = new Date(dateTs);
      date.setUTCHours(0, 0, 0, 0);

      const optionsDate = {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        timeZone: 'UTC',
      };

      const dateFormated = new Intl.DateTimeFormat('pt-BR', optionsDate).format(
        date,
      );

      return setInputValues({
        ...inputValues,
        [target.id]: dateFormated,
      });
    }

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
        <section className={styles.section} onSubmit={handleSubmit}>
          <form className={styles.form}>
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
                  onBlur={handleChangeInput}
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
                  onBlur={handleChangeInput}
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
                  onBlur={handleChangeInput}
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
                  type="date"
                  placeholder="Ex.: 11/09/2023"
                  id="date"
                  name="date"
                  onBlur={handleChangeInput}
                  required
                />
                <input
                  type="time"
                  placeholder="Ex.: 14:30"
                  id="hour"
                  name="hour"
                  min="06:00"
                  max="23:59"
                  onBlur={handleChangeInput}
                  required
                />
              </div>
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="description" className={styles.inputLabel}>
                Descrição do fut (opcional)
              </label>
              <div className={styles.inputBox}>
                <textarea
                  name="description"
                  id="description"
                  cols="5"
                  rows="5"
                  placeholder="Vai rolar apostado contra a galera da mario covas bora ganhar porraaaa 🙉🙉🙉🎉🎉🎉"
                  onBlur={handleChangeInput}
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
