import React, { Component } from "react";
import "./App.scss";

import Button from "./components/Button";
import Progress from "./components/Progress";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Progress color={"red"} value={3} total={10} />
        <Button>Hello</Button>
        <Button color="seagreen">Goodbye</Button>
        <Button>Good Morning</Button>
        <Button color="darkslategray">AHHHHHHHHHHHHHHHHH</Button>
      </div>
    );
  }
}

export default App;
