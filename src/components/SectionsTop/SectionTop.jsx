import React from 'react';
import { Arrows } from '../Arrows/Arrows';
import { Button } from '../Button/Button';
import { Date } from '../Date/Date';
import styles from './SectionTop.module.css';

export const SectionTop = ({title, subtitle}) => {
  return (
   <div className={styles.top}>
      <div className={styles.title_date}>
         <div className={styles.title}>
            <span>{title}</span>
            <h1>{subtitle}</h1>
         </div>
         { subtitle === 'Flash Sales'&& <Date />}
      </div>
         {subtitle === "Best Selling Products"
         ? <Button
            name={'View All'}
            width={159}
            margin={0} />
         : subtitle === "New Arrival"
         ? null
         : <Arrows />}
</div>
  )
}
