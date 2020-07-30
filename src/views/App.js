import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import RestaurantMenuList from "../components/organisms/RestaurantMenuList/RestaurantMenuList";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Router>
        <MainTemplate>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/menuList" component={RestaurantMenuList} />
          </Switch>
        </MainTemplate>
      </Router>
    );
  }
}

export default App;
