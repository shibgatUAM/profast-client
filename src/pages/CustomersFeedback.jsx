import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import FeedbackImage from '../assets/images/customer-top.png';

const testimonials = [
  {
    name: 'Rasel Ahamed',
    title: 'CTO',
    message:
      'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
  },
  {
    name: 'Awlad Hossin',
    title: 'Senior Product Designer',
    message:
      'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
  },
  {
    name: 'Nasir Uddin',
    title: 'CEO',
    message:
      'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
  },
  {
    name: 'Jannatul Ferdous',
    title: 'Marketing Head',
    message:
      'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
  },
];

const CustomersFeedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-16 mb-16">
      <img
        src={FeedbackImage}
        alt="Feedback Image"
        className="w-[246px] h-[102px] mx-auto mb-10"
      />
      <div className="text-center mb-14">
        <h1 className="text-4xl font-extrabold text-[#03373D] mb-6">
          What our customers are sayings
        </h1>
        <p className="text-[#606060]">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br />
          pain, and strengthen your body with ease!
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full max-w-6xl mx-auto"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div
              className={`rounded-xl p-6 shadow-md text-gray-700 h-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-white opacity-100 scale-100'
                  : 'bg-white opacity-40 scale-95'
              }`}
            >
              <FaQuoteLeft className="text-3xl text-primary mb-4" />
              <p className="mb-4">{t.message}</p>
              <div className="border-dashed border-t pt-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#00373D] rounded-full"></div>
                <div>
                  <h4
                    className={`font-semibold ${
                      index === activeIndex ? 'text-[#00373D]' : 'text-gray-500'
                    }`}
                  >
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomersFeedback;
