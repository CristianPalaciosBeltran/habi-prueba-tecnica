import React from "react";
import Form from "react-bootstrap/Form";

const Input = ({ label, placeholder, error }) => {
  return (
    <>
      <Form.Label htmlFor="">{label}</Form.Label>
      <Form.Control type="text" placeholder={placeholder} />
      <div className="text-danger">{error}</div>
    </>
  );
};

const ChooseInput = ({ input }) => {
  switch (input.type) {
    case "text":
      return (
        <Input
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          error={input.error}
        />
      );
    default:
      return (
        <Input
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          error={input.error}
        />
      );
  }
};

export default ChooseInput;
