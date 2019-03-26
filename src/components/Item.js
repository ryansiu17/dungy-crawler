import React, { Component } from "react";
import styled from "styled-components";

import Image from "./Image";

const Wrapper = styled.div`
  width: ${props => props.size}rem;
`;

const Tooltip = styled.div`
  opacity: 0;
  border-radius: 4px;
  height: 0;
  min-width: ${props => props.size * 1.5}rem;
  margin: 0.1rem;
  margin-left: ${props => props.size + 0.3}rem;
  padding-right: 0.3rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: absolute;
  background-color: black;
  z-index: 3;
  overflow: hidden;
  font-size: 0.8rem;
  color: white;
  transition: all 0.2s;
  ${Wrapper}:hover & {
    min-height: ${props => props.size * 1.5}rem;
    height: auto;
    opacity: 1;
  }
`;

const Stat = styled.p`
  margin-bottom: 0.13rem;
  margin-left: 0.2rem;
`;
class Item extends Component {
  render() {
    return (
      <Wrapper size={this.props.size}>
        <Tooltip size={this.props.size}>
          {this.props.weapon && (
            <div>
              <Stat>Lvl. {this.props.weapon.level}</Stat>
              <Stat>{this.props.weapon.name || "noname"}</Stat>
              <Stat>dmg - {this.props.weapon.damage || 0}</Stat>
              <Stat>wgt - {this.props.weapon.weight || 0}</Stat>
              <Stat>val - ${this.props.weapon.price}</Stat>
            </div>
          )}
        </Tooltip>
        <Image
          height={this.props.height}
          footer={this.props.footer}
          {...this.props}
        >
          {this.props.children}
        </Image>
      </Wrapper>
    );
  }
}
export default Item;

Item.defaultProps = {
  height: 1,
  footer: false
};
