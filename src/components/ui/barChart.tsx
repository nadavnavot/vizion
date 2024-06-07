"use client";
import ReactECharts from "echarts-for-react";
import Subtitle from "./subtitle";

const BarChart = () => {
  const colorPalette = ["#142559", "#737376"];

  const data = [1920, 600];
  const categories = ["Salary", "Bonus"];
  const total = data.reduce((sum, value) => sum + value, 0);

  const option = {
    tooltip: {
      trigger: "axis",
      formatter: (params: any) => {
        const value = params[0].value;
        const percentage = ((value / total) * 100).toFixed(2);
        return `${params[0].name}: ${value}€ (${percentage}%)`;
      },
    },
    grid: {
      left: "15%",
      right: "10%",
      bottom: "25%",
      top: "10%",
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
          barBorderRadius: 1,
        },
      },
    ],
    graphic: [
      {
        type: "text",
        left: "center",
        bottom: "20px",
        style: {
          text: `Total: ${total}€`,
          textAlign: "center",
          fill: "#000",
          fontSize: 16,
          fontWeight: "normal",
        },
      },
    ],
  };

  return (
    <div>
      <Subtitle>Income</Subtitle>
      <div className="bg-white shadow-md rounded">
        <ReactECharts option={option} style={{ height: "300px" }} />
      </div>
    </div>
  );
};

export default BarChart;
