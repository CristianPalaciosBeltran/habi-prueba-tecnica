import React, { useState } from "react";
import { useLocation, useHistory } from "react-router";
import StepContext, { SET_STATE, useApp } from "../context/StepContext";
import { useForm, FormProvider } from "react-hook-form";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";

import InputTypes from "./InputTypes";
import StepsBar from "./StepsBar";

const StepForm = () => {
  const location = useLocation().pathname;
  const history = useHistory();

  const [{ steps, finalValues }, dispatch] = useApp();
  const step = steps.filter((step) => step.path === location)[0];

  const methods = useForm();
  const onSubmit = (data) => {
    dispatch({ type: SET_STATE, stepNumber: step.step, data });
    const stepNext = step.step + 1;
    const moveNext = steps.find((step) => step.step === stepNext);
    if (moveNext) {
      history.push(moveNext.path);
    } else {
      history.push("/summary");
    }
  };

  const prev = () => history.goBack();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(finalValues);
  return (
    <section className="step-form pt-5">
      <Container>
        <Row className="scroll">
          <StepsBar />
        </Row>

        <Row>
          <Col lg={7}>
            <h1>{step.description}</h1>
            <FormProvider {...methods}>
              <Form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="layout-form"
              >
                <Row>
                  {step.inputs.map((input, i) => {
                    return (
                      <Col lg={input.col} key={i} className="layout-input mb-3">
                        <InputTypes input={input} />
                      </Col>
                    );
                  })}
                </Row>
                <Row className="mt-5">
                  <Col lg={6} lg={{ order: "first" }}>
                    {/*renderear solo del primero en adelante */}
                    {step.step > 1 && (
                      <Button variant="link" className="w-100" onClick={prev}>
                        Regresar
                      </Button>
                    )}
                  </Col>
                  <Col lg={6} xs={{ order: "first" }}>
                    <Button type="submit">{step.labelButtonNext}</Button>
                  </Col>
                </Row>
              </Form>
            </FormProvider>
          </Col>
          <Col lg={{ span: 4, offset: 1 }}>
            {/* <div className="p-5 bg-primary">{JSON.stringify(finalValues)}</div> */}
            <div className="card bg-transparent d-none d-lg-block">
              <div class="card-body p-4">
                <p className="fw-medium">Resumen</p>
                {Object.values(finalValues).map((value) => {
                  return <small className="d-block mb-2">{value}</small>;
                })}
              </div>
            </div>
            <div className="d-block d-lg-none">
              <Button
                variant="secondary"
                className="w-100"
                onClick={handleShow}
              >
                Resumen
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Resumen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {/* {JSON.stringify(finalValues)} */}
                  {Object.values(finalValues).map((value) => {
                    return <small className="d-block mb-2">{value}</small>;
                  })}
                </Modal.Body>
              </Modal>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StepForm;
