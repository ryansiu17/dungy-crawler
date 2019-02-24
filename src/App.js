import React, { Component } from "react";
import "./App.scss";
import slime from "./assets/enemies/slime.png";

import Button from "./components/Button";
import Progress from "./components/Progress";
import Image from "./components/Image";
import Monster from "./components/Monster";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Image src={slime} alt={"slime"}>
          Slime
        </Image>
        <Progress color={"red"} value={3} total={10} />
        <Button>Hello</Button>
        <Button color="seagreen">Goodbye</Button>
        <Button>Good Morning</Button>
        <Button color="darkslategray">AHHHHHHHHHHHHHHHHH</Button>
        <Monster src={slime} alt={"slime"} total={100} value={76}>
          Slime
        </Monster>
      </div>
    );
  }
}

export default App;
