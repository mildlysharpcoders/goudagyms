import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import LoginStuff from "./components/LoginStuff"
import Welcome from "./components/Welcome";
import Settings from "./components/Settings";
import Nav from "./components/Nav";
import Login from "./components/Login"
import FullLogin from "./components/FullLogin";
import NoMatch from "./pages/NoMatch";




function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={FullLogin} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/settings" component={Settings} />
          <Route component={NoMatch} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
