import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../context/StepContext";

const Home = () => {
  const {
    steps: [firstStep],
  } = useAppState();
  return (
    <>
      <section className="home d-flex align-items-center bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h1 className="display-4 mb-3">¿Quieres vender tu inmubeble? <span class="fw-medium">nosotros te ayudamos</span></h1>
              <p className="lead text-muted mb-4">Vendemos tu departamento en 10 días y de contado. Vende sin comisiones de una manera fácil, rápida y segura.</p>
              <Link to={firstStep.path} className="btn btn-primary">
                Vender ahora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
