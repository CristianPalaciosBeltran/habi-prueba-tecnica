import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../context/StepContext";

const Home = () => {
  const {
    steps: [firstStep],
  } = useAppState();
  return (
    <>
      <section className="home">
        <div className="container">
          <h1>¿Quieres vender tu inmubeble? nosotros te ayudamos</h1>
          <Link to={firstStep.path} className="btn btn-primary">
            Vender
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
