import React from "react";
import InputField from "./InputForm.styled";

const InputForm = ({ placeholder, type, name, id, label, value, onChange }) => {
  return (
    <>
      <label htmlFor={label}>
        <InputField
          placeholder={placeholder}
          type={type}
          name={name}
          id={id}
          label={label}
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default InputForm;
