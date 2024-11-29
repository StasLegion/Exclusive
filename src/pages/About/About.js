import OfferBox from "../../Components/OfferBox/OfferBox.js";
import titleStyle from "../../Components/OfferBox/aboutBoxService.module.css";
import aboutBoxService from "../../Components/OfferBox/aboutBoxService.module.css";
import Slider from "../../Components/Slider/Slider.js";
import styles from "./about.module.css";
import { Link } from "react-router-dom";
import img from "../../images/Services (1).png";
import img1 from "../../images/Services.png";
import img3 from "../../images/Services3.png";
import img4 from "../../images/Services4.png";
import img5 from "../../images/Services5.png";
import SideImage from "../../images/Side Image.png";
import photo from "../../images/SliderImg/Frame 874.png";
import photo1 from "../../images/SliderImg/Frame 875.png";
import photo2 from "../../images/SliderImg/Frame 876.png";

function About() {
  const sliderData = [
    {
      photo: photo,
      name: "Tom Cruise",
      jobTitle: "Founder & Chairman",
      socialLinks: ["", "", ""],
    },
    {
      photo: photo1,
      name: "Emma Watson",
      jobTitle: "Managing Director",
      socialLinks: ["", "", ""],
    },
    {
      photo: photo2,
      name: "Will Smith",
      jobTitle: "Product Designer",
      socialLinks: ["", "", ""],
    },
    {
      photo: photo2,
      name: "Tom Cruise",
      jobTitle: "Founder & Chairman",
      socialLinks: ["", "", ""],
    },
    {
      photo: photo1,
      name: "Emma Watson",
      jobTitle: "Managing Director",
      socialLinks: ["", "", ""],
    },
    {
      photo: photo,
      name: "Will Smith",
      jobTitle: "Product Designer",
      socialLinks: ["", "", ""],
    },
    {
      photo: photo,
      name: "Tom Cruise",
      jobTitle: "Founder & Chairman",
      socialLinks: ["", "", ""],
    },
    {
      photo: photo1,
      name: "Emma Watson",
      jobTitle: "Managing Director",
      socialLinks: ["", "", ""],
    },
    {
      photo: photo2,
      name: "Will Smith",
      jobTitle: "Product Designer",
      socialLinks: ["", "", ""],
    },
    {
      photo: photo2,
      name: "Tom Cruise",
      jobTitle: "Founder & Chairman",
      socialLinks: ["", "", ""],
    },
    {
      photo: photo1,
      name: "Emma Watson",
      jobTitle: "Managing Director",
      socialLinks: ["", "", ""],
    },
    {
      photo: photo,
      name: "Will Smith",
      jobTitle: "Product Designer",
      socialLinks: ["", "", ""],
    },
  ];
  return (
    <div className={styles.wrapperAbout}>
      <div className={styles.linksContact}>
        <Link to="/">Home</Link>/<Link to="/about">About</Link>
      </div>
      <div className={styles.mainBoxAbout}>
        <div className={styles.mainBoxAboutStory}>
          <h2 className={styles.titleBoxStory}>Our Story</h2>
          <p className={styles.textBoxStory}>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
            <br />
            <br />
            <br />
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className={styles.mainBoxAboutBaner}>
          <img src={SideImage} alt="Greate Images" />
        </div>
      </div>
      <div className={styles.offersBoxAbout}>
        <OfferBox
          img={img}
          title="10.5k "
          description="Sallers active our site"
        />
        <OfferBox
          img={img1}
          title="33k"
          description="Mopnthly Produduct Sale"
        />
        <OfferBox
          img={img}
          title="45.5k"
          description="Customer active in our site"
        />
        <OfferBox
          img={img1}
          title="25k"
          description="Anual gross sale in our site"
        />
      </div>
      <div className={styles.aboutSlider}>
        <Slider data={sliderData} />
      </div>
      <div className={styles.aboutBoxService}>
        <OfferBox
          img={img3}
          title="FREE AND FAST DELIVERY"
          description="Free delivery for all orders over $140"
          className={`${aboutBoxService.aboutBox}`}
          aboutServiceTitle={titleStyle.aboutTitle}
          aboutServiceDescription={titleStyle.aboutDescription}
        />
        <OfferBox
          img={img4}
          title="24/7 CUSTOMER SERVICE"
          description="Friendly 24/7 customer support"
          className={`${aboutBoxService.aboutBox}`}
          aboutServiceTitle={titleStyle.aboutTitle}
          aboutServiceDescription={titleStyle.aboutDescription}
        />
        <OfferBox
          img={img5}
          title="MONEY BACK GUARANTEE"
          description="We reurn money within 30 days"
          className={`${aboutBoxService.aboutBox}`}
          aboutServiceTitle={titleStyle.aboutTitle}
          aboutServiceDescription={titleStyle.aboutDescription}
        />
      </div>
    </div>
  );
}

export default About;
