"use client";
import ReactECharts from "echarts-for-react";
import Subtitle from "./subtitle";

const PieChart = () => {
  const data = [
    { value: 220, name: "Entertainment" },
    { value: 120, name: "Shopping" },
    { value: 80, name: "Groceries" },
    { value: 200, name: "Transportation" },
    { value: 100, name: "Bills" },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const option = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c}€ ({d}%)",
    },
    legend: {
      bottom: "20px",
      left: "center",
    },
    series: [
      {
        type: "pie",
        bottom: "80px",
        radius: ["40%", "70%"],
        avoidLabelOverlap: true,
        label: {
          show: true,
          position: "inside",
          formatter: "{c}€",
        },
        labelLine: {
          show: false,
        },
        data: data,
      },
    ],
    graphic: [
      {
        type: "text",
        left: "center",
        top: "37%",
        style: {
          text: `Total\n${total}€`,
          textAlign: "center",
          fill: "#000",
          fontSize: 16,
          fontWeight: "bold",
        },
      },
    ],
  };

  return (
    <div>
      <Subtitle>Expenses</Subtitle>
      <div className="bg-white shadow-md rounded pb-4">
        <ReactECharts option={option} style={{ height: "400px" }} />
      </div>
    </div>
  );
};

export default PieChart;
