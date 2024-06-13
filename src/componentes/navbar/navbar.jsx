import React from "react";
import "./navbar.css";
import CartWidget from "../cartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbarContainer">
      <div className="logo">
        <h2>ElecTronics</h2>
      </div>
      <ul className="navbarMenu">
        <li>Smartphones</li>
        <li>Laptops</li>
        <li>Accesorios</li>
        <li>Audio y video</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
