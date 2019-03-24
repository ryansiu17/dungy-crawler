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
import makeItem from "./constants/Helpers";
class App extends Component {
  state = {
    inventory: []
  };
  makeItem = () => {
    const damage = Math.floor(Math.random() * 10) + 1;
    const weight = Math.floor(Math.random() * 3) + 1;
    const newItem = {
      name: "sword",
      damage: damage,
      rank: "legendary",
      weight: weight
    };
    return newItem;
  };
  addItemToInventory = item => {
    console.log(item);
    const newInv = [...this.state.inventory, item];
    this.setState({
      inventory: newInv
    });
  };
  render() {
    return (
      <div className="app">
        <Image size={5} src={slime} alt={"slime"}>
          Slime
        </Image>
        <Progress color={"red"} value={3} total={10} />
        <Button onClick={() => console.log(this.state.inventory)}>Hello</Button>
        <Button
          color="seagreen"
          onClick={() => this.addItemToInventory(this.makeItem())}
        >
          Goodbye
        </Button>
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
        {this.state.inventory.map(x => (
          <Item
            color={"dodgerblue"}
            weapon={x}
            size={4}
            src={sword}
            alt={"sword"}
          />
        ))}
      </div>
    );
  }
}

export default App;
