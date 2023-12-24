import React from 'react';

import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.spinner}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Loading;
