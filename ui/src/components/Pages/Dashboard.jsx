import React from "react";
import ReportsDataTable from "../ReportsDataTable";
import {useRoleAuth} from '../../context/RoleAuth'
import AllReports from "../AllReports";

const Dashboard = () => {
  const {role} = useRoleAuth()
  return (
    <div className="bg-slate-200 min-h-[80vh]">
      <div className="text-xl md:text-3xl lg:text-5xl xl:text-7xl font-bold text-center pt-8 lg:pt-16 xl:pt-32 tracking-wider">
        Welcome!
      </div>
      {
        role !== "User" ? <AllReports /> : <ReportsDataTable />
      }
      
    </div>
  );
};

export default Dashboard;
