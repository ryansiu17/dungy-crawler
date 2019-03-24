import React, { Component } from "react";
import "./App.scss";
import slime from "./assets/enemies/slime.png";
import sword from "./assets/items/weapons/item_greatsword.png";
import shortsword from "./assets/items/weapons/item_shortsword.png";
import Button from "./components/Button";
import Progress from "./components/Progress";
import Image from "./components/Image";
import Monster from "./components/Monster";
import Item from "./components/Item";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Image size={5} src={slime} alt={"slime"}>
          Slime
        </Image>
        <Progress color={"red"} value={3} total={10} />
        <Button>Hello</Button>
        <Button color="seagreen">Goodbye</Button>
        <Button>Good Morning</Button>
        <Button color="darkslategray">AHHHHHHHHHHHHHHHHH</Button>
        <Monster
          level={13}
          size={10}
          src={slime}
          alt={"slime"}
          total={100}
          value={76}
        >
          Slime
        </Monster>
        <Item color={"dodgerblue"} size={4} src={sword} alt={"sword"} />
        <Item color={"dodgerblue"} size={4} src={shortsword} alt={"sword"} />
      </div>
    );
  }
}

export default App;
