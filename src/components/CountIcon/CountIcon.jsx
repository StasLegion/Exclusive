import React from 'react';
import styles from './CountIcon.module.css';

export const CountIcon = ({count}) => {
  return (
    <span className={styles.count}>{count}</span>
  )
}
