import React from "react";
import { Link } from "react-router-dom";
import logoHabi from "../assets/logo.svg";

import NavbarB from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  return (
    <div className='bg-nav'>
      <NavbarB className="container py-3">
        <Container className=" d-flex justify-content-between">
          <Link to="/" className="logo">
            <img src={logoHabi} width={111} height={27} alt="logo habi" />
          </Link>
          <div>
            <Button className="btn-sm">Ayuda</Button>
          </div>
        </Container>
      </NavbarB>
    </div>
  );
};

export default Navbar;
