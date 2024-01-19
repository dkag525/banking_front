import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the datalabels plugin

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const data = {
  labels: ["Entertainment", "Bill Expense", "Others", "Investment"],

  datasets: [
    {
      data: [15, 35, 20, 30],
      backgroundColor: ["#FA00FF", "#1814F3", "#FC7900", "#343C6A"],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
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
      align: "right", // Alignment of the values inside the pie chart
      fontWeight: "bolder", // Font weight for the values
      formatter: (value, context) => {
        return [context.chart.data.labels[context.dataIndex], value];
      },
    },
  },
};

export function PieChart() {
  return <Pie data={data} options={options} />;
}
