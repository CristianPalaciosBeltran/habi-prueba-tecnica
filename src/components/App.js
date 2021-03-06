import React, { useContext } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "./Home";
import StepForm from "./StepForm";
import Navbar from "./Navbar";
import { AppProvider, useAppState } from "../context/StepContext";
import JsonBack from './JsonBack'

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
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/json-back" component={JsonBack} />
        <StepsRoutes />
      </Switch>
    </HashRouter>
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
