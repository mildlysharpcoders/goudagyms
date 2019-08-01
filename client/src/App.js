import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginStuff from "./components/LoginStuff"

class App extends Component {
  state = {
    user: {}
  }

  handleUserUpdate = user => {
    this.setState({ user });
  }

  render() {
    return (
      <>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Mildly Sharp Coders at Work!</h2>
          </div>
        </div>
        <LoginStuff user={this.state.user} handleUserUpdate={this.handleUserUpdate} />
      </>
    );
  }
}

export default App;
