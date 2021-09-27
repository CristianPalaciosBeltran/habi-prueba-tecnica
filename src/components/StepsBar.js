import React, { useContext } from "react";
import StepContext, { useAppState } from "../context/StepContext";

import Col from "react-bootstrap/Col";

const StepsBar = () => {
  const { steps } = useAppState();
  
  return (
    <Col lg={12} className="step-bar d-flex">
      {steps.map((step, i) => {
        return (
          <div key={step.id} className="layout-step-bar">
            <div className="circle active">{i + 1}</div>
            <div className="layout-step-info">
              <small class="text-muted text-uppercase">paso {step.step}</small>
              <p className="fw-medium text-nowrap mb-0">{step.summaryTitle}</p>
            </div>
          </div>
        );
      })}
    </Col>
  );
};

export default StepsBar;
