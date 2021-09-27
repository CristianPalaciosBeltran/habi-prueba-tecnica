import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import StepContext, { useAppState } from "../context/StepContext";

import Col from "react-bootstrap/Col";

const StepsBar = () => {
  const { steps } = useAppState();
  const location = useLocation().pathname;

  const currentStep = steps.filter((step) => step.path === location)[0];

  return (
    <Col lg={12} className="step-bar d-flex">
      {steps.map((step, i) => { 
        if (i + 3 > currentStep.step && i - 2 < currentStep.step) {
          return(<div
            key={step.id}
            className="layout-step-bar align-items-center me-5"
          >
            <div
              className={`circle d-flex align-items-center justify-content-center me-3 ${
                currentStep.step === i + 1
                  ? "active"
                  : currentStep.step < i + 1
                  ? ""
                  : "complete"
              }`}
            >
              {currentStep.step === i + 1
                ? i + 1
                : currentStep.step < i + 1
                ? i + 1
                : ""}
            </div>
            <div className="layout-step-info">
              <small class="text-muted text-uppercase">paso {step.step}</small>
              <p className="fw-medium text-nowrap mb-0">{step.summaryTitle}</p>
            </div>
          </div>)
        }
        // if (i + 1 < currentStep.step - 2) {
        //   return;
        // }
        return;
      })}
    </Col>
  );
};

export default StepsBar;
