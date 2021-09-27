import React, { useContext } from "react";
import StepContext from "../context/StepContext";

import Col from "react-bootstrap/Col";

const StepsBar = () => {
  const steps = useContext(StepContext);
  return (
    <Col lg={12} className="step-bar d-flex">
      {steps.map((step, i) => {
        return (
          <div key={step.id} className="layout-step-bar">
            <div className="circle active">{i + 1}</div>
            <div className="layout-step-info">
              <h6>paso {step.step}</h6>
              <h4>{step.summaryTitle}</h4>
              <div>Nombre: </div>
            </div>
          </div>
        );
      })}
    </Col>
  );
};

export default StepsBar;
