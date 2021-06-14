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
        Somos una empresa con la misión de crear diseño floral elegante. Nuestras creaciones son algo diferente de lo común con un estilo sobrio y refinado. Definimos nuestro trabajo como “chic floral” y nos encanta deleitar a nuestros clientes con lindos diseños y flores de alta calidad.
      </p>
    </div>
  </>
);

export default WhoAreWe;