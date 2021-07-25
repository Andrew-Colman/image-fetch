import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
//import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
SwiperCore.use([Autoplay, Pagination, Navigation]);

const imgUrls = [
  'https://cdn.pixabay.com/photo/2020/04/21/06/41/bulldog-5071407__340.jpg',
  'https://cdn.pixabay.com/photo/2020/06/16/09/16/blooming-field-5304878__340.jpg',
  'https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906__340.jpg',
];

const items = [
  {
    src: imgUrls[0],
    altText: 'Slide 1',
    caption: 'bulldogs',
  },
  {
    src: imgUrls[1],
    altText: 'Slide 2',
    caption: 'blooming field',
  },
  {
    src: imgUrls[2],
    altText: 'Slide 3',
    caption: 'camping in nice sky',
  },
];

// install Swiper modules

export default function FeaturedCarousel() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={imgUrls[0]} alt="Slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgUrls[1]} alt="Slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgUrls[2]} alt="Slide" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
