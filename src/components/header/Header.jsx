import React from 'react';
import styles from './Header.module.css';

const Header = ({ children }) => {
  return <header className={styles.container}>{children}</header>;
};

export default Header;
