import React from 'react';
import styles from '../styles/Hero.module.scss';

const Hero = () => {
  return(
    <>
      <main className={styles.hero}>
        <div className={styles.textContainer}>
          <img src="/logo_beladona.PNG"/>
          <p>
            Arreglos florales para toda ocasión. Tenemos servicios para eventos
          </p>
        </div>
      </main>
    </>
  )
}

export default Hero;
