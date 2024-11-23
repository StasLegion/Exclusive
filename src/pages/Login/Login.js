import React, { useState } from "react";
import styles from "./Login.module.css"; // Импортируйте файл стилей, если необходимо
import img from "../../images/1.png";

const Login = () => {
  const [loginData, setLoginData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", loginData);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerImg}>
        <img src={img} />
      </div>
      <div className={styles.containerLogin}>
        <h2 className={styles.titleBoxLogin}>Log In to Exclusive</h2>
        <p className={styles.titleTextLogin}>Enter your details below</p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className={styles.inputLogin}
              type="text"
              name="emailOrPhone"
              placeholder="Email or Phone Number"
              value={loginData.emailOrPhone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className={styles.inputLogin}
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>
        </form>
        <div className={styles.buttonBoxLogin}>
          <button className={styles.buttonLogin} type="submit">
            Log In
          </button>
          <button className={styles.forgotPasswordButton}>
            Forget Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
