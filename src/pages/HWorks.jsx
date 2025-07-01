import React from 'react';
import { LiaShippingFastSolid } from 'react-icons/lia';

const HWorks = () => {
  return (
    <div className="w-300 mx-auto mb-14">
      <h1 className="text-2xl font-extrabold text-[#03373D] mb-6">
        How it works
      </h1>
      <div className="grid grid-cols-4 gap-8">
        <div className="w-2xs p-6 bg-[#ffffff] rounded-3xl">
          <LiaShippingFastSolid size={45} className="mb-4" />
          <h1 className="text-xl font-bold text-[#03373D] mb-4">
            Booking Pick & Drop
          </h1>
          <p className="text-base font-medium text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="w-2xs p-6 bg-[#ffffff] rounded-3xl">
          <LiaShippingFastSolid size={45} className="mb-4" />
          <h1 className="text-xl font-bold text-[#03373D] mb-4">
            Cash On Delivery
          </h1>
          <p className="text-base font-medium text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="w-2xs p-6 bg-[#ffffff] rounded-3xl">
          <LiaShippingFastSolid size={45} className="mb-4" />
          <h1 className="text-xl font-bold text-[#03373D] mb-4">
            Delivery Hub
          </h1>
          <p className="text-base font-medium text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="w-2xs p-6 bg-[#ffffff] rounded-3xl">
          <LiaShippingFastSolid size={45} className="mb-4" />
          <h1 className="text-xl font-bold text-[#03373D] mb-4">
            Booking SME & Corporate
          </h1>
          <p className="text-base font-medium text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HWorks;
