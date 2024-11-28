import React from "react";
import styles from "./offerBox.module.css";

function OfferBox({ img, title, description, className }) {
  return (
    <div className={`${styles.offerBox} ${className}`}>
      <img src={img} alt={title} className={styles.offerImage} />
      <h3 className={styles.offerTitle}>{title}</h3>
      <p className={styles.offerDescription}>{description}</p>
    </div>
  );
}
export default OfferBox;
