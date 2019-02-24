import React, { Component } from "react";
import styled from "styled-components";

const ProgressPart = styled.div`
  background-color: ${props => props.defColor || props.theme.primaryBackground};
  border-radius: 4px 4px 4px 4px;
  width: ${props => (props.value * 100) / props.total}%;
  height: 0.6rem;
`;
ProgressPart.defaultProps = {
  theme: {
    PrimaryBackground: "palevioletred"
  }
};

const ProgressBackground = styled.div`
  background-color: ${props =>
    props.defColor || props.theme.secondaryBackground};
  border-radius: 5px 4px 4px 5px;
  width: auto;
  margin: 0.1rem;
`;

ProgressBackground.defaultProps = {
  theme: {
    secondaryBackground: "darkslategrey"
  }
};

class Progress extends Component {
  render() {
    return (
      <ProgressBackground defColor={this.props.colorBackground}>
        <ProgressPart
          value={this.props.value}
          total={this.props.total}
          defColor={this.props.color}
        />
      </ProgressBackground>
    );
  }
}
export default Progress;

Progress.defaultProps = {
  color: "mediumvioletred",
  colorBackground: "black",
  value: 0,
  total: 100
};
