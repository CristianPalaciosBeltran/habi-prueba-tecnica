import React from "react";
import logoHabi from "../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className="container">
      <div className="navbar">
        <div className="logo">
          <img src={logoHabi} width={111} height={27} alt="logo habi" />
        </div>
        <div>
          <button className="primary-button">Ayuda</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
