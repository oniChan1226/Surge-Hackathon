import React from "react";
import {IndividualDashboard} from "../components/Dashboard"

const Dashboard = () => {
  const role = "user";
  return (
    <div className="bg-dashboardMain-unhighlighted_2 min-h-full ">
      <IndividualDashboard />
    </div>
  );
};

export default Dashboard;
