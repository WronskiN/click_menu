import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { theme } from "../theme/mainTheme";
// import EmailIcon from "../components/atoms/Icons/EmailIcon";
// import email from "../assets/email.svg";
// import Button from "../components/atoms/Button/Button";
// import InputSearch from "../components/atoms/InputSearch/InputSearch";
// import InputForm from "../components/atoms/InputForm/InputForm";
// import InputTextarea from "../components/atoms/InputTextarea/InputTextarea";
// import Card from "../components/molocules/Card/Card";
class App extends Component {
  state = {
    card: [
      {
        title: "one",
        article:
          "Contact us and we will create your restaurant menu on our site!",
      },
      {
        title: "two",
        article:
          "Get your unique online clickmenu link and QR code ready printed and place them on your tables and entrance.",
      },
      {
        title: "three",
        article:
          "No more need to touch menu cards. Let your customer to scan QR code for easy access on mobile",
      },
    ],
  };

  render() {
    // const card = this.state.card;
    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <>
            <h1 className="logo">clickmenu.uk</h1>
            {/* {card.map((card) => (
              <Card heading={card.title} article={card.article} />
            ))} */}
          </>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
