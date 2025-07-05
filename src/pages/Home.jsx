import React from 'react';
import SlideShow from './SlideShow';
import HWorks from './HWorks';
import Services from './Services';
import BrandsSlide from './BrandsSlide';
import FeaturesBox from './FeaturesBox';
import BeMerchant from './BeMerchant';

const Home = () => {
  return (
    <div>
      <SlideShow />
      <HWorks />
      <Services />
      <BrandsSlide />
      <FeaturesBox />
      <BeMerchant />
    </div>
  );
};

export default Home;
