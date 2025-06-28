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
    <div className="mb-8">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="h-[677px]"
      >
        <SwiperSlide>
          <div className="w-full h-full rounded-3xl overflow-hidden">
            <img
              src={Slide1}
              alt="profast slide"
              className="w-full h-full object-cover "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full rounded-3xl overflow-hidden">
            <img
              src={Slide2}
              alt="profast slide"
              className="w-full h-full object-cover "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full rounded-3xl overflow-hidden">
            <img
              src={Slide3}
              alt="profast slide"
              className="w-full h-full object-cover "
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideShow;
