import React from 'react';
import { BsCartX } from "react-icons/bs";
import styles from './ProductInCart..module.css';

export const EmptyCart = () => {
  return (
    <div className={styles.empty}>
      <h1>
        Корзина пустая <BsCartX />
      </h1>
    </div>
  )
}
