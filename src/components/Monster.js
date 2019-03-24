import React, { Component } from "react";
import styled from "styled-components";

import Image from "./Image";
import Progress from "./Progress";

const Wrapper = styled.div`
  width: ${props => props.size}rem;
`;

const Level = styled.span`
  color: red;
`;
class Monster extends Component {
  render() {
    return (
      <Wrapper size={this.props.size}>
        <Image {...this.props}>
          Lvl.<Level>{this.props.level}</Level> {this.props.children}
        </Image>
        <Progress {...this.props} />
      </Wrapper>
    );
  }
}
export default Monster;
