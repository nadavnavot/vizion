import ReactECharts from "echarts-for-react";

const BarChart = () => {
  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "EUR",
    });
  };

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
        data: [220, 120, 80, 200, 110].map((value) => formatCurrency(value)), // Format each value with € symbol
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
