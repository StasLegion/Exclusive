import React, { useState } from "react";
import styles from "./Contact.module.css";
import { Link } from "react-router-dom";
import imgphoneImg from "./../../images/icons-phone.png";
import emailImg from "./../../images/icons-mail.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateName = (name) => {
    const regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    return regex.test(name);
  };

  const validateEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\+\d{1,3} \d{3} \d{3} \d{2} \d{2}$/;
    return regex.test(phone);
  };

  const validateMessage = (message) => {
    return message.length >= 5;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateName(formData.name)) {
      newErrors.name = "Name must consist of two words with capital letters.";
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "Email is not valid.";
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Phone format must be '+* *** *** ** **'.";
    }
    if (!validateMessage(formData.message)) {
      newErrors.message = "Message must be at least 5 characters.";
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("Form :", formData);

      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={styles.wrapperContact}>
      <div className={styles.linksContact}>
        <Link to="/">Home</Link>/<Link to="/contact">Contact</Link>
      </div>
      <div className={styles.containerContact}>
        <div className={styles.infoContact}>
          <div className={styles.infoContactBox}>
            <div className={styles.infoContactTitleBox}>
              <img src={imgphoneImg} alt="phone" />
              <h4 className={styles.titleContact}>Call To Us</h4>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <a>Phone: +8801611112222</a>
          </div>
          <div className={styles.lineContact}></div>
          <div className={styles.infoContactBox}>
            <div className={styles.infoContactTitleBox}>
              <img src={emailImg} alt="email" />
              <h4 className={styles.titleContact}>Write To US</h4>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            Emails:<a>customer@exclusive.com</a> <br />
            Emails:<a>support@exclusive.com</a>
          </div>
        </div>
        <div className={styles.formContact}>
          <form onSubmit={handleSubmit}>
            <div className={styles.topFormContact}>
              <div className={styles.boxContact}>
                <input
                  placeholder="Your Name *"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <span className={styles.error}>{errors.name}</span>
                )}
              </div>

              <div className={styles.boxContact}>
                <input
                  placeholder="Your Email *"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
              </div>

              <div className={styles.boxContact}>
                <input
                  placeholder="Your Phone *"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && (
                  <span className={styles.error}>{errors.phone}</span>
                )}
              </div>
            </div>

            <div className={styles.messageContact}>
              <textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && (
                <span className={styles.error}>{errors.message}</span>
              )}
            </div>

            <button className={styles.buttonContact} type="submit">
              Send Massage
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
