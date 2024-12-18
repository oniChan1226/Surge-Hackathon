import React from "react";
import { useRoleAuth } from "../../context/RoleAuth";
import DataTable from "../DataTable";

const Dashboard = () => {
  const { role } = useRoleAuth();
  return (
    <div className="bg-slate-200 min-h-[80vh]">
      <div className="text-xl md:text-4xl lg:text-6xl font-bold text-center pt-8 md:pt-32 tracking-wider">
        Welcome!
      </div>
      <DataTable />
    </div>
  );
};

export default Dashboard;
