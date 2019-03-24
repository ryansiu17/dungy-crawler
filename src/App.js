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
import { weaponAdjectives } from "./constants/Helpers";

const uuidv4 = require("uuid/v4");
class App extends Component {
  state = {
    inventory: []
  };
  componentDidMount() {
    console.log(this.getRank(0));
    console.log(this.getRank(11));
    console.log(this.getRank(19));
    console.log(this.getRank(26));
    console.log(this.getRank(31));
    console.log(this.getRank(41));
  }
  getRank = level => {
    return level >= 0 && level <= 10
      ? 0
      : level >= 11 && level <= 18
      ? 1
      : level >= 19 && level <= 25
      ? 2
      : level >= 26 && level <= 30
      ? 3
      : level >= 31 && level <= 40
      ? 4
      : 5;
  };
  makeWeapon = level => {
    const rank = this.getRank(level);
    const name = `${
      weaponAdjectives[rank][
        Math.floor(Math.random() * weaponAdjectives.length)
      ]
    } sword`;
    const damage = Math.floor(Math.random() * 10) + 1;
    const weight = Math.floor(Math.random() * 3) + 1;
    const price = Math.floor(damage / weight) * 10;
    const newItem = {
      name: name,
      level: level,
      damage: damage,
      rank: rank,
      weight: weight,
      price: price,
      modifier: { strength: 1 },
      type: 0
    };
    console.log(newItem["name"]);
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
        <Button onClick={() => console.log(this.state.inventory)}>
          Print Inv
        </Button>
        <Button
          color="seagreen"
          onClick={() =>
            this.addItemToInventory(
              this.makeWeapon(Math.floor(Math.random() * 50))
            )
          }
        >
          Add Item
        </Button>

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
            key={uuidv4()}
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
