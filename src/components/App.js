import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import StepForm from "./StepForm";
import Navbar from "./Navbar";

const Steps = [
  {
    inputs: [
      {
        label: "¿Cuál es tu nombre completo?",
        typeInput: "text",
        placeholder: "nombre completo",
        required: {
          value: true,
          message: "Introdusca un nombre.",
        },
        class: "",
        col: "",
      },
    ],
    path: "/step-1-complete-name",
    step: 1,
    description: "Para comenzar necesitamos conocerte un poco mejor",
    labelButtonNext: "Continuar",
    valueBack: "completeName",
  },
];

const StepsRoutes = () => {
  return (
    <>
      {Steps.map((step) => {
        return <Route exact path={step.path} component={StepForm} />;
      })}
    </>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <StepsRoutes />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
