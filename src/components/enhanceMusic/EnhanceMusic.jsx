import React from 'react';
import bannerColumn from '../../images/buy-images/column.png'
import styles from './EnhanceMusic.module.css';

export const EnhanceMusic = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.info}>
         <span className={styles.categories}>Categories</span>
         <h1 className={styles.title}>Enhance Your Music Experience</h1>
         <div className={styles.about}>
            <span>23 Hours</span>
            <span>05 Days</span>
            <span>59 Minutes</span>
            <span>35 Seconds</span>
         </div>
         <button className={styles.bannerBtn}>Buy Now!</button>
      </div>
      <div className={styles.img}>
         <img src={bannerColumn} alt="" />
      </div>
    </section>
  )
}
