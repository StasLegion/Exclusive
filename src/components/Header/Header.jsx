import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import tick from '../../images/tick.png';
import logo from '../../images/logo.png';
import favirite from '../../images/navicons/favorite-icon.png';
import cart from '../../images/navicons/cart-icon.png';
import search from '../../images/navicons/search-icon.png';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header>
      <div className={styles.top}>
        <div className={styles.top_content}>
          <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
          <Link>ShopNow</Link>
          <span className={styles.lang}>
              English <img src={tick} alt="" />
            </span>
        </div>
      </div>
      <div className={styles.bottom}>
        <Link to="/"><img src={logo} alt="" /></Link>
        <nav className={styles.nav_header}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </nav>
        <div className={styles.right}>
          <span className={styles.search}>
            <input placeholder='What are you looking for?' type="text" />
            <img src={search} alt="" />
          </span>
          <img src={favirite} alt="" />
          <img src={cart} alt="" />
        </div>
      </div>
    </header>
  )
}