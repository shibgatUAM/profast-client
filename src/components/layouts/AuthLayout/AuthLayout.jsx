import React from 'react';
import Logo from '../../../assets/images/logo.png';
import { Link, Outlet } from 'react-router';
import AuthImage from '../../../assets/images/authImage.png';

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-white p-12 flex flex-col">
        <Link className="flex items-center">
          <img src={Logo} alt="Profast Logo" />
          <h1 className="text-3xl font-extrabold mt-7 -ml-4">Profast</h1>
        </Link>

        <div className="flex-1 flex items-center justify-center">
          <Outlet></Outlet>
        </div>
      </div>

      <div className="w-1/2 bg-[#FAFDF0] flex items-center justify-center">
        <img
          src={AuthImage}
          alt="Delivery Illustration"
          className="max-w-[80%] h-auto"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
