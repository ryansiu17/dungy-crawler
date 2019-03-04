import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${props => props.color || "snow"};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px 4px 4px 4px;
  margin: 0.1rem;
  width: ${props => props.size}rem;
  font-size: 0.8rem;
`;
const ImageBox = styled.img`
  height: ${props => props.size}rem;
`;

const ImageFooter = styled.div`
  background-color: snow;
  height: ${props => props.height || 2}rem;
  text-align: center;
  margin-bottom: 0.1rem;
`;

class Image extends Component {
  render() {
    return (
      <Wrapper color={this.props.color} size={this.props.size}>
        <ImageBox
          size={this.props.size}
          src={this.props.src}
          alt={this.props.alt}
        />
        <ImageFooter height={this.props.height}>
          {this.props.children}
        </ImageFooter>
      </Wrapper>
    );
  }
}
export default Image;

Image.defaultProps = {
  size: 5
};
