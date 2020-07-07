import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";

const Logo = styled.h1`
  font-size: ${theme.fontSize.m};
  width: 40%;

  @media (min-width: 768px) {
    font-size: ${theme.fontSize.l};
    padding-left: 2rem;
  }

  @media (min-width: 1440px) {
    font-size: ${theme.fontSize.xxl};
  }
`;

export default Logo;
