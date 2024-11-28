import React from 'react';
import { GrFavorite } from "react-icons/gr";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addProduct, revoweProduct } from '../../Redux/Reducers/CartSlice';
import stars from '../../images/stars.png';
import styles from './CartItem.module.css';

export const CartItem = ({item}) => {

  const dispatch = useDispatch();
  const {products} = useSelector(state => state.cart)
  const productInCart = products.some(e => e.title === item.title)
  return (
   <div className={styles.item}>
    <div className={styles.img}>
      {item.discount && <span className={styles.discount}>{item.discount}%</span>}
      <img src={item.img} alt="" />
      <div
        style={{backgroundColor: productInCart ? "#DB4444" : "#000"}}
        onClick={() => dispatch(productInCart ? revoweProduct(item.title) : addProduct(item))}
        className={styles.add}
      >
        <span>{productInCart ? 'Remove From Cart' : 'Add To Cart'}</span>

      </div>
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