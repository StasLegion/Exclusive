import React, { useState } from "react";
import styles from "./slide.module.css";
import icon from "../../images/icon_social/Icon-Twitter.png";
import icon1 from "../../images/icon_social/icon-instagram.png";
import icon2 from "../../images/icon_social/Icon-Linkedin.png";

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3;
  const totalSlides = data.length;
  const visibleData = data.slice(currentIndex, currentIndex + slidesToShow);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % totalSlides);
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - slidesToShow + totalSlides) % totalSlides
    );
  };
  return (
    <div className={styles.slider}>
      <div className={styles.sliderContent}>
        {visibleData.map((item, index) => (
          <div key={index} className={styles.sliderItem}>
            <img
              className={styles.sliderImag}
              src={item.photo}
              alt={item.name}
            />
            <h3 className={styles.sliderName}>{item.name}</h3>
            <p>{item.jobTitle}</p>
            <div className={styles.socialLinks}>
              <a
                href={item.socialLinks[0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={styles.socialLinksIcon} src={icon} />
              </a>
              <a
                href={item.socialLinks[1]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon1} />
              </a>
              <a
                href={item.socialLinks[2]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon2} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <button className={styles.buttonSlider} onClick={handlePrev}></button>

        <button className={styles.buttonSlider} onClick={handleNext}></button>
      </div>
    </div>
  );
};
export default Slider;
