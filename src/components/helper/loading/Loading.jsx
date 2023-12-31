import React from 'react';

import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div className={styles.loaderSquare}></div>
        <div className={styles.loaderSquare}></div>
        <div className={styles.loaderSquare}></div>
        <div className={styles.loaderSquare}></div>
        <div className={styles.loaderSquare}></div>
        <div className={styles.loaderSquare}></div>
        <div className={styles.loaderSquare}></div>
      </div>
    </div>
  );
};

export default Loading;
