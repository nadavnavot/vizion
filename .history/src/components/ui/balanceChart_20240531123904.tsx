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
            { value: 2000, name: "Income" },
          { value: 1300, name: "Expenses" },
        
        ],
        const balance = data[1].value - data[0].value;

      },
    ],
  };

  return (
    <div>
      <h1>Balance</h1>
      <ReactECharts option={option} />
      h1 {balance}€ Left
    </div>
  );
};

export default BalanceChart;
