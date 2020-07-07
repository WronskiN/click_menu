import React from "react";
import { Textarea } from "./InputTextarea.styled";

const InputTextarea = (props) => {
  return (
    <>
      <label htmlFor={props.id}>
        <Textarea
          placeholder={props.placeholder}
          type={props.type}
          id={props.id}
        />
      </label>
    </>
  );
};

export default InputTextarea;
