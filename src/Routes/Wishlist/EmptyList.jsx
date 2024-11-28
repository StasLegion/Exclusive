import React from 'react'
import styles from './Wishlist.module.css';

export const EmptyList = ({text}) => {
  return (
    <div className={styles.empty}>
         <h2>{text}</h2>
      </div>
  )
}
