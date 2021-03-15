import React from "react";
import styles from "../styles/Gallery.module.scss"

const Gallery = () => (
  <>
    <h2 className={styles.subtitle}>Nuestro trabajo</h2>
    <div className={styles.gallery}>
      <div className={styles.imgContainer}>
        <img src="/g1.JPG"/>
      </div>
      <div className={styles.imgContainer}>
        <img src="/g2.JPG"/>
      </div>
      <div className={styles.imgContainer}>
        <img src="/g3.JPG"/>
      </div>
      <div className={styles.imgContainer}>
        <img src="/g4.jpg"/>
      </div>
    </div>
  </>
);

export default Gallery;