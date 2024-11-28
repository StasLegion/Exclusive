import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CountIcon } from '../CountIcon/CountIcon';
import { useSelector } from 'react-redux';
import tick from '../../images/tick.png';
import logo from '../../images/logo.png';
import user from '../../images/user.png';
import cancel from '../../images/usercontext/icon-cancel.png';
import logout from '../../images/usercontext/Icon-logout.png';
import mallbag from '../../images/usercontext/icon-mallbag.png';
import reviews from '../../images/usercontext/Icon-reviews.png';
import usericon from '../../images/usercontext/user.png';
import favorite from '../../images/navicons/favorite-icon.png';
import cart from '../../images/navicons/cart-icon.png';
import search from '../../images/navicons/search-icon.png';
import styles from './Header.module.css';

export const Header = () => {

  const [show, setShow] = useState(false);
  const toggleClick = () => {
    setShow(!show)
  }

  const {products} = useSelector(state => state.cart);
  const {wishlist} = useSelector(state => state.wish);
  const countInCart = products.length;
  const countInWish = wishlist.length;

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
          <div className={styles.icons}>
            <Link to='/wishlist' className={styles.favorite}>
              <img src={favorite} alt="" />
              {countInWish !== 0 && <CountIcon count={countInWish} />}
            </Link>
            <Link to='/cart'>
            <div className={styles.cartIcon}>
              <img src={cart} alt="" />
              {countInCart !== 0 && <CountIcon count={countInCart} />}
            </div>
            </Link>
            <span onClick={toggleClick} className={styles.user}>
              <img src={user} alt="" />
              <div
                style={{display: `${show === false ? "none" : 'flex'}`}}
                className={styles.context}>
                <Link>
                  <img src={usericon} alt="" />
                  <span>Manage My Account</span>
                </Link>
                <Link>
                  <img src={mallbag} alt="" />
                  <span>My order</span>
                </Link>
                <Link>
                  <img src={cancel} alt="" />
                  <span>My Cancellations</span>
                </Link>
                <Link>
                  <img src={reviews} alt="" />
                  <span>My Reviews</span>
                </Link>
                <Link>
                  <img src={logout} alt="" />
                  <span>Logout</span>
                </Link>
              </div>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}