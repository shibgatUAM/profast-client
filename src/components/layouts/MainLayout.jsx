import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';
import { BarLoader } from 'react-spinners';

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex gap-4 items-center justify-center bg-white">
        <BarLoader color="#CAEB66" height={10} width={200}></BarLoader>
      </div>
    );
  }

  return (
    <div className="max-w-350 mx-auto p-4">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
