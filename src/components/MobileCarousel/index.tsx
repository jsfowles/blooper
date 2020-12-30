// @ts-nocheck
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';
import { useMediaQuery } from 'react-responsive';
import ReactPlayer from 'react-player';
SwiperCore.use([EffectCoverflow]);

const MobileCarousel = ({ cards }) => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 768px)',
  });
  console.log(cards);
  return (
    <Swiper effect="coverflow" slidesPerView={isMobile ? 1 : 2}>
      {cards.map(({ mediaAsset, heading, textSummary, assetLink }, index) => (
        <>
          <SwiperSlide key={mediaAsset?.url} virtualIndex={index}>
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
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
};

export default MobileCarousel;
