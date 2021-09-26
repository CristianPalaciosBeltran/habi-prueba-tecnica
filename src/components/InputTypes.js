import React from "react";
import Form from "react-bootstrap/Form";

import { useFormContext } from "react-hook-form";

const Input = ({
  label,
  placeholder,
  type,
  nameBack,
  required,
  register,
  errors,
}) => {
  return (
    <>
      <Form.Label htmlFor={nameBack}>
        {label && `${label} ${required.value && "*"}`}
      </Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={nameBack}
        {...register(nameBack, {
          required: { value: required.value, message: required.message },
        })}
      />
      {errors[nameBack] && (
        <div className="text-danger">{errors[nameBack].message}</div>
      )}
    </>
  );
};

const ChooseInput = ({ input }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  switch (input.type) {
    case "number":
    case "email":
    case "text":
      return (
        <Input
          nameBack={input.nameBack}
          required={input.required}
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          register={register}
          errors={errors}
        />
      );
    default:
      return (
        <Input
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          error={input.error}
          {...methods}
        />
      );
  }
};

export default ChooseInput;
