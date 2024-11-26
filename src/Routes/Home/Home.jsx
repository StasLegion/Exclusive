import React from 'react';
import { NavLink } from 'react-router-dom';
import { FlashSales } from '../../components/FlashSales/FlashSales';
import { BrowseByCategory } from '../../components/BrowseByCategory/BrowseByCategory';
import { BestSelling } from '../../components/BestSelling/BestSelling';
import { EnhanceMusic } from '../../components/enhanceMusic/EnhanceMusic';
import { ExploreOurPro } from '../../components/Explore/ExploreOurPro';
import { NewArrival } from '../../components/newArrival/NewArrival';
import { FooterAbout } from '../../components/FooterAbout/FooterAbout';
import apple from '../../images/banner/apple.png'
import phone from '../../images/banner/banner.png'
import styles from './Home.module.css';

export const Home = () => {
  return (
    <>
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
        <div className={styles.banner}>
          <div className={styles.info}>
            <div className={styles.apple_name}>
              <img src={apple} alt="" />
              <span>iPhone 14 Series</span>
            </div>
            <h1>Up to 10% off Voucher</h1>
            <p>Shop Now &rarr;</p>
          </div>
          <div className={styles.img}>
            <img src={phone} alt="" />
          </div>
        </div>
      </main>
      <FlashSales />
      <BrowseByCategory />
      <BestSelling />
      <EnhanceMusic />
      <ExploreOurPro />
      <NewArrival />
      <FooterAbout />
    </>
  )
}