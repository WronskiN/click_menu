import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";

const InputField = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  background-color: transparent;
  padding-left: 1rem;
  font-size: ${theme.fontSize.s};
  border-bottom: 3px solid ${theme.text};
  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${theme.text};
    font-weight: ${theme.bold};
  }

  @media (min-width: 768px) {
    width: 345px;
    height: 60px;
    font-size: ${theme.fontSize.m};
  }
`;

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
