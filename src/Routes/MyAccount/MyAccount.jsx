import { current } from "@reduxjs/toolkit";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./myAccount.module.css";

const MyAccount = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassvord: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Save Data :", formData);
  };

  const hendleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassvord: "",
    });
  };

  return (
    <div className={styles.wrapperMyAccount}>
      <div className={styles.linksMyAccount}>
        <Link to="/">Home</Link>/<Link to="/myAccount">My Account</Link>
      </div>
      <div className={styles.myAccountContainer}>
        <nav className={styles.myAccountNav}>
          <h4 className={styles.myAccountNavTitle}>Manage My Account</h4>
          <Link to="/myProfile">My Profile</Link>
          <Link to="/addressBook">Address Book</Link>
          <Link to="/myPaymentOptions">My Payment Options</Link>
          <h4 className={styles.myAccountNavTitle}>My Orders</h4>
          <Link to="/myReturns">My Returns</Link>
          <Link to="/myCancellations">My Cancellations</Link>
          <h4 className={styles.myAccountNavTitle}>My WishList</h4>
        </nav>
        <form onSubmit={handleSubmit}>
          <h2 className={styles.myAccountFormTitle}>Edit Your Profile</h2>
          <div className={styles.myAccountBox}>
            <div className={styles.myAccountLabelBox}>
              <h4>First Name:</h4>
              <label>
                <input
                  placeholder="Md"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className={styles.myAccountLabelBox}>
              <h4>Last Name:</h4>
              <label>
                <input
                  placeholder="Rimel"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className={styles.myAccountBox}>
            <div className={styles.myAccountLabelBox}>
              <h4>Email:</h4>
              <label>
                <input
                  placeholder="rimel1111@gmail.com"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className={styles.myAccountLabelBox}>
              <h4>Address:</h4>
              <label>
                <input
                  placeholder="Kingston, 5236, United State"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className={styles.myAccountPasswordBox}>
            <h2 className={styles.myAccountPasswordTitle}>Password Changes</h2>
            <div className={styles.myAccountPasswordLabelBox}>
              <label>
                <input
                  placeholder="Current Password"
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className={styles.myAccountPasswordLabelBox}>
              <label>
                <input
                  placeholder="New Password"
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className={styles.myAccountPasswordLabelBox}>
              <label>
                <input
                  placeholder="Confirm New Password"
                  type="password"
                  name="confirmNewPassword"
                  value={formData.confirmNewPassword}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
