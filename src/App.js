import React, { Component } from "react";
import "./App.scss";
import NavBar from "./NavBar";
import ScreenTest from "./screens/ScreenTest";
class App extends Component {
  state = {
    name: ""
  };
  render() {
    return (
      <div className="app">
        <div className="gameScreen">
          <ScreenTest />
          <NavBar />
        </div>
      </div>
    );
  }
}

export default App;
