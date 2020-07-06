import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";

const InputSearch = styled.input`
  width: 230px;
  height: 40px;
  background-color: ${theme.primaryLighter};
  border: none;
  border-radius: 0.5rem;
  padding-left: 1rem;
  font-size: ${theme.fontSize.s};

  :focus {
    outline: 2px solid white;
    -moz-outline-radius: 0.5rem;
  }

  ::placeholder {
    color: ${theme.text};
  }

  @media (min-width: 768px) {
    width: 345px;
    height: 60px;
    font-size: ${theme.fontSize.m};
  }
`;

export default InputSearch;
