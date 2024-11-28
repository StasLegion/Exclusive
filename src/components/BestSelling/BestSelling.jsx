import React from 'react';
import { SectionTop } from '../SectionsTop/SectionTop';
import { productList } from '../productList';
import styles from './BestSelling.module.css';
import { CartItem } from '../CartItem/CartItem';

export const BestSelling = () => {
  return (
    <section className={styles.bestSelling}>
      <SectionTop title={'This Month'} subtitle={'Best Selling Products'} />
      <div className={styles.block}>
        {
          productList.bestSellingProducts.map(e => <CartItem key={e.title} item={e} />)
        }
      </div>
    </section>
  )
}
