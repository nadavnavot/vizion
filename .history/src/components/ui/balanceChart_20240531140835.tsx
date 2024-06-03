"use client";

import React from "react";
import ReactECharts from "echarts-for-react";

const BalanceChart = () => {
  const colorPalette = ["#142559", "#60F5D9"];

  const data = [
    { value: 2000, name: "Income" },
    { value: 1300, name: "Expenses" },
  ];

  const balance = data[0].value - data[1].value;

  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "-10px",
      left: "center",
    },
    series: [
      {
        type: "pie",
        data: data,
        itemStyle: {
          color: (params: any) => colorPalette[params.dataIndex],
        },
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
      },
    ],
  };

  return (
    <div>
      <h1>Balance</h1>
      <ReactECharts option={option} />
      <h1>{balance}€ Left</h1>
    </div>
  );
};

export default BalanceChart;
