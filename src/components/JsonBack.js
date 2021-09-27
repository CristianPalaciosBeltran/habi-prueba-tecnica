import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { SET_STATE, useApp } from "../context/StepContext";

const JsonBack = () => {
  const [{ steps, finalValues }, dispatch] = useApp();
  const cleanStorage = () => {
    localStorage.clear();
    window.location.reload();
    window.location.href = "/";
  };
  return (
    <Container>
      <Row className="mt-5 justify-content-center">
        <Col lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>Json a enviar al back.</Card.Title>
              <div className="mb-5">{JSON.stringify(finalValues)}</div>
              <Button className="w-100" onClick={cleanStorage}>
                Limpiar Storage e ir a Inicio
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default JsonBack;
