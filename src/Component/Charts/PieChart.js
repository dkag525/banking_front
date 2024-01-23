import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the datalabels plugin

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const data = {
  labels: ["Entertainment", "Bill Expense", "Others", "Investment"],

  datasets: [
    {
      data: [30, 15, 35, 20],
      backgroundColor: ["#FA00FF", "#1814F3", "#FC7900", "#343C6A"],
      borderColor: ["#f5f7fa", "#f5f7fa", "#f5f7fa", "#f5f7fa"],
      borderWidth: 10,
      hoverOffset: 10, // Additional spacing on hover
    },
  ],
};

export const options = {
  plugins: {
    legend: {
      display: true,
      position: "",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          const label = context.label || "";
          const value = context.parsed || 0;
          return `${label}: ${value}%`;
        },
      },
    },
    datalabels: {
      color: "#fff", // Font color for the values
      anchor: "center", // Position of the values inside the pie chart
      align: "end", // Alignment of the values inside the pie chart
      font: {
        size: 14,
        // weight: "bolder",
        // family: "mono",
      }, // Font size for the values
      offset: -25, // Offset from the data point
      rotation: 10, // Rotation angle in degrees
      clamp: true, // Ensure labels do not overflow
      formatter: (value, context) => {
        return [context.chart.data.labels[context.dataIndex], value + "%"];
      },
      // backgroundColor: "red", // Background color for the data labels
      // borderRadius: 5, // Border radius for the data labels
      // borderWidth: 1, // Border width for the data labels
      // borderColor: "green", // Border color for the data labels
      // clip: true, // Clips the data labels to the chart area
      // zIndex: 1, // Z-index of the data labels
    },
  },
  // elements: {
  //   arc: {
  //     borderWidth: 1,
  //     borderColor: "green",
  //     innerRadius: 0, // Inner radius for a doughnut chart
  //   },
  // },
  // hover: {
  //   mode: "single", // Hover mode for the chart
  // },
  animation: {
    animateRotate: true, // Animate rotation during initial rendering
    animateScale: true, // Animate scaling during initial rendering
  },

  rotation: 5 * Math.PI, // Rotate pie chart by 90 degrees
  circumference: 115 * Math.PI, // Full circumference
  cutout: 0, // Create a doughnut chart with a center hole
};

export function PieChart() {
  return <Pie data={data} options={options} />;
}
