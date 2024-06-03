import ReactECharts from "echarts-for-react";

const BarChart = () => {
  const weatherIcons = {
    Sunny: "./data/asset/img/weather/sunny_128.png",
    Cloudy: "./data/asset/img/weather/cloudy_128.png",
    Showers: "./data/asset/img/weather/showers_128.png",
  };

  const seriesLabel = {
    normal: {
      show: true,
      textBorderColor: "#333",
      textBorderWidth: 2,
    },
  };

  const option = {
    title: {
      text: "Weather Statistics",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["City Alpha", "City Beta", "City Gamma"],
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      name: "Days",
      data: ["Cloudy", "Sunny", "Showers"],
      axisLabel: {
        margin: 20,
        formatter: function (value: string) {
          return "{" + value + "| }\n{value|" + value + "}";
        },
        rich: {
          value: {
            lineHeight: 30,
            align: "center",
          },
          Sunny: {
            height: 20,
            align: "center",
            backgroundColor: {
              image: weatherIcons.Sunny,
            },
          },
          Cloudy: {
            height: 20,
            align: "center",
            backgroundColor: {
              image: weatherIcons.Cloudy,
            },
          },
          Showers: {
            height: 20,
            align: "center",
            backgroundColor: {
              image: weatherIcons.Showers,
            },
          },
        },
      },
    },
    yAxis: {},
    series: [
      {
        name: "City Alpha",
        type: "bar",
        data: [165, 170, 30],
        label: seriesLabel,
      },
      {
        name: "City Beta",
        type: "bar",
        data: [150, 105, 110],
        label: seriesLabel,
      },
      {
        name: "City Gamma",
        type: "bar",
        data: [220, 82, 63],
        label: seriesLabel,
      },
    ],
  };

  return (
    <div>
      <h1>Weather Statistics</h1>
      <ReactECharts option={option} />
    </div>
  );
};

export default BarChart;
