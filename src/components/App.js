import React from "react";

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
    labelButtonNext: 'Continuar',
    valueBack: "completeName",
  },
];
const App = () => {
  return (
    <>
      <div>{Steps[0].description}</div>
    </>
  );
};

export default App;
