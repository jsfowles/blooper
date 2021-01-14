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

const MobileCarousel = ({ cards }) => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 1024px)',
  });

  return (
    <div style={{ padding: '7vw 0' }}>
      <CarouselProvider
        naturalSlideWidth={710}
        naturalSlideHeight={919}
        isIntrinsicHeight
        totalSlides={cards.length}
      >
        <Slider>
          {cards.map(
            ({ mediaAsset, heading, textSummary, assetLink }, index) => (
              <Slide index={index}>
                <h3 style={{ fontSize: 32, textAlign: 'center' }}>{heading}</h3>
                {mediaAsset?.url ? (
                  <Image
                    style={{
                      height: 'calc(100% - 41px)',
                    }}
                    src={mediaAsset?.url}
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
