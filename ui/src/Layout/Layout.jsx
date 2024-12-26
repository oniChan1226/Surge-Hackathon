import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {Header, Footer} from "../components/Header&Footer"

const Layout = () => {
  const location = useLocation();

  const noHeaderRoutes = ['/signup', '/login'];

  return (
    <>
      {/* {!noHeaderRoutes.includes(location.pathname) && <Header />} */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
