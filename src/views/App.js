import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
// import EmailIcon from "../components/atoms/Icons/EmailIcon";
// import email from "../assets/email.svg";
// import Button from "../components/atoms/Button/Button";
// import InputSearch from "../components/atoms/InputSearch/InputSearch";
// import InputForm from "../components/atoms/InputForm/InputForm";
// import InputTextarea from "../components/atoms/InputTextarea/InputTextarea";
import Navigation from "../components/organisms/Navigation/Navigation";
import Header from "../components/organisms/Header/Header";
import MenuList from "./MenuList";
import HowItWorks from "./HowItWorks";

class App extends Component {
  render() {
    return (
      <MainTemplate>
        <Router>
          <Navigation />
          <Header />
          <Switch>
            <Route path="/howItWorks">
              <HowItWorks />
            </Route>
            <Route path="/menuList">
              <MenuList />
            </Route>
          </Switch>
        </Router>
      </MainTemplate>
    );
  }
}

export default App;
