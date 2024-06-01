"use client";

import ReactECharts from "echarts-for-react";

const PieChart = () => {
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "0px",
      left: "center",
    },
    series: [
      {
        type: "pie",
        top: "0px",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },

        labelLine: {
          show: false,
        },
        data: [
          { value: 220, name: "Entertainment" },
          { value: 120, name: "Shopping" },
          { value: 80, name: "Groceries" },
          { value: 200, name: "Transportation" },
          { value: 100, name: "Bills" },
        ],
      },
    ],
  };

  return (
    <div>
      <h1>Expenses</h1>
      <ReactECharts option={option} />
    </div>
  );
};

export default PieChart;
