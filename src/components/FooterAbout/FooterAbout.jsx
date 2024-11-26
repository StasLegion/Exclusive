import React from 'react'
import car from '../../images/footer-about/fi-1.png';
import headphones from '../../images/footer-about/fi-2.png';
import guard from '../../images/footer-about/fi-3.png';
import styles from './FooterAbout.module.css';

export const FooterAbout = () => {
  return (
    <div className={styles.footerAbout}>

      <div className={styles.block}>
         <img src={car} alt="" />
         <div className={styles.block_info}>
            <h2>FREE AND FAST DELIVERY</h2>
            <span>Free delivery for all orders over $140</span>
         </div>
      </div>

      <div className={styles.block}>
         <img src={headphones} alt="" />
         <div className={styles.block_info}>
            <h2>24/7 CUSTOMER SERVICE</h2>
            <span>Friendly 24/7 customer support</span>
         </div>
      </div>

      <div className={styles.block}>
         <img src={guard} alt="" />
         <div className={styles.block_info}>
            <h2>MONEY BACK GUARANTEE</h2>
            <span>We reurn money within 30 days</span>
         </div>
      </div>

    </div>
  )
}
