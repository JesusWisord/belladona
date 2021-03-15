import React from "react";
import styles from "../styles/WhoAreWe.module.scss"

const WhoAreWe = () => (
  <>
    <h2 className={styles.subtitle}>¿Quiénes somos?</h2>
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src="/pp.JPG" />
      </div>
      <p>
        Somos una empresa joven que surge de la idea de crear diseño floral diferente a lo normal y de buen gusto. 
      </p>
    </div>
  </>
);

export default WhoAreWe;