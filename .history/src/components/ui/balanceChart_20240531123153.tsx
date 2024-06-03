"use client";

import ReactECharts from "echarts-for-react";

const BalanceChart = () => {
  const colorPalette = ["#142559", "#60F5D9"];

  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "25px",
      left: "center",
    },
    series: [
      {
        type: "pie",
        itemStyle: {
          color: (params: any) => colorPalette[params.dataIndex],
        },
        top: "35px",
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

export default BalanceChart;
