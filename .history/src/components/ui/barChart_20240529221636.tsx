import * as echarts from "echarts";

var chartDom = document.getElementById("main");
var barChart = echarts.init(chartDom);
var option;

option = {
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

option && barChart.setOption(option);

export default barChart;
