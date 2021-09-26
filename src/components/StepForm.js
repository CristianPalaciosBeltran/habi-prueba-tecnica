import React, { useContext } from "react";
import { useLocation } from "react-router";
import StepContext from "../context/StepContext";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import InputTypes from "./InputTypes";

const StepsBar = () => {
  const steps = useContext(StepContext);
  return (
    <Col lg={3} className="step-bar">
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

const StepForm = () => {
  let location = useLocation().pathname;

  const steps = useContext(StepContext);
  const step = steps.filter((step) => step.path === location)[0];

  return (
    <section className="step-form">
      <Container>
        <StepsBar />
        <Col lg={{ span: 6, offset: 1 }}>
          <h1 className="mb-5">{step.description}</h1>
          <Form action="" className="layout-form">
            <Row>
              {step.inputs.map((input, i) => {
                return (
                  <Col lg={input.col} key={i} className="layout-input">
                    <InputTypes input={input} />
                  </Col>
                );
              })}
              <div className="d-flex">
                <Button>Regresar</Button>
                <Button>{step.labelButtonNext}</Button>
              </div>
            </Row>
          </Form>
        </Col>
      </Container>
    </section>
  );
};

export default StepForm;
