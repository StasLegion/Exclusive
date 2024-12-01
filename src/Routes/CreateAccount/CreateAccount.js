import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Импортируйте useNavigate
import img from "../../images/1.png";
import styles from "./CreateAccount.module.css";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });

  // Замените useHistory на useNavigate
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData)); // Сохранение данных в LocalStorage
    console.log("Account created:", formData);
    // Перенаправление на страницу входа
    navigate("/login"); // Используйте navigate вместо history.push
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerImg}>
        <img src={img} />
      </div>
      <div className={styles.container}>
        <h2 className={styles.titleBox}>Create an Account</h2>
        <p className={styles.titleText}>Enter your details below</p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className={styles.inputCreate}
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className={styles.inputCreate}
              type="text"
              name="emailOrPhone"
              placeholder="Email or Phone Number"
              value={formData.emailOrPhone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className={styles.inputCreate}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className={styles.buttonCreate} type="submit">
            Create Account
          </button>
        </form>
        <p>
          <span className={styles.beforeLigin}>Already have an account? </span>
          <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
