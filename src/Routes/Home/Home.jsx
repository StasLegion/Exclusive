import React from 'react';
import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <main>
      <nav className={styles.nav_main}>
        <NavLink>Woman’s Fashion</NavLink>
        <NavLink>Men’s Fashion</NavLink>
        <NavLink>Electronics</NavLink>
        <NavLink>Home & Lifestyle</NavLink>
        <NavLink>Medicine</NavLink>
        <NavLink>Sports & Outdoor</NavLink>
        <NavLink>Baby’s & Toys</NavLink>
        <NavLink>Groceries & Pets</NavLink>
        <NavLink>Health & Beauty</NavLink>
      </nav>
      <div className={styles.right}></div>
    </main>
  )
}