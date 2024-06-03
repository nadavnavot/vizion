"use client";

import ReactECharts from "echarts-for-react";

const BarChart = () => {
  const colorPalette = ["#142559", "#737376"];

  const data = [1920, 600];
  const categories = ["Income", "Bonus"];
  const total = data.reduce((sum, value) => sum + value, 0);

  const option = {
    tooltip: {
      trigger: "item",
      formatter: (params: any) => {
        const percentage = ((params.value / total) * 100).toFixed(2);
        return `${params.name}: ${params.value}€ (${percentage}%)`;
      },
    },
    xAxis: {
      type: "category",
      data: categories,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data,
        type: "bar",
        itemStyle: {
          color: (params: any) => colorPalette[params.dataIndex],
          barBorderRadius: 10,
          barCategoryGap: "30%", // Adjust spacing between bars
          barWidth: "50%", // Adjust width of bars
          itemStyle: {
            color: (params: any) => colorPalette[params.dataIndex],
            barBorderRadius: [2, 2, 0, 0], // Rounded corners only on top
          },
        },
      },
    ],
  };

  return (
    <div>
      <h1>Income</h1>
      <div className="bg-white shadow-md rounded ">
        <ReactECharts option={option} />
      </div>
    </div>
  );
};

export default BarChart;
