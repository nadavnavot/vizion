"use client";

import ReactECharts from "echarts-for-react";

const BarChart = () => {
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
        data: ["\u20AC220", "\u20AC120", "\u20AC80", "\u20AC200", "\u20AC110"], // Using Unicode escape sequence for € symbol
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
