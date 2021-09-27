import React, { useContext } from "react";
import { useLocation, useHistory } from "react-router";
import StepContext from "../context/StepContext";
import { useForm, FormProvider } from "react-hook-form";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import InputTypes from "./InputTypes";
import StepsBar from "./StepsBar";

const StepForm = () => {
  const location = useLocation().pathname;
  const history = useHistory();

  const steps = useContext(StepContext);
  const step = steps.filter((step) => step.path === location)[0];

  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const stepNext = step.step + 1;
    const moveNext = steps.find((step) => step.step === stepNext);
    if (moveNext) {
      history.push(moveNext.path);
    } else {
      history.push("/summary");
    }
  };
  const prev = () => history.goBack();

  return (
    <section className="step-form ">
      <Container className="d-flex">
        <StepsBar />
        <Col lg={{ span: 6, offset: 1 }}>
          <h1 className="mb-5">{step.description}</h1>
          <FormProvider {...methods}>
            <Form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="layout-form"
            >
              <Row>
                {step.inputs.map((input, i) => {
                  return (
                    <Col lg={input.col} key={i} className="layout-input">
                      <InputTypes input={input} />
                    </Col>
                  );
                })}
              </Row>
              <Row className="mt-5">
                <Col lg={6}>
                  {/*renderear solo del primero en adelante */}
                  {step.step > 1 && (
                    <Button variant="outline-secondary" onClick={prev}>
                      Regresar
                    </Button>
                  )}
                </Col>
                <Col lg={6}>
                  <Button type="submit">{step.labelButtonNext}</Button>
                </Col>
              </Row>
            </Form>
          </FormProvider>
        </Col>
      </Container>
    </section>
  );
};

export default StepForm;
