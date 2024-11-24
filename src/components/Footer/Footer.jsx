import React from 'react';
import { Link } from 'react-router-dom';
import stores from '../../images/footer-img/stores.png';
import send from '../../images/footer-img/send.png';
import fb from '../../images/footer-img/fb.png';
import twit from '../../images/footer-img/twit.png';
import insta from '../../images/footer-img/insta.png';
import lkd from '../../images/footer-img/in.png';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer>
      <div className={styles.top}>
        <div className={styles.block_1}>
          <h2>Exclusive</h2>
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          <div className={styles.input_block}>
            <input placeholder='Enter your email' type="email" />
            <img src={send} alt="" />
          </div>
        </div>
        <div className={styles.block_2}>
          <h3>Support</h3>
          <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className={styles.block_3}>
          <h3>Account</h3>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className={styles.block_4}>
          <h3>Quick Link</h3>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className={styles.block_5}>
          <h3>Download App</h3>
          <img src={stores} alt="" />
          <nav className={styles.nav_footer}>
            <Link><img src={fb} alt="" /></Link>
            <Link><img src={twit} alt="" /></Link>
            <Link><img src={insta} alt="" /></Link>
            <Link><img src={lkd} alt="" /></Link>
          </nav>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© Copyright Rimel 2022. All right reserved</span>
      </div>
    </footer>
  )
};