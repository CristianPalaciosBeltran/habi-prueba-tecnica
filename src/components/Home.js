import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StepContext from "../context/StepContext";

const Home = ({ path }) => {
  const firstStep = useContext(StepContext)[0];
  return (
    <>
      <section className="home">
        <div className="container">
          <h1>¿Quieres vender tu inmubeble? nosotros te ayudamos</h1>
          <Link to={firstStep.path} className="primary-button">
            Vender
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
