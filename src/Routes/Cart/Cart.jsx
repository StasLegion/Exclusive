import React from 'react';
import { Link } from 'react-router-dom';
import { ProductInCart } from '../../components/ProductInCart/ProductInCart';
import { EmptyCart } from '../../components/ProductInCart/EmptyCart';
import { useSelector } from 'react-redux';
import styles from './Cart.module.css';

export const Cart = () => {
  const {products} = useSelector(state => state.cart);
  let totalsum = 0;
  for (let i = 0; i < products.length; i++) {
    totalsum += products[i].count * products[i].price;
  }
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

      <div className={styles.cartblock}>
        <div className={styles.coupon_block}>
          <form className={styles.formBlock}>
            <input placeholder='Coupon Code' type="text" />
            <button type='submit'>Apply Coupon</button>
          </form>
        </div>

        <div className={styles.cart_total}>
          <h2>Cart Total</h2>
          <div className={styles.result}>
              <div className={styles.subtotal}>
                <span>Subtotal:</span>
                <span>{totalsum}$</span>
              </div>
              <div className={styles.shipping}>
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className={styles.total}>
                <span>Total:</span>
                <span>{totalsum}$</span>
              </div>
           </div>
           <button className={styles.order}>Procees to checkout</button>
        </div>
      </div>
    </div>
  )
}
