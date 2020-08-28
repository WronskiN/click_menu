import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import RestaurantMenuList from "../components/organisms/RestaurantMenuList/RestaurantMenuList";
import Home from "./Home";
import RestaurantPage from "../components/pages/RestaurantPage";

const App = () => {
  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menuList" component={RestaurantMenuList} />
          <Route path="/menuList/:id" component={RestaurantPage} />
        </Switch>
      </MainTemplate>
    </Router>
  );
};

export default App;
