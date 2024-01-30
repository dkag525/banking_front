import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      //   text: "Chart.js Bar Chart - Stacked",
    },
    legend: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    x: {
      //   stacked: true,
    },
    y: {
      //   stacked: true,
    },
  },
  maintainAspectRatio: false, // Add this line to allow setting width and height directly
  // width: 100, // Set the width of the chart
  // height: 500, // Set the height of the chart
};

const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export const data = {
  labels,
  datasets: [
    {
      // label: "Dataset 1",   // to Remove this i Setted display : false
      data: [480, 350, 340, 480, 115, 390, 400],
      backgroundColor: "rgb(45,96,255)",
      borderRadius: {
        topLeft: 50,
        topRight: 50,
        bottomLeft: 50,
        bottomRight: 50,
      },
    },
    {
      // label: "Dataset 2",   // to Remove this i Setted display : false
      data: [220, 115, 290, 380, 215, 210, 310],
      backgroundColor: "rgb(65,212,168)",
      borderRadius: {
        topLeft: 50,
        topRight: 50,
        bottomLeft: 50,
        bottomRight: 50,
      },
    },
  ],
};

export function BarChart() {
  return (
    <Bar
      style={{ height: "250px", width: "100%" }}
      options={options}
      data={data}
    />
  );
}
