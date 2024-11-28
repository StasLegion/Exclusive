import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeWish, viewRemove } from '../../Redux/Reducers/WishSlice';
import { CartItem } from '../../components/CartItem/CartItem';
import { EmptyList } from './EmptyList';
import styles from './Wishlist.module.css';

export const Wishlist = () => {
   const {wishlist} = useSelector(state => state.wish);
   const {viewed} = useSelector(state => state.wish);
  return (
    <div className={styles.container}>
      <div className={styles.wishBlock}>
         <div className={styles.wishTop}>
            <h2>Wishlist ({wishlist.length})</h2>
            <button className={styles.btnInWish}>Move All To Bag</button>
         </div>
         <div className={styles.wishlist}>
            {
               wishlist.length !== 0 
               ? wishlist.map(e => <CartItem key={e.title} item={e} />)
               : <EmptyList text={"Список желаний пуст"} />
            }
         </div>
      </div>

      <div className={styles.justForYou}>
            <div className={styles.justTop}>
               <span>Just For You</span>
               <button className={styles.btnInWish}>See All</button>
            </div>
            <div className={styles.recomended}>
               {
                  viewed.length !== 0
                  ? viewed.map(e => <CartItem key={e.title} item={e} />)
                  : <EmptyList text={"Нет просмотренных товаров"} />
               }
            </div>
      </div>
    </div>
  )
}
