import React from 'react';
import styles from './Button.module.css';

export const Button = ({name, width, margin}) => {
  return (
    <button
      className={styles.btnAllview}
      style={{width: width, margin: margin}}
    >{name}</button>
  )
}