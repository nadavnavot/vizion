"use client";
import React from "react";
import ReactECharts from "echarts-for-react";
import Subtitle from "./subtitle";

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
      formatter: "{b}: {c}€ ({d}%)",
    },
    legend: {
      show: false,
    },
    graphic: [
      {
        type: "text",
        left: "center",
        top: "center",
        style: {
          text: `${balance}€ Left`,
          textAlign: "center",
          fill: "#000",
          fontSize: 20,
          fontWeight: "",
        },
      },
    ],
    series: [
      {
        type: "pie",
        data: data,
        itemStyle: {
          color: (params: any) => colorPalette[params.dataIndex],
        },
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "inside",
          formatter: "{c}€",
          fontSize: 16,
          fontWeight: 20,
        },
        labelLine: {
          show: false,
        },
      },
    ],
  };

  return (
    <div>
      <Subtitle>Balance</Subtitle>
      <div className="bg-white shadow-md rounded pb-8">
        <div className="m-8 text-2xl pt-8 font-semibold">June 2024</div>
        <ReactECharts option={option} />
        <div className="flex justify-center mt-2">
          <div className="flex items-center mr-4">
            <div
              className="w-4 h-4 mr-2 rounded"
              style={{ backgroundColor: colorPalette[0] }}
            ></div>
            <span>Income</span>
          </div>
          <div className="flex items-center">
            <div
              className="w-4 h-4 mr-2 rounded"
              style={{ backgroundColor: colorPalette[1] }}
            ></div>
            <span>Expenses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceChart;
