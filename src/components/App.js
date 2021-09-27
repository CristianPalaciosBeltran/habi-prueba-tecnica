import React, { useContext } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import StepForm from "./StepForm";
import Navbar from "./Navbar";
import { AppProvider, useAppState } from "../context/StepContext";

const StepsRoutes = () => {
  const { steps } = useAppState();

  return (
    <>
      {steps.map((step) => {
        return (
          <Route key={step.step} exact path={step.path} component={StepForm} />
        );
      })}
    </>
  );
};
const Router = () => {
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

const App = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};

export default App;
