import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// vendor css files
import "./to_integrate_within_react_components/css/vendor/bootstrap.css";
import "./to_integrate_within_react_components/css/vendor/animate.css";
import "./to_integrate_within_react_components/css/vendor/font-awesome.css";
import "./to_integrate_within_react_components/js/vendor/animsition/css/animsition.css";
import "./to_integrate_within_react_components/js/vendor/magnific-popup/magnific-popup.css";
//project main css files
import "./to_integrate_within_react_components/css/main.css";

import Chat from "./components/chat";
import Cards from "./components/cards";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Chat />
        <Cards />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
