import React, { Component } from "react";
import styled from "styled-components";

const Border = styled.button`
  background-color: white;
  border: solid red 2px;
  border-radius: 4px;
  &:focus {
    background-color: blue;
    outline: 0;
  }
`;
const ButtonText = styled.p`
  color: red;
  margin: 0.5rem;
  font-size: 1rem;
`;
class Button extends Component {
  render() {
    return (
      <Border>
        <ButtonText>{this.props.children}</ButtonText>
      </Border>
    );
  }
}

export default Button;
