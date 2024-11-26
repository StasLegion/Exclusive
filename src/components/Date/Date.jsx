import React from 'react';
import styles from './Date.module.css';

export const Date = () => {
  return (
   <div className={styles.date}>
      <div className={styles.number}>
         <span>Days</span>
         <h1>03</h1>
      </div>
      <h1 className={styles.colon}>:</h1>
      <div className={styles.number}>
      <span>Hours</span>
      <h1>23</h1>
      </div>
      <h1 className={styles.colon}>:</h1>
      <div className={styles.number}>
         <span>Minutes</span>
         <h1>19</h1>
      </div>
      <h1 className={styles.colon}>:</h1>
   <div className={styles.number}>
      <span>Seconds</span>
      <h1>56</h1>
   </div>
</div>
  )
}
