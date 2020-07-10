import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import Navigation from "../components/organisms/Navigation/Navigation";
import Header from "../components/organisms/Header/Header";
import MenuList from "./MenuList";
import HowItWorks from "./HowItWorks";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <MainTemplate>
        <>
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
          <Contact />
        </>
      </MainTemplate>
    );
  }
}

export default App;
