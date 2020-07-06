import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { theme } from "../theme/mainTheme";
import EmailIcon from "../components/atoms/Icons/EmailIcon";
import email from "../assets/email.svg";
import Button from "../components/atoms/Button/Button";
import InputSearch from "../components/atoms/InputSearch/InputSearch";
import InputForm from "../components/atoms/InputForm/InputForm";
import InputTextarea from "../components/atoms/InputTextarea/InputTextarea";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <>
            <h1 className="logo">clickmenu.uk</h1>
            <Button>Join today</Button>
            <EmailIcon src={email}></EmailIcon>
            <InputSearch
              type="text"
              placeholder="Type restaurant name"
            ></InputSearch>
            <InputForm placeholder="name" type="text" id="name" />
            <InputForm placeholder="email" type="email" id="email" />
            <InputTextarea placeholder="message" type="text" id="message" />
          </>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
