import React, { Component } from "react";
import styled from "styled-components";
import { darken } from "polished";
import nextArrow from "../assets/ui/nextArrow.png";
const Wrapper = styled.div`
  background-color: ${props => props.color || props.theme.primaryBackground};
  position: relative;
  color: ${props => props.theme.primaryText};
  padding: 10px;
  border-radius: 4px;
  margin: 0.1rem;
  height: auto;
  text-align: center;
  max-width: 20%;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;
Wrapper.defaultProps = {
  theme: {
    primaryBackground: "slategrey",
    primaryText: "white"
  }
};

const Arrow = styled.img`
  position: absolute;
  width: 8%;
  height: auto;
  bottom: 0px;
  right: 10px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  &:focus {
    outline: 0;
  }
  &:active {
    background-color: ${props =>
      darken(0.04, props.color) || darken(0.04, props.theme.primaryBackground)};
    outline: 0;
  }
`;
Arrow.defaultProps = {
  color: "slategrey",
  theme: {
    primaryBackground: "slategrey"
  }
};

const TextBox = styled.div`
  margin-bottom: 3%;
`;
class Text extends Component {
  render() {
    return (
      <Wrapper color={this.props.color}>
        <TextBox>{this.props.children}</TextBox>
        <Arrow src={nextArrow} />
      </Wrapper>
    );
  }
}

export default Text;

Text.defaultProps = {
  color: "slategrey"
};
