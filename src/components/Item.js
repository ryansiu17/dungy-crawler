import React, { Component } from "react";
import styled from "styled-components";

import Image from "./Image";

const Wrapper = styled.div`
  width: ${props => props.size}rem;
`;

const Tooltip = styled.div`
  opacity: 0;
  border-radius: 4px;
  min-height: ${props => props.size}rem;
  max-width: ${props => props.size}rem;
  position: absolute;
  background-color: black;
  z-index: 3;
  transition: opacity 0.3s;
  ${Wrapper}:hover & {
    opacity: 1;
  }
`;

class Item extends Component {
  render() {
    return (
      <Wrapper size={this.props.size}>
        <Tooltip>weeee</Tooltip>
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
