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
          { value: 2000, name: "Expenses" },
          { value: 1300, name: "Income" },
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
