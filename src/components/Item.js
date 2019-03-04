import React, { Component } from "react";
import styled from "styled-components";

import Image from "./Image";

const Wrapper = styled.div`
  width: ${props => props.size}rem;
`;
const ImageBox = styled.img`
  height: ${props => props.size}rem;
`;
class Item extends Component {
  render() {
    return (
      <Wrapper size={this.props.size}>
        <Image height={this.props.height} {...this.props}>
          {this.props.children}
        </Image>
      </Wrapper>
    );
  }
}
export default Item;

Item.defaultProps = {
  height: 1
};
