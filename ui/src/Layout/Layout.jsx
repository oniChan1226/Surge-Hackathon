import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header&Footer/Header';
import Footer from '../components/Header&Footer/Footer';

const Layout = () => {
  const location = useLocation();

  const noHeaderRoutes = ['/', '/login'];

  return (
    <>
      {!noHeaderRoutes.includes(location.pathname) && <Header />}
      <Outlet />
      {/* Uncomment Footer if required */}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
