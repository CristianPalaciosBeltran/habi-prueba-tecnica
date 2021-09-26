import React from "react";

const StepContext = React.createContext([
  {
    id: 1,
    inputs: [
      {
        label: "¿Cuál es tu nombre completo?",
        type: "text",
        placeholder: "Ingresa tu nombre",
        required: {
          value: true,
          message: "Introdusca un nombre.",
        },
        class: "",
        col: 12,
        nameBack: "completeName",
      },
    ],
    path: "/step-1-complete-name",
    step: 1,
    summaryTitle: "Información Personal",
    description: "Para comenzar necesitamos conocerte un poco mejor",
    labelButtonNext: "Continuar",
  },
  {
    id: 2,
    inputs: [
      {
        label: "¿Cuál es tu corroe?",
        type: "email",
        placeholder: "Ingresa tu correo",
        required: {
          value: true,
          message: "Introdusca un correo valido.",
        },
        class: "",
        col: 12,
        nameBack: "email",
      },
    ],
    path: "/step-2-email",
    step: 2,
    summaryTitle: "Información de Contacto",
    description: "Necesitaremos ponernos en contacto con usted",
    labelButtonNext: "Continuar",
  },
  {
    id: 3,
    inputs: [
      {
        label: "",
        type: "text",
        placeholder: "Ingresa el nombre de la calle",
        required: {
          value: true,
          message: "Introduzca una calle.",
        },
        class: "",
        col: 12,
        nameBack: "street",
      },
      {
        label: "",
        type: "text",
        placeholder: "No. Exterior",
        required: {
          value: true,
          message: "No. Exterior",
        },
        class: "",
        col: 3,
        nameBack: "exteriorNumber",
      },
      {
        label: "",
        type: "text",
        placeholder: "No. Interior",
        required: {
          value: true,
          message: "No. Interior",
        },
        class: "",
        col: 3,
        nameBack: "interiorNumber",
      },
      {
        label: "",
        type: "text",
        placeholder: "Ingresa el código postal",
        required: {
          value: true,
          message: "Ingresa el código postal",
        },
        class: "",
        col: 6,
        nameBack: "zipCode",
      },
      {
        label: "",
        type: "text",
        placeholder: "Ingresa la colonia",
        required: {
          value: true,
          message: "Ingresa la colonia",
        },
        class: "",
        col: 6,
        nameBack: "suburbio",
      },
      {
        label: "",
        type: "text",
        placeholder: "Municipio o delegación",
        required: {
          value: true,
          message: "Ingresa un municipio o delegación",
        },
        class: "",
        col: 6,
        nameBack: "town",
      },
    ],
    path: "/step-3-adress",
    step: 3,
    summaryTitle: "Información del departamento",
    description: "En que ubicación se encuentra el apartamento",
    labelButtonNext: "Continuar",
  },
  {
    id: 4,
    inputs: [
      {
        label: "Numero de piso Max. 50",
        type: "number",
        placeholder: "Ingresa tu piso",
        required: {
          value: true,
          message: "Introduzca un piso valido.",
        },
        class: "",
        col: 12,
        nameBack: "flat",
      },
    ],
    path: "/step-4-flat",
    step: 4,
    summaryTitle: "Información de piso",
    description: "Necesitamos sabe en que piso esta ubicado su departamento.",
    labelButtonNext: "Continuar",
  },
]);

export default StepContext;
