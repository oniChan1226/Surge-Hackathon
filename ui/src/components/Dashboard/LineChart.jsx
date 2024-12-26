import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {demoDataLineChart} from "../../RoleConfigs"

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
    const options = {};


  return <div className="w-full max-w-7xl p-5 flex justify-center items-center">
    <Line options={options} data={demoDataLineChart}/>
  </div>;
};

export default LineChart;
