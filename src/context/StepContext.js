import React from "react";

const StepContext = React.createContext([
  {
    id:1,
    inputs: [
      {
        label: "¿Cuál es tu nombre completo?",
        typeInput: "text",
        placeholder: "Ingresa tu nombre",
        required: {
          value: true,
          message: "Introdusca un nombre.",
        },
        class: "",
        col: "",
        valueBack: "completeName",
      },
    ],
    path: "/step-1-complete-name",
    step: 1,
    summaryTitle: "Información Personal",
    description: "Para comenzar necesitamos conocerte un poco mejor",
    labelButtonNext: "Continuar",
  },
  {
    id:2,
    inputs: [
      {
        label: "¿Cuál es tu nombre completo?",
        typeInput: "text",
        placeholder: "Ingresa tu nombre",
        required: {
          value: true,
          message: "Introdusca un nombre.",
        },
        class: "",
        col: "",
        valueBack: "completeName",
      },
    ],
    path: "/step-2-complete-name",
    step: 2,
    summaryTitle: "Correo electronico",
    description: "Para comenzar necesitamos conocerte un poco mejor",
    labelButtonNext: "Continuar",
  },
]);

export default StepContext;
