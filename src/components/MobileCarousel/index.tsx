// @ts-nocheck
import SwiperCore, { EffectCoverflow, Navigation } from 'swiper';
import { useMediaQuery } from 'react-responsive';
import ReactPlayer from 'react-player';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  DotGroup,
  Image,
} from 'pure-react-carousel';
import React from 'react';

const MobileCarousel = ({ cards, noResize }) => {
  return (
    <div style={{ padding: '7vw 0' }}>
      <CarouselProvider
        naturalSlideWidth={1700}
        naturalSlideHeight={2200}
        isIntrinsicHeight={!noResize}
        totalSlides={cards.length}
      >
        <Slider>
          {cards.map(
            ({ mediaAsset, heading, textSummary, assetLink }, index) => (
              <Slide index={index}>
                <h3 className="filled-header">{heading}</h3>
                {mediaAsset?.url ? (
                  <Image
                    src={mediaAsset?.url}
                    style={{ height: 'calc(100% - 41px)' }}
                  />
                ) : (
                  <div className="player-wrapper">
                    <ReactPlayer
                      url={assetLink}
                      width="100%"
                      className="react-player"
                    />
                  </div>
                )}
                <p
                  style={{ fontSize: 27, textAlign: 'center', paddingTop: 60 }}
                >
                  {textSummary}
                </p>
              </Slide>
            ),
          )}
        </Slider>
        <DotGroup />
      </CarouselProvider>
    </div>
  );
};

export default MobileCarousel;
