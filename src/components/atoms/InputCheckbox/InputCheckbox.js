import React from "react";
import styled from "styled-components";

const StyledInputCheckbox = styled.input`
  width: 20px;
  height: 20px;
`;

const InputChecbox = ({ type, label, checked, name, onChange }) => {
  return (
    <label htmlFor={label}>
      <StyledInputCheckbox
        type={type}
        checked={checked}
        name={name}
        onChange={onChange}
      />
    </label>
  );
};

export default InputChecbox;
