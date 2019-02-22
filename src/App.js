import React, { Component } from "react";
import "./App.scss";

import Button from "./components/Button";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Button>Hello</Button>
        <Button>Goodbye</Button>
      </div>
    );
  }
}

export default App;
