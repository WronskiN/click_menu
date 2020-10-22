import styled from "styled-components";
// import { theme } from "../../../theme/mainTheme";

const InputField = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  background-color: transparent;
  padding-left: 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  border-bottom: 3px solid ${({ theme }) => theme.text};
  @media (min-width: 768px) {
    width: 345px;
    height: 60px;
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: ${({ theme }) => theme.bold};
  }
`;

export default InputField;
