// @ts-nocheck

import ReactPlayer from 'react-player';
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  Image,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import React from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import styled from 'styled-components';

export const Whoops = styled.div`
  padding: 7vw 0;
`;
const MobileCarousel = ({ cards, noResize }) => {
  const loop = cards.map(({ mediaAsset }) => mediaAsset);
  return (
    <Whoops>
      <CarouselProvider
        // naturalSlideWidth={loop.width}
        // naturalSlideHeight={loop.height}
        isIntrinsicHeight
        totalSlides={cards.length}
      >
        <Slider>
          {cards.map(
            ({ mediaAsset, heading, textSummary, assetLink }, index) => (
              <Slide index={index}>
                <h3 className="filled-header">{heading}</h3>
                {mediaAsset?.url ? (
                  <a href={assetLink} target="_blank">
                    <Image
                      src={mediaAsset?.url}
                      // style={{ height: 'calc(100% - 41px)' }}
                    />
                  </a>
                ) : (
                  <div className="player-wrapper">
                    <ReactPlayer
                      url={assetLink}
                      width="100%"
                      className="react-player"
                    />
                  </div>
                )}
                <p style={{ fontSize: 18, textAlign: 'center' }}>
                  {textSummary}
                </p>
              </Slide>
            ),
          )}
        </Slider>
        <ButtonBack>
          <BiLeftArrow size="8vw" />
        </ButtonBack>
        <ButtonNext>
          <BiRightArrow size="8vw" />
        </ButtonNext>
      </CarouselProvider>
    </Whoops>
  );
};

export default MobileCarousel;
