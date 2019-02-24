import React, { Component } from "react";
import styled from "styled-components";
import { lighten, darken } from "polished";
const Border = styled.button`
  background-color: ${props => props.defColor || props.theme.primaryBackground};
  border: solid 1px ${props => props.defColor || props.theme.primaryBackground};
  border-radius: 4px;
  margin: 0.1rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    background-color: ${props =>
      lighten(0.04, props.defColor) ||
      lighten(0.04, props.theme.primaryBackground)};
    border: solid 1px
      ${props =>
        lighten(0.04, props.defColor) ||
        lighten(0.04, props.theme.primaryBackground)};
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
  &:active {
    background-color: ${props =>
      darken(0.04, props.defColor) ||
      darken(0.04, props.theme.primaryBackground)};
    border: solid 1px
      ${props =>
        darken(0.04, props.defColor) ||
        darken(0.04, props.theme.primaryBackground)};
    outline: 0;
  }
`;
Border.defaultProps = {
  theme: {
    primaryBackground: "palevioletred",
    primaryText: "white"
  }
};
const ButtonText = styled.p`
  color: ${props => props.theme.primaryText};
  margin: 0.5rem;
  font-size: 0.9rem;
`;
ButtonText.defaultProps = {
  theme: {
    primaryBackground: "palevioletred",
    primaryText: "white"
  }
};

class Button extends Component {
  render() {
    return (
      <Border defColor={this.props.color}>
        <ButtonText onClick={this.props.onClick} defColor={this.props.color}>
          {this.props.children}
        </ButtonText>
      </Border>
    );
  }
}
export default Button;

Button.defaultProps = {
  color: "palevioletred"
};
