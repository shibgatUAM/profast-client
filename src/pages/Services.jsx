import React from 'react';
import {
  FaBuilding,
  FaGlobeAmericas,
  FaHandHoldingUsd,
  FaShippingFast,
  FaUndoAlt,
  FaWarehouse,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaShippingFast className="text-4xl text-[#03373D]" />,
    title: 'Express & Standard Delivery',
    desc: 'Reliable, quick, and convenient delivery at your service.',
  },
  {
    icon: <FaGlobeAmericas className="text-4xl text-[#03373D]" />,
    title: 'Nationwide Delivery',
    desc: 'Covering every corner of the country, efficiently.',
  },
  {
    icon: <FaWarehouse className="text-4xl text-[#03373D]" />,
    title: 'Fulfillment Solution',
    desc: 'Warehousing and inventory managed for your business.',
  },
  {
    icon: <FaHandHoldingUsd className="text-4xl text-[#03373D]" />,
    title: 'Cash on Home Delivery',
    desc: 'Flexible payment method at your doorstep.',
  },
  {
    icon: <FaBuilding className="text-4xl text-[#03373D]" />,
    title: 'Corporate Logistics',
    desc: 'Tailored logistics contracts for businesses.',
  },
  {
    icon: <FaUndoAlt className="text-4xl text-[#03373D]" />,
    title: 'Parcel Return',
    desc: 'Easy return process to keep your customers happy.',
  },
];

const Services = () => {
  return (
    <div className="bg-[#03373D] text-white p-24 rounded-4xl">
      <h1 className="text-center text-4xl font-extrabold mb-4">Our Services</h1>
      <p className="text-center text-base font-medium mb-6">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to <br></br> business shipments — we
        deliver on time, every time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-[#03373D] hover:bg-[#CAEB66] hover:text-[#03373D] transition-all duration-300 p-6 rounded-2xl shadow-md hover:shadow-xl cursor-pointer transform hover:-translate-y-1 w-[380px] h-[346px] flex flex-col items-center justify-center text-center"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              {service.icon}
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="text-sm opacity-80">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
