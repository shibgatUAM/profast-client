import React from 'react';
import { Link } from 'react-router';
import Logo from '../../assets/images/logo.png';
import linkedIn from '../../assets/images/linkedin-icon 2.png';
import x from '../../assets/images/twitter-logo-2 3.png';
import facebook from '../../assets/images/fb.png';
import youtube from '../../assets/images/youtube.png';

const Footer = () => {
  return (
    <div className="bg-[#0B0B0B] p-25 rounded-2xl">
      <div className="flex justify-center mb-4">
        <Link className="flex items-center">
          <img src={Logo} alt="Profast Logo" />
          <h1 className="text-3xl font-extrabold text-white mt-7 -ml-4">
            Profast
          </h1>
        </Link>
      </div>
      <p className="text-base text-[#DADADA] text-center mb-6">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to <br />
        business shipments — we deliver on time, every time.
      </p>
      <div className="border-1 border-y-[#03464D] border-dashed mb-6">
        <ul className="flex justify-center items-center space-x-8 text-[#DADADA] p-6">
          <a href="">
            <li>Services</li>
          </a>
          <a href="">
            <li>Coverage</li>
          </a>
          <a href="">
            <li>About Us</li>
          </a>
          <a href="">
            <li>Pricing</li>
          </a>
          <a href="">
            <li>Blog</li>
          </a>
          <a href="">
            <li>Contact</li>
          </a>
        </ul>
      </div>
      <div className='flex justify-center items-center space-x-8'>
        <img src={linkedIn} alt="LinkedIn" />
        <img src={x} alt="X Social Media" />
        <img src={facebook} alt="Facebook" />
        <img src={youtube} alt="Youtube" />
      </div>
    </div>
  );
};

export default Footer;
