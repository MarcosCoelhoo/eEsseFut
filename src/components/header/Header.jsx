import React from 'react';
import styles from './Header.module.css';

const Header = ({ children, space }) => {
  return (
    <header
      className={`${styles.container} ${
        space ? styles.flexSpace : styles.flexCenter
      }`}
    >
      {children}
    </header>
  );
};

export default Header;
