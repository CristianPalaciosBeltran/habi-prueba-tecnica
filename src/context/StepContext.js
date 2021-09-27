import React from "react";
import produce from "immer";
import createPersistedReducer from "use-persisted-reducer";
const usePersistedReducer = createPersistedReducer("state");

const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

export const SET_STATE = "SET_STATE";
export const RESET = "RESET";

const initialState = () => ({
  steps: [
    {
      id: 1,
      inputs: [
        {
          label: "¿Cuál es tu nombre completo?",
          type: "text",
          placeholder: "Ingresa tu nombre",
          required: {
            value: true,
            message: "Introduzca un nombre",
          },
          defaultValue: "",
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
          label: "¿Cuál es tu correo?",
          type: "email",
          placeholder: "Ingresa tu correo",
          required: {
            value: true,
            message: "Introduzca un correo válido",
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
          label: "Calle",
          type: "text",
          placeholder: "Ingresa el nombre de la calle",
          required: {
            value: true,
            message: "Introduzca una calle",
          },
          class: "",
          col: 12,
          nameBack: "street",
        },
        {
          label: "No. Exterior",
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
          label: "No. Interior",
          type: "text",
          placeholder: "No. Interior",
          required: {
            value: "",
            message: "No. Interior",
          },
          class: "",
          col: 3,
          nameBack: "interiorNumber",
        },
        {
          label: "Código Postal",
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
          label: "Colonia",
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
          label: "Municipio o delegación",
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
            message: "Introduzca un piso válido",
          },
          class: "",
          col: 12,
          nameBack: "flat",
        },
      ],
      path: "/step-4-flat",
      step: 4,
      summaryTitle: "Información de piso",
      description: "En que piso esta ubicado su departamento",
      labelButtonNext: "Continuar",
    },
    {
      id: 5,
      inputs: [
        {
          label: "Zona BBQ",
          type: "checkbox",
          placeholder: "",
          required: {
            value: "",
            message: "",
          },
          class: "",
          col: 12,
          nameBack: "zonaBBQ",
        },
        {
          label: "Salón comunal",
          type: "checkbox",
          placeholder: "",
          required: {
            value: "",
            message: "",
          },
          class: "",
          col: 12,
          nameBack: "salonComunal",
        },
        {
          label: "Parque de Juegos",
          type: "checkbox",
          placeholder: "",
          required: {
            value: "",
            message: "",
          },
          class: "",
          col: 12,
          nameBack: "parqueJuegos",
        },
      ],
      path: "/step-5-spaces",
      step: 5,
      summaryTitle: "Información de espacios",
      description: "¿Su departamento cuenta con los siguientes espacios?",
      labelButtonNext: "Continuar",
    },
    {
      id: 6,
      inputs: [
        {
          label: "¿Tienes estacionamiento?",
          type: "switch",
          placeholder: "",
          required: {
            value: true,
            message: "Selecciona una opción",
          },
          class: "",
          col: 12,
          nameBack: "parking",
        },
        {
          label: "¿Está techado?",
          type: "switch",
          placeholder: "",
          required: {
            value: true,
            message: "Selecciona una opción",
          },
          class: "",
          col: 12,
          nameBack: "roof",
        },
      ],
      path: "/step-6-parking",
      step: 6,
      summaryTitle: "Información de estacionamiento",
      description: "¿Cómo es tu estacionamiento?",
      labelButtonNext: "Continuar",
    },
    {
      id: 7,
      inputs: [
        {
          label: "Precio del departamento",
          type: "number",
          placeholder: "Ingresa una cantidad",
          required: {
            value: true,
            message: "Introduzca una cantidad",
          },
          class: "",
          col: 12,
          nameBack: "amount",
        },
      ],
      path: "/step-7-amount",
      step: 7,
      summaryTitle: "Información de venta",
      description: "¿Cuanto crees que vale tu departamento en pesos $MXN?",
      labelButtonNext: "Continuar",
    },
    {
      id: 8,
      inputs: [
        {
          label: "Sube una foto",
          type: "file",
          placeholder: "",
          required: {
            value: "",
            message: "sube una foto",
          },
          class: "",
          col: 12,
          nameBack: "apartmentPhoto",
        },
      ],
      path: "/step-8-elevator",
      step: 8,
      summaryTitle: "Información del departamento",
      description: "Tiene una foto del departamento a la mano",
      labelButtonNext: "Continuar",
    },
    {
      id: 9,
      inputs: [
        {
          label: "Tu apartamento cuenta con elevador",
          type: "switch",
          placeholder: "",
          required: {
            value: true,
            message: "Selecciona una opción",
          },
          class: "",
          col: 12,
          nameBack: "elevator",
        },
      ],
      path: "/step-9-parking",
      step: 9,
      summaryTitle: "Información de estacionamiento",
      description: "¿Cómo es la accecibilidad en tu apartemento?",
      labelButtonNext: "Continuar",
    },
  ],
  finalValues: {},
});

const reducer = produce((draft, action) => {
  switch (action.type) {
    case SET_STATE:
      const step = draft.steps.find((step) => step.step === action.stepNumber);
      if (!step || !step.inputs) return;

      step.inputs = step.inputs.map((input) => {
        const value = action.data[input.nameBack];
        const isFile = value instanceof FileList;
        return {
          ...input,
          defaultValue: isFile ? null : value,
          defaultChecked: value,
          isFile,
          fileName: isFile && value?.[0]?.name,
        };
      });

      step.inputs.forEach((input) => {
     
        draft.finalValues[input.nameBack] =
          input.defaultValue || input.fileName;
      });

      break;
    case RESET:
      return initialState();
    default:
      return;
  }
}, {});

function AppProvider({ children }) {
  const [state, dispatch] = usePersistedReducer(reducer, initialState);
  return (
    <AppStateContext.Provider
      value={{
        ...state,
      }}
    >
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

export default function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return context;
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider");
  }
  return context;
}

function useApp() {
  return [useAppState(), useAppDispatch()];
}

export { AppProvider, useApp, useAppState, useAppDispatch };
