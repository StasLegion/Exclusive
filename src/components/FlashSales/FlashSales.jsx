import React from 'react';
import { productList } from '../productList';
import { CartItem } from '../CartItem/CartItem';
import styles from './FlashSales.module.css';

export const FlashSales = () => {
  return (
    <section className={styles.flashSales}>
      <div className={styles.top}>
         <div className={styles.title}>
            <span>Today's</span>
            <h1>Flash Sales</h1>
         </div>
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
      </div>

      <div className={styles.block}>
         {
            productList.flashSales.map(e => <CartItem key={e.title} item={e} />)
         }
      </div>
    </section>
  )
};
