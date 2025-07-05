import React from 'react';
import location from '../assets/images/location-merchant.png';

const BeMerchant = () => {
  return (
    <div className="bg-[#03373D] bg-[url('assets/images/be-a-merchant-bg.png')] bg-no-repeat rounded-3xl p-16 flex gap-6 items-center mb-10">
      <div>
        <h1 className="text-white text-4xl font-extrabold mb-6">
          Merchant and Customer Satisfaction <br />
          is Our First Priority
        </h1>
        <p className="text-base text-[#DADADA] mb-6">
          We offer the lowest delivery charge with the highest value along with{' '}
          <br />
          100% safety of your product. Profast courier delivers your parcels in
          every <br />
          corner of Bangladesh right on time.
        </p>
        <button className="px-8 py-4 rounded-full bg-[#CAEB66] text-xl font-bold text-[#1F1F1F] cursor-pointer">
          Become a Merchant
        </button>
        <button className="px-8 py-4 rounded-full border-2 border-[#CAEB66] bg-[#03373D] text-xl font-bold text-[#CAEB66] ms-4 cursor-pointer">
          Earn with Profast Courier
        </button>
      </div>
      <div>
        <img src={location} alt="Merchant Logo" />
      </div>
    </div>
  );
};

export default BeMerchant;
