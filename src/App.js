import React, { Component } from "react";
import "./App.scss";
import slime from "./assets/enemies/slime.png";
import sword from "./assets/items/weapons/item_greatsword.png";
import shortsword from "./assets/items/weapons/item_shortsword.png";
import Button from "./components/Button";
import Progress from "./components/Progress";
import Image from "./components/Image";
import Text from "./components/Text";
import Monster from "./components/Monster";
import Item from "./components/Item";
import {
  weaponAdjectives,
  weaponRankColor,
  materials
} from "./constants/Helpers";

const uuidv4 = require("uuid/v4");
class App extends Component {
  state = {
    player: {
      experience: 0,
      level: 0,
      stats: {
        strength: 0,
        speed: 0,
        health: 0
      },
      inventory: [],
      equipped: {
        helmet: null,
        body: null,
        ring: null,
        amulet: null,
        weapon: null,
        shield: null
      }
    }
  };
  componentDidMount() {
    console.log(this.exp(2));
    console.log(this.level(2829));
  }

  // get required xp to hit level
  exp = level => {
    return Math.floor(1000 * Math.pow(level, 1.5));
  };

  // get level depending on curr exp
  level = exp => {
    return Math.floor(Math.pow(exp / 1000, 1 / 1.5));
  };

  // returns random number from 0 to outOf
  roll = outOf => {
    return Math.floor(Math.random() * outOf);
  };

  // returns rank based on current level
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

  // returns color of weapon based on rank
  getWeaponRankColor = rank => {
    const color = weaponRankColor[rank];
    return color;
  };

  // returns modifier based on rank
  getModifier = rank => {
    const chance = rank === 6 ? 100 : this.roll(100);
    const mod =
      chance <= 40 + 5 * rank
        ? weaponAdjectives[rank][this.roll(weaponAdjectives[rank].length)]
        : false;
    return mod;
  };

  // returns material type based on rank
  getMaterial = rank => {
    return materials[rank][this.roll(materials[rank].length)];
  };

  // returns a new weapon based on level
  makeWeapon = level => {
    const rank = this.getRank(level);
    const modifier = this.getModifier(rank) || "";
    const material = this.getMaterial(rank);
    const name = `${modifier} ${material} sword`;
    const damage = this.roll(10) + 1;
    const color = this.getWeaponRankColor(rank);
    const weight = this.roll(3) + 1;
    const price = 10;
    const newItem = {
      name: name,
      color: color,
      level: level,
      damage: damage,
      rank: rank,
      weight: weight,
      price: price,
      bonus: {},
      type: 0
    };
    return newItem;
  };

  // adds an item object to inventory
  addItemToInventory = item => {
    console.log(item);
    const newInv = [...this.state.player.inventory, item];
    this.setState({
      player: { inventory: newInv }
    });
  };

  render() {
    return (
      <div className="app">
        <Image size={5} src={slime} alt={"slime"}>
          Slime
        </Image>
        <Progress color={"red"} value={3} total={10} />
        <Button onClick={() => console.log(this.state.player.inventory)}>
          Print Inv
        </Button>
        <Button
          color="seagreen"
          onClick={() =>
            this.addItemToInventory(this.makeWeapon(this.roll(50)))
          }
        >
          Add Item
        </Button>
        <Text>
          Hello this is a text box filled with a lot of text Hello this is a
          text box filled with a lot of text Hello this is a text box filled
          with a lot of text Hello this is a text box filled with a lot of text
        </Text>
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
        {this.state.player.inventory.map(x => (
          <Item
            key={uuidv4()}
            color={x.color}
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
