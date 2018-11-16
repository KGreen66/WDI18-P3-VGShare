import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import UserShow from "./components/UserShow";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Navbar />
          </div>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/users/:userId' component={UserShow} />
            <Route path='/' component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;