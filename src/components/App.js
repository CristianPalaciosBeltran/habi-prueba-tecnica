import React, { useContext } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import StepForm from "./StepForm";
import Navbar from "./Navbar";
import StepContext from "../context/StepContext";

const StepsRoutes = () => {
  const steps = useContext(StepContext);
  console.log(steps);
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
