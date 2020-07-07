import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
// import EmailIcon from "../components/atoms/Icons/EmailIcon";
// import email from "../assets/email.svg";
// import Button from "../components/atoms/Button/Button";
// import InputSearch from "../components/atoms/InputSearch/InputSearch";
// import InputForm from "../components/atoms/InputForm/InputForm";
// import InputTextarea from "../components/atoms/InputTextarea/InputTextarea";
// import Card from "../components/molocules/Card/Card";
import Navigation from "../components/organisms/Navigation/Navigation";

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
      <MainTemplate>
        <Navigation></Navigation>
      </MainTemplate>
    );
  }
}

export default App;
