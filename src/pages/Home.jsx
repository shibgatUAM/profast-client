import React from 'react';
import SlideShow from './SlideShow';
import HWorks from './HWorks';
import Services from './Services';
import BrandsSlide from './BrandsSlide';

const Home = () => {
  return (
    <div>
      <SlideShow />
      <HWorks />
      <Services />
      <BrandsSlide />
    </div>
  );
};

export default Home;
