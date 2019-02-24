import React, { Component } from "react";
import styled from "styled-components";

import Image from "./Image";
import Progress from "./Progress";

const Wrapper = styled.div`
  width: 10rem;
`;
class Monster extends Component {
  render() {
    return (
      <Wrapper>
        <Image {...this.props}>{this.props.children}</Image>
        <Progress {...this.props} />
      </Wrapper>
    );
  }
}
export default Monster;
