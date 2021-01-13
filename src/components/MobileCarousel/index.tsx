// @ts-nocheck
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Navigation } from 'swiper';
import { useMediaQuery } from 'react-responsive';
import ReactPlayer from 'react-player';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
SwiperCore.use([Navigation, EffectCoverflow]);

const MobileCarousel = ({ cards }) => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 1024px)',
  });

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={cards.length}
    >
      <Slider>
        {cards.map(({ mediaAsset, heading, textSummary, assetLink }, index) => (
          <Slide index={index}>
            <h3
              style={{ fontSize: 32, textAlign: 'center', paddingBottom: 60 }}
            >
              {heading}
            </h3>
            {mediaAsset?.url ? (
              <img style={{ width: '100%' }} src={mediaAsset?.url} />
            ) : (
              <div className="player-wrapper">
                <ReactPlayer
                  url={assetLink}
                  width="100%"
                  className="react-player"
                />
              </div>
            )}
            <p style={{ fontSize: 27, textAlign: 'center', paddingTop: 60 }}>
              {textSummary}
            </p>
          </Slide>
        ))}
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default MobileCarousel;
