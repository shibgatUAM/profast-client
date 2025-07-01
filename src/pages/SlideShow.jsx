import React from 'react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Slide1 from '../assets/images/slide1.png';
import Slide2 from '../assets/images/slide2.png';
import Slide3 from '../assets/images/slide3.png';

const SlideShow = () => {
  return (
    <div className="mb-8 rounded-3xl overflow-hidden shadow-xl">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[677px]"
      >
        {[Slide1, Slide2, Slide3].map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full">
              <img
                src={slide}
                alt="slide"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/*  custom pagination style override */}
      <style jsx="true">{`
        .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #0f766e;
        }
      `}</style>
    </div>
  );
};

export default SlideShow;
