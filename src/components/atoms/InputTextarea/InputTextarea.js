import React from "react";
import { Textarea } from "./InputTextarea.styled";

const InputTextarea = ({
  placeholder,
  type,
  name,
  id,
  label,
  value,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={id}>
        <Textarea
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          label={label}
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default InputTextarea;
