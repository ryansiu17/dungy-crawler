import React, { Component } from "react";
import styled from "styled-components";

const ImageBox = styled.img`
  height: 4rem;
  width: 4rem;
`;

class Image extends Component {
  render() {
    return <ImageBox src={this.props.src} alt={this.props.alt} />;
  }
}
export default Image;

/*
Image.defaultProps = {
};*/
