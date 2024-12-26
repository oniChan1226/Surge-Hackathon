import React from 'react';
import { Header } from '../components/Header&Footer';
import { Sidebar } from '../components/Dashboard';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1 md:ml-[210px] xl:ml-[240px] pt-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
