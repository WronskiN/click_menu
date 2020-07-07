import React from "react";
import InputField from "./InputForm.styled";

// const LabelForm = styled.input``;

const InputForm = (props) => {
  return (
    <>
      <label htmlFor={props.id}>
        <InputField
          placeholder={props.placeholder}
          type={props.type}
          id={props.id}
        />
      </label>
    </>
  );
};

export default InputForm;
