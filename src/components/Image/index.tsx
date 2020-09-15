// @ts-nocheck
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withController } from 'react-scroll-parallax';

import styled from 'styled-components';

export const ImageWrapper = styled.figure`
  display: flex;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 50%;

  img {
    display: block;
    width: 220px;
    height: auto;
  }
`;

export const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Image extends Component {
  static propTypes = {
    parallaxController: PropTypes.object.isRequired,
    src: PropTypes.string.isRequired,
  };

  handleLoad = () => {
    // updates cached values after image dimensions have loaded
    this.props.parallaxController.update();
  };

  render() {
    console.log(this.props.src, 'there');
    return (
      <ImageWrapper>
        <Inner>
          <img src={this.props.src} onLoad={this.handleLoad} />
        </Inner>
      </ImageWrapper>
    );
  }
}

export default withController(Image);
