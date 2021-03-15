import React from 'react';
import styles from '../styles/Header.module.scss';

const Header = () => {
  return(
    <header className={styles.header}>
      <a href="/">
        <img src="/logo_beladona.PNG" alt="flowar logo" />
      </a>
    </header>
  )
}

export default Header;
