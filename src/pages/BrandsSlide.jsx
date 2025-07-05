import React from 'react';
import amazon from '../assets/brands/amazon.png';
import amazonVector from '../assets/brands/amazon_vector.png';
import casio from '../assets/brands/casio.png';
import moonstar from '../assets/brands/moonstar.png';
import randstad from '../assets/brands/randstad.png';
import startPeople from '../assets/brands/start-people 1.png';
import start from '../assets/brands/start.png';
import Marquee from 'react-fast-marquee';

const logos = [
  amazon,
  amazonVector,
  casio,
  moonstar,
  randstad,
  startPeople,
  start,
];

const BrandsSlide = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 rounded-2xl shadow-md max-w-7xl mx-auto text-center mb-20">
      <h1 className="text-2xl font-extrabold text-[#03373D] mb-6 tracking-tight">
        We've helped thousands of sales teams.
      </h1>
      <Marquee pauseOnHover speed={60} gradient={false}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="mx-12 flex items-center transition-transform duration-300 hover:scale-105"
          >
            <img src={logo} alt={`Brand logo ${index + 1}`} className="h-6 object-contain" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandsSlide;
