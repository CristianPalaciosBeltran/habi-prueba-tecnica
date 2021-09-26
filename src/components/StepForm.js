import React, { useContext } from "react";
import { useLocation } from "react-router";
import StepContext from "../context/StepContext";

const StepForm = () => {
  let location = useLocation().pathname;

  const step = useContext(StepContext).filter((step) => step.path === location)[0];

  return (
    <section>
      <div className="container">
        <div>
          <div>
            <div>1</div>
            <div>
              <div>paso 1</div>
              <div>Informaicón perosnal</div>
              <div>summary</div>
            </div>
          </div>
        </div>
        <div>
          <div>{step.description}</div>
          <form action="">
            <label htmlFor="">label</label>
            <input type="text" />
            <div>error</div>
            <button>Regresar</button>
            <button>Continuar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StepForm;
