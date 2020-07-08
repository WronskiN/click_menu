import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { theme } from "../theme/mainTheme";

const StyledWrapper = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
`;

const MainTemplate = ({ children }) => (
  <StyledWrapper>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </StyledWrapper>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
