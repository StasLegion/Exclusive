import React from 'react';
import { Link } from 'react-router-dom';
import { ProductInCart } from '../../components/ProductInCart/ProductInCart';
import { EmptyCart } from '../../components/ProductInCart/EmptyCart';
import { useSelector } from 'react-redux';
import styles from './Cart.module.css';

export const Cart = () => {
  const {products} = useSelector(state => state.cart);
  return (
    <div className={styles.container}>
      <div className={styles.navigate}>
        <Link to='/'>Home /</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <section className={styles.cart}>
        <div className={styles.top}>
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>
        <div className={styles.cartlist}>
          {
            products.length !== 0
            ? products.map(e => <ProductInCart key={e.title} item={e} />)
            : <EmptyCart />
          }
        </div>
        <div className={styles.bottom}>
          <Link to="/"><span>Return To Shop</span></Link>
          <Link to="/cart"><span>Update Cart</span></Link>
        </div>
      </section>
    </div>
  )
}
