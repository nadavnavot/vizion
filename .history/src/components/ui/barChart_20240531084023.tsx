"use client";

import ReactECharts from "echarts-for-react";

const BarChart = () => {
  const colorPalette = ["#FF6347", "#1E90FF", "#32CD32", "#FFD700", "#6A5ACD"]; // Define your color palette

  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [220, 120, 80, 200, 110],
        type: "bar",
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
