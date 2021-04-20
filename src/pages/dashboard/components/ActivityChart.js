import React from "react";
import ApexCharts from "react-apexcharts";

const series = [{
  name: 'Your Activity',
  type: 'column',
  data: [350, 275, 375, 375, 300, 225, 275]
}, {
  name: 'Your Goal',
  type: 'line',
  data: [400, 350, 450, 400, 350, 300, 350]

}];

const chartSettings = {
  colors: ["#FFCA41", "#43BC13"],
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
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  legend: {
    position: "top",
    floating: true,
  },
  xaxis: {
    type: 'category',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: true,
      style: {
        colors: "#6B859E",
      },
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    type: "solid",
    opacity: 1,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
    }
  },
  grid: {
    show: false,
  }
};

export default function ApexActivityChart() {
  return (
    <ApexCharts
      options={chartSettings}
      series={series}
      type="area"
      height={275}
    />
  )
}
