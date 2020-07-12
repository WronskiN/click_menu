import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";

import MenuList from "./MenuList";
import HowItWorks from "./HowItWorks";

class App extends Component {
  render() {
    return (
      <Router>
        <MainTemplate>
          <>
            <Switch>
              <Route path="/howItWorks">
                <HowItWorks />
              </Route>
              <Route path="/menuList">
                <MenuList />
              </Route>
            </Switch>
          </>
        </MainTemplate>
      </Router>
    );
  }
}

export default App;
