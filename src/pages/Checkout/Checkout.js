import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./checkout.module.css";
import imageCard1 from "../../images/g27cq4-500x500 1.png";
import imageCard2 from "../../images/g92-2-500x500 1.png";

const Checkout = () => {
  const [cartItems] = useState([
    { id: 1, name: "Товар 1", price: 100, quantity: 1 },
    { id: 2, name: "Товар 2", price: 200, quantity: 1 },
  ]);
  const handlePlaceOrder = () => {
    alert(`Заказ оформлен! $`);
  };
  const handleCouponApply = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(0);
    } else {
      alert("Неверный код купона");
    }
  };
  const [setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [firstName, setFirstName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [townCity, setTownCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [errors, setErrors] = useState({});
  const [countryCode, setCountryCode] = useState("+7");

  const API_KEY = "YOUR_NUMVERIFY_API_KEY_HERE";

  useEffect(() => {
    const storedData = localStorage.getItem("billingDetails");
    if (storedData) {
      const {
        firstName,
        companyName,
        streetAddress,
        apartment,
        townCity,
        phoneNumber,
        email,
      } = JSON.parse(storedData);
      setFirstName(firstName);
      setCompanyName(companyName);
      setStreetAddress(streetAddress);
      setApartment(apartment);
      setTownCity(townCity);
      setPhoneNumber(phoneNumber);
      setEmail(email);
      setSaveInfo(true);
    }
  }, []);

  const validatePhoneNumber = async (number) => {
    try {
      const response = await axios.get(
        `http://apilayer.net/api/validate?access_key=${API_KEY}&number=${number}`
      );
      if (response.data.valid) {
        return response.data;
      } else {
        throw new Error("");
      }
    } catch (error) {
      console.error(error.message);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!/^[A-Z][a-zA-Z]*$/.test(firstName)) {
      newErrors.firstName = " ";
    }
    if (companyName && !/^[A-Z][a-zA-Z]*$/.test(companyName)) {
      newErrors.companyName = " ";
    }
    if (!/^[a-zA-Z0-9\s]+$/.test(streetAddress)) {
      newErrors.streetAddress = " ";
    }
    if (apartment && !/^[a-zA-Z0-9\s]+$/.test(apartment)) {
      newErrors.apartment = " ";
    }
    if (!/^[A-Z][a-zA-Z\s]*$/.test(townCity)) {
      newErrors.townCity = " ";
    }

    const fullPhoneNumber = `${countryCode}${phoneNumber.replace(/\D/g, "")}`;
    const phoneValidationResult = await validatePhoneNumber(fullPhoneNumber);
    if (!phoneValidationResult) {
      newErrors.phoneNumber = " ";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = " ";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formData = {
        firstName,
        companyName,
        streetAddress,
        apartment,
        townCity,
        phoneNumber: fullPhoneNumber,
        email,
        saveInfo,
      };

      if (saveInfo) {
        localStorage.setItem("billingDetails", JSON.stringify(formData));
      }

      console.log("Form submitted successfully!", formData);
    }
  };

  return (
    <div className={styles.wrapperContainrCheckout}>
      <h2 className={styles.titltOne}>Billing Details</h2>
      <div className={styles.containerBox}>
        <div className={styles.checkoutContainer}>
          <form className={styles.formCheckout} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.titleLabelCheckout} htmlFor="firstName">
                First Name <span className={styles.titleSpanCheckout}>*</span>:
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && (
                <span className={styles.error}>{errors.firstName}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label
                className={styles.titleLabelCheckout}
                htmlFor="companyName"
              >
                Company Name:
              </label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              {errors.companyName && (
                <span className={styles.error}>{errors.companyName}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label
                className={styles.titleLabelCheckout}
                htmlFor="streetAddress"
              >
                Street Address{" "}
                <span className={styles.titleSpanCheckout}>*</span>:
              </label>
              <input
                type="text"
                id="streetAddress"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
              {errors.streetAddress && (
                <span className={styles.error}>{errors.streetAddress}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.titleLabelCheckout} htmlFor="apartment">
                Apartment, floor, etc. (optional):
              </label>
              <input
                type="text"
                id="apartment"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
              />
              {errors.apartment && (
                <span className={styles.error}>{errors.apartment}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.titleLabelCheckout} htmlFor="townCity">
                Town/City <span className={styles.titleSpanCheckout}>*</span>:
              </label>
              <input
                type="text"
                id="townCity"
                value={townCity}
                onChange={(e) => setTownCity(e.target.value)}
              />
              {errors.townCity && (
                <span className={styles.error}>{errors.townCity}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label
                className={styles.titleLabelCheckout}
                htmlFor="phoneNumber"
              >
                Phone Number <span className={styles.titleSpanCheckout}>*</span>
                :
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {errors.phoneNumber && (
                <span className={styles.error}>{errors.phoneNumber}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.titleLabelCheckout} htmlFor="email">
                Email Address{" "}
                <span className={styles.titleSpanCheckout}>*</span>:
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>

            <div className={styles.formCheckbox}>
              <label>
                <input
                  className={styles.formCheckbox}
                  type="checkbox"
                  checked={saveInfo}
                  onChange={() => setSaveInfo(!saveInfo)}
                />
              </label>
              <p>Save this information for faster check-out next time</p>
            </div>
          </form>
        </div>
        {/* Корзина */}
        <div className={styles.cartContainer}>
          {cartItems.length === 0 ? (
            <p>Ваша корзина пуста.</p>
          ) : (
            <div>
              <div className={styles.orderCard}>
                <img className={styles.imageCard} src={imageCard1} alt="" />
                <p className={styles.descriptionCard}>LCD Monitor</p>
                <span className={styles.priceCard}>1100$</span>
              </div>
              <div className={styles.orderCard}>
                <img className={styles.imageCard} src={imageCard2} alt="" />
                <p className={styles.descriptionCard}>LCD Monitor</p>
                <span className={styles.priceCard}>650$</span>
              </div>
              <div className={styles.boxInfoSell}>
                Subtotal: <span>$1750</span>
              </div>
              <div className={styles.boxInfoSell}>
                Shipping: <span>Free</span>
              </div>
              <div className={styles.boxInfoSell}>
                Total: <span>$1750</span>
              </div>

              <div className={styles.payMethodCard}>
                <div className={styles.payMethodCardBank}>
                  <label>
                    <input
                      type="radio"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={() => setPaymentMethod("bank")}
                    />
                    Bank
                  </label>
                  <img
                    className={styles.imgPayMethodBank}
                    src={imageCard1}
                    alt=""
                  />
                </div>
                <div className={styles.payMethodCardBank}>
                  <label>
                    <input
                      type="radio"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={() => setPaymentMethod("cash")}
                    />
                    Cash on Delivery
                  </label>
                </div>
              </div>

              <div className={styles.payMethodCardCoupon}>
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button
                  className={styles.buttonApply}
                  onClick={handleCouponApply}
                >
                  Apply Coupon
                </button>
              </div>
              <button className={styles.buttonOrder} onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
