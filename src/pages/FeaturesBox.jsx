import React from 'react';
import liveTracking from '../assets/images/live-tracking.png';
import delivery from '../assets/images/safe-delivery.png';

const features = [
  {
    image: liveTracking,
    title: 'Live Parcel Tracking',
    description: `Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.`,
  },
  {
    image: delivery,
    title: '100% Safe Delivery',
    description: `We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time`,
  },
  {
    image: delivery,
    title: '24/7 Call Center Support',
    description: `Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.`,
  },
];

const FeaturesBox = () => {
  return (
    <div className='mb-16'>
      <hr className="border border-dashed mb-16" />

      <div>
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex gap-6 justify-between items-center bg-white p-8 rounded-3xl mb-4"
          >
            <div className="p-8">
              <img src={feature.image} alt="image" />
            </div>
            <div className="w-px h-24 border-l-2 border-dashed border-gray-400 mx-6"></div>
            <div className="flex-1 p-12">
              <h2 className='text-2xl font-extrabold text-[#03373D] mb-4'>{feature.title}</h2>
              <p className='text-base font-medium text-[#606060]'>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesBox;
