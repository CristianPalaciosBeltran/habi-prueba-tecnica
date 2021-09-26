import React from "react";
import { Link } from "react-router-dom";

const Home = ({ path }) => {
  return (
    <>
     
      <section className="home">
        <div className="container">
          <div>¿Quieres vender tu inmubeble? nosotros te ayudamos</div>
          <Link to={"/step-1-complete-name"} className="primary-button">
            Vender
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
