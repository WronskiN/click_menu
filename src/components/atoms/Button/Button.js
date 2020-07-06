import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";

const Button = styled.button`
  width: 11rem;
  height: 4rem;
  font-size: ${theme.fontSize.xs};
  color: ${theme.buttonText};
  font-weight: ${theme.bold};
  background-color: ${theme.text};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 14rem;
    height: 5rem;
    font-size: ${theme.fontSize.m};
  }
  @media (min-width: 1440px) {
    width: 14rem;
    height: 5rem;
    font-size: ${theme.fontSize.m};
  }
`;

export default Button;
