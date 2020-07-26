import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import Header from "../components/organisms/Header/Header";
import HowItWorks from "./HowItWorks";
// import MenuList from "./MenuList";

class App extends Component {
  render() {
    return (
      <Router>
        <MainTemplate>
          <>
            <Header />
            <HowItWorks />
          </>
          {/* <Route path="/menuList" component={MenuList} /> */}
        </MainTemplate>
      </Router>
    );
  }
}

export default App;
