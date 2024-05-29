import ReactECharts from "echarts-for-react";

const BarChart = () => {
  // Define option outside the JSX return statement
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };

  // Return JSX with the ReactECharts component
  return (
    <div>
      <h1>Chart</h1>
      <ReactECharts option={option} />
    </div>
  );
};

export default BarChart;
