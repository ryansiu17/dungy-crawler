import React, { Component } from "react";
import menuItemSettings from "./assets/navbar/menuItemSettings.png";
import menuItemMap from "./assets/navbar/menuItemMap.png";
import menuItemPlayer from "./assets/navbar/menuItemPlayer.png";
import menuItemSkills from "./assets/navbar/menuItemSkills.png";
import { Button } from "reactbulma";
class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <img className="mapButton" src={menuItemMap} alt="map" />
        <img className="skillsButton" src={menuItemSkills} alt="playerInfo" />
        <img
          className="playerInfoButton"
          src={menuItemPlayer}
          alt="playerInfo"
        />
        <img className="settingsButton" src={menuItemSettings} alt="settings" />
      </div>
    );
  }
}

export default NavBar;
