import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTop } from '../SectionsTop/SectionTop';
import playstation from '../../images/new-arrival/ps5.png';
import women from '../../images/new-arrival/women-collection.png';
import speakers from '../../images/new-arrival/speakers.png';
import perfume from '../../images/new-arrival/perfume.png';
import styles from './NewArrival.module.css';

export const NewArrival = () => {
  return (
    <section className={styles.newArrival}>
      <SectionTop title={'Featured'} subtitle={'New Arrival'} />
      <div className={styles.block}>
         <div className={styles.left}>
            <img src={playstation} alt="" />
            <div>
               <h1>PlayStation 5</h1>
               <p>Black and White version of the PS5 coming out on sale.</p>
               <Link to="">Shop Now</Link>
            </div>
         </div>
         <div className={styles.right}>
            <div className={styles.top}>
               <img src={women} alt="" />
               <div>
                  <h1>Women’s Collections</h1>
                  <p>Featured woman collections that give you another vibe.</p>
                  <Link to="">Shop Now</Link>
               </div>
            </div>
            <div className={styles.bottom}>
               <div className={styles.bottom_left}>
                  <img src={speakers} alt="" />
                  <div>
                     <h1>Speakers</h1>
                     <p>Amazon wireless speakers</p>
                     <Link to="">Shop Now</Link>
                  </div>
               </div>
               <div className={styles.bottom_right}>
                  <img src={perfume} alt="" />
                  <div>
                     <h1>Perfume</h1>
                     <p>GUCCI INTENSE OUD EDP</p>
                     <Link to="">Shop Now</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}
