"use client";

import ReactECharts from "echarts-for-react";

const PieChart = () => {
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        type: "pie",
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
          { value: 220, categort: "Entertainment" },
          { value: 120, category: "Shopping" },
          { value: 80, category: "Groceries" },
          { value: 200, category: "Transportation" },
          { value: 100, category: "Bills" },
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
