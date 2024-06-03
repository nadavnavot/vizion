"use client";

import ReactECharts from "echarts-for-react";

const BarChart = () => {
  const colorPalette = ["#142559", "#60F5D9"];

  const option = {
    xAxis: {
      type: "category",
      data: ["Income", "Expenses"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [220, 120],
        type: "bar",
        itemStyle: {
          color: (params: any) => colorPalette[params.dataIndex],
        },
      },
    ],
  };

  return (
    <div>
      <h1>Chart</h1>
      <ReactECharts option={option} />
    </div>
  );
};

export default BarChart;
