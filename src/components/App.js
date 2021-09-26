import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home";

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
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        {/* <div>{Steps[0].description}</div> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
