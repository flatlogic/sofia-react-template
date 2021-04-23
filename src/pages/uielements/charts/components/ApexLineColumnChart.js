import React from "react";
import ApexCharts from "react-apexcharts";

const series = [{
  name: 'Website Blog',
  type: 'column',
  data: [440, 505, 384, 671, 327, 413, 201, 352, 622]
}, {
  name: 'Social Media',
  type: 'line',
  data: [23, 42, 35, 27, 39, 22, 17, 31, 26]
}];

const chartSettings = {
  colors: ["#F7F8FB", "#FF5668"],
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "straight",
    width: [0, 1]
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
    style: {
      fontSize: '10px',
      fontWeight: 500,
    },
    background: {
      borderWidth: 0,
    },
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  xaxis: {
    type: 'category',
    labels: {
      style: {
        colors: "#6B859E",
      },
    },
  },
  yaxis: [
    {
    title: {
      text: 'Website Blog',
      style: {
        fontSize: '12px',
        fontWeight: 400,
        color: "#6B859E",
      },
    },
    labels: {
      style: {
        colors: ["#6B859E"],
      },
    },
  }, {
    opposite: true,
    title: {
      text: 'Social Media',
      style: {
        fontSize: '12px',
        fontWeight: 400,
        color: "#6B859E",
      },
    },
    labels: {
      style: {
        colors: ["#6B859E"],
      },
    },
  }],
  fill: {
    type: "solid",
    opacity: 1,
  }
};

export default function ApexLineColumnChart() {
  return (
    <ApexCharts
      options={chartSettings}
      series={series}
      type="area"
      height={300}
    />
  )
};

