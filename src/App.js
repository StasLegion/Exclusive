import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount/CreateAccount.js";
import Login from "./pages/Login/Login.js";
import ErrorPages from "./pages/ErrorPages/ErrorPages.js";
import Contact from "./pages/Contact/Contact.js";
import About from "./pages/About/About.js";
import Checkout from "./pages/Checkout/Checkout.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} /> {/*Contact */}
        <Route path="/about" element={<About />} /> {/*About*/}
        <Route path="/checkout" element={<Checkout />} /> {/*Checkout*/}
        <Route path="*" element={<ErrorPages />} /> {/* Отображение Error404 */}
      </Routes>
    </Router>
  );
}

export default App;
