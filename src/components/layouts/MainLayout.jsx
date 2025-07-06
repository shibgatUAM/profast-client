import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';
import { BarLoader } from 'react-spinners';
import Aos from 'aos';
import 'aos/dist/aos.css';

const MainLayout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // AOS init once
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [location]);

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
