import React from 'react';
import { FiMail, FiInstagram, FiFacebook } from 'react-icons/fi'
import styles from "../styles/SocialMedia.module.scss";

const SocialMedia = () => (
  <>
    <h2 className={styles.subtitle}>Haz tus pedidos por los siguientes canales</h2>
    <div className={styles.socialMedia}>
      <a href="https://instagram.com/beladona_boutiquefloral?igshid=159yfjxosm7j" target="blank">
        <FiInstagram className={styles.icon} />
      </a>
      <a href="https://www.facebook.com/beladonabotiquefloral" target="blank">
        <FiFacebook className={styles.icon} />
      </a>
      <a href="mailto:pedidos@beladona.MX" target="blank">
        <FiMail className={styles.icon} />
      </a>
    </div>
  </>
);

export default SocialMedia;