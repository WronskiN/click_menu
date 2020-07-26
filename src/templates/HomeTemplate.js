import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { theme } from "../theme/mainTheme";
import Header from "../components/organisms/Header/Header";
import HowItWorks from "../views/HowItWorks";

const StyledWrapper = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
`;

const HomeTemplate = () => (
  <StyledWrapper>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <HowItWorks />
      </>
    </ThemeProvider>
  </StyledWrapper>
);

export default HomeTemplate;
