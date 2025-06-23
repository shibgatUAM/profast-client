import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';

const MainLayout = () => {
  return (
    <div className="p-4">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
