import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: snow;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px 4px 4px 4px;
  margin: 0.1rem;
  width: 10rem;
  font-size: 0.8rem;
`;
const ImageBox = styled.img`
  height: 10rem;
`;

const ImageFooter = styled.div`
  height: 2rem;
  text-align: center;
`;

class Image extends Component {
  render() {
    return (
      <Wrapper>
        <ImageBox src={this.props.src} alt={this.props.alt} />
        <ImageFooter>{this.props.children}</ImageFooter>
      </Wrapper>
    );
  }
}
export default Image;

/*
Image.defaultProps = {
};*/
