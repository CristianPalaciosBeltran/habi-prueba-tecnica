import React from "react";

const StepForm = () => {
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
