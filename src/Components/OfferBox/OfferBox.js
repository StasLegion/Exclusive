import React from "react";
import styles from "./offerBox.module.css";

function OfferBox({
  img,
  title,
  description,
  className,
  aboutServiceTitle,
  aboutServiceDescription,
}) {
  return (
    <div className={`${styles.offerBox} ${className}`}>
      <img src={img} alt={title} className={styles.offerImage} />
      <h3 className={`${styles.offerTitle} ${aboutServiceTitle}`}>{title}</h3>
      <p className={`${styles.offerDescription} ${aboutServiceDescription}`}>
        {description}
      </p>
    </div>
  );
}
export default OfferBox;
