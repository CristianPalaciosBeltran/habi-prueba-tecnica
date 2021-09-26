import React, { useContext } from "react";
import { useLocation } from "react-router";
import StepContext from "../context/StepContext";

const StepsBar = () => {
  const steps = useContext(StepContext);
  return (
    <div className="step-bar">
      {steps.map((step, i) => {
        return (
          <div key={step.id} className="layout-step-bar">
            <div className="circle active">{i+1}</div>
            <div className="layout-step-info">
              <h6>paso {step.step}</h6>
              <h4>{step.summaryTitle}</h4>
              <div>Nombre: </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const StepForm = () => {
  let location = useLocation().pathname;

  const steps = useContext(StepContext);
  const step = steps.filter(
    (step) => step.path === location
  )[0];

  return (
    <section className="step-form">
      <div className="container">
        <StepsBar />
        <div>
          <h1>{step.description}</h1>
          <form action="" className="layout-form">
            {step.inputs.map((input, i) => {
              return (
                <div key={i} className="layout-input">
                  <label htmlFor="">label</label>
                  <input type="text" placeholder={input.placeholder} />
                  <div>error</div>
                </div>
              );
            })}

            <button>Regresar</button>
            <button className="primary-button">Continuar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StepForm;
