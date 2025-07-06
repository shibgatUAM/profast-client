import React, { useState } from 'react';
import Frame from '../assets/images/Frame 4.png';
import { Link } from 'react-router';

const faqItems = [
  {
    question: 'How do I book a courier online?',
    answer:
      'You can book a courier by visiting our website or mobile app, entering the pickup and delivery addresses, package details (weight, size, type), and selecting your preferred delivery option. After confirming the details, proceed to payment to complete the booking.',
  },
  {
    question: 'What types of items can I send through your courier service?',
    answer:
      'You can send documents, parcels, electronics, clothing, and non-perishable goods. Hazardous, illegal, or restricted items (like flammable liquids, weapons, or perishables) are not allowed as per our shipping policy.',
  },
  {
    question: 'How can I track my parcel?',
    answer:
      'After booking, you’ll receive a tracking ID via SMS or email. You can use this ID on our website or app to track your parcel’s status in real time.',
  },
  {
    question: 'Do you offer same-day or express delivery?',
    answer:
      'Yes, we offer same-day and express delivery services in select cities. Availability depends on the pickup and drop-off locations and the time of booking.',
  },
  {
    question: 'What happens if my package is lost or damaged during delivery?',
    answer:
      'In the rare case of loss or damage, we offer compensation based on our terms and conditions. Please contact our customer support with your tracking ID to start a claim process.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mb-20">
      <h1 className="text-4xl font-extrabold text-center text-[#03373D] mb-6">
        Frequently Asked Question (FAQ)
      </h1>
      <p className="text-center text-[#606060] mb-8">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce <br /> pain, and strengthen your body
        with ease!
      </p>
      <div className="w-4xl mx-auto space-y-3 mb-8">
        {faqItems.map((item, index) => (
          <div
            key={index}
            tabIndex={0}
            className={`collapse collapse-arrow border border-base-300 transition-all duration-300 ${
              activeIndex === index ? 'bg-[#C3DFE2]' : 'bg-base-100'
            }`}
            onClick={() => handleToggle(index)}
          >
            <div className="collapse-title font-bold text-base text-[#03373D]">
              {item.question}
            </div>
            <div className="collapse-content text-sm">
              <div className="border-y border-[#606060] opacity-10 mb-4"></div>
              <span className="text-[#606060]">{item.answer}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link className="btn bg-[#CAEB66] text-base text-[#1F1F1F] font-bold rounded-xl">
          See More FAQ's
        </Link>
        <img src={Frame} className="h-10" alt="" />
      </div>
    </div>
  );
};

export default FAQ;
