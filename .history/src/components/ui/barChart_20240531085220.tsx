"use client";

import ReactECharts from "echarts-for-react";

const BarChart = () => {
  const colorPalette = ["#142559", "#737376"];

  const option = {
    xAxis: {
      type: "category",
      data: ["Income", "Bonus"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [1920, 620],
        type: "bar",
        itemStyle: {
          color: (params: any) => colorPalette[params.dataIndex],
        },
      },
    ],
  };

  return (
    <div>
      <h1>Income</h1>
      <ReactECharts option={option} />
    </div>
  );
};

export default BarChart;
