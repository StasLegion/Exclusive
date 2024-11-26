import React from 'react';
import { GrFavorite } from "react-icons/gr";
import { IoEyeOutline } from "react-icons/io5";
import stars from '../../images/stars.png';
import styles from './CartItem.module.css';

export const CartItem = ({item}) => {
  return (
   <div className={styles.item}>
    <div className={styles.img}>
      {item.discount && <span className={styles.discount}>{item.discount}%</span>}
      <img src={item.img} alt="" />
      <div className={styles.add}>Add To Cart</div>
      <div className={styles.faView}>
        <GrFavorite />
        <IoEyeOutline />
      </div>
    </div>
    <div className={styles.bottom}>
      <h3>{item.title}</h3>
      <div className={styles.price_block}>
          <span className={styles.price}>${item.price}</span>
          { item.oldprice && <del><span className={styles.oldprice}>{item.oldprice}</span></del>}
      </div>
      <div>
        <img src={stars} alt="" />
        <span>(88)</span>
      </div>
    </div>
</div>
  )
};