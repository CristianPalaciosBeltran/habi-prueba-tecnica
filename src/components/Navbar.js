import React from "react";
import { Link } from "react-router-dom";
import logoHabi from "../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className="container">
      <div className="navbar">
        <Link to="/" className="logo">
          <img src={logoHabi} width={111} height={27} alt="logo habi" />
        </Link>
        <div>
          <button className="primary-button">Ayuda</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
