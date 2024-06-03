"use client";

import ReactECharts from "echarts-for-react";

const BalanceChart = () => {
  const colorPalette = ["#142559", "#60F5D9"];

  // Data for the chart
  const data = [
    { value: 2000, name: "Expenses" },
    { value: 1300, name: "Income" },
  ];

  // Calculate the balance
  const balance = data[1].value - data[0].value;

  const option = {
    title: {
      text: `Balance: €${balance}`,
      left: "center",
      top: "0%",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} € ({d}%)",
    },
    legend: {
      top: "25px",
      left: "center",
    },
    series: [
      {
        name: "Balance",
        type: "pie",
        itemStyle: {
          color: (params: any) => colorPalette[params.dataIndex],
        },
        top: "35px",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "outside",
          formatter: "{b}: {c} €",
        },
        labelLine: {
          show: true,
        },
        data: data,
      },
    ],
  };

  return (
    <div>
      <h1>Balance</h1>
      <ReactECharts option={option} />
    </div>
  );
};

export default BalanceChart;
