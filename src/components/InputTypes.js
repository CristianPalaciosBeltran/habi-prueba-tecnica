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
  defaultValue,
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
        defaultValue={defaultValue}
      />
      {errors[nameBack] && (
        <div className="text-danger mt-2 small">{errors[nameBack].message}</div>
      )}
    </>
  );
};

const CheckBox = ({
  label,
  type,
  nameBack,
  required,
  register,
  errors,
  defaultChecked,
}) => {
  return (
    <div className="d-flex align-items-center">
      <Form.Check.Input
        type={type}
        name={nameBack}
        defaultChecked={defaultChecked}
        className={"input-check me-2"}
        {...register(nameBack, {
          required: { value: required.value, message: required.message },
        })}
      />
      <Form.Check.Label htmlFor={nameBack}>
        {label && `${label} ${required.value && "*"}`}
      </Form.Check.Label>
      {errors[nameBack] && (
        <div className="text-danger">{errors[nameBack].message}</div>
      )}
    </div>
  );
};

const Switch = ({
  label,
  type,
  nameBack,
  required,
  register,
  errors,
  defaultChecked,
}) => {
  return (
    <div className="mb-5">
      <Form.Label>{label && `${label} ${required.value && "*"}`}</Form.Label>
      <div className="d-flex switch-radio">
        <div className="d-flex align-items-center me-5">
          <Form.Check.Input
            type={"radio"}
            name={nameBack}
            {...register(nameBack, {
              required: { value: required.value, message: required.message },
            })}
            value="yes"
            defaultChecked={defaultChecked === "yes"}
          />
          <Form.Check.Label htmlFor={nameBack}>Sí</Form.Check.Label>
        </div>
        <div className="d-flex align-items-center">
          <Form.Check.Input
            type={"radio"}
            name={nameBack}
            {...register(nameBack, {
              required: { value: required.value, message: required.message },
            })}
            value="no"
            defaultChecked={defaultChecked === "no"}
          />
          <Form.Check.Label htmlFor={nameBack}>No</Form.Check.Label>
        </div>
      </div>
      {errors[nameBack] && (
        <div className="text-danger">{errors[nameBack].message}</div>
      )}
    </div>
  );
};

const ChooseInput = ({ input }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  switch (input.type) {
    case "file":
    case "number":
    case "email":
    case "text":
      return (
        <Input
          defaultValue={input.defaultValue}
          nameBack={input.nameBack}
          required={input.required}
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          register={register}
          errors={errors}
        />
      );
    case "checkbox":
      return (
        <CheckBox
          nameBack={input.nameBack}
          required={input.required}
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          register={register}
          errors={errors}
          defaultChecked={input.defaultChecked}
        />
      );
    case "switch":
      return (
        <Switch
          nameBack={input.nameBack}
          required={input.required}
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          register={register}
          errors={errors}
          defaultChecked={input.defaultChecked}
        />
      );
    default:
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
  }
};

export default ChooseInput;
