// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade } from 'swiper';
SwiperCore.use([EffectFade]);

export default ({ cards }) => {
  return (
    <Swiper
      effect="fade"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      {cards.map(({ mediaAsset }, index) => (
        <SwiperSlide key={mediaAsset.url} virtualIndex={index}>
          <img style={{ width: '100%' }} src={mediaAsset.url} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
