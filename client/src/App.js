import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import UserShow from "./components/UserShow";
import MediaPage from "./components/MediaPage";
import MediaShow from "./components/MediaShow";
import NewMediaForm from "./components/NewMediaForm";
import GamePage from "./components/GamePage";
import GameShow from "./components/GameShow";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/users/:userId' component={UserShow} />
            <Route exact path='/users/:userId/newMedia' component={NewMediaForm} />
            <Route exact path='/media' component={MediaPage} />
            <Route exact path='/media/:mediaId' component={MediaShow} />
            <Route exact path='/games' component={GamePage} />
            <Route exact path='/games/:gameId' component={GameShow} />
            <Route path='/' component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
