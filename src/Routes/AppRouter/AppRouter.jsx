import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayouts } from "../../components/MainLayouts/MainLayouts";
import { Home } from "../Home/Home";
import { Cart } from "../Cart/Cart";
import { Wishlist } from "../Wishlist/Wishlist";
import ErrorPages from "../ErrorPages/ErrorPages.js";
import Contact from "../Contact/Contact.js";
import About from "../About/About.jsx";
import Checkout from "../Checkout/Checkout.js";
import CreateAccount from "../CreateAccount/CreateAccount.js";
import Login from "../Login/Login.js";
import "./AppRouter.css";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contact" element={<Contact />} /> {/*Contact */}
        <Route path="/about" element={<About />} /> {/*About*/}
        <Route path="/checkout" element={<Checkout />} /> {/*Checkout*/}
        <Route path="/signup" element={<CreateAccount />} /> {/*CreateAccount*/}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPages />} /> {/* Отображение Error404 */}
      </Route>
    </Routes>
  );
};
