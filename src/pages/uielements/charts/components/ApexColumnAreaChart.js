import React from "react";
import ApexCharts from "react-apexcharts";

const series = [{
  name: 'Social Media',
  type: 'column',
  data: [650, 850, 550, 750, 850, 700, 1050, 1100]
}, {
  name: 'Website Blog',
  type: 'area',
  data: [800, 900, 1050, 1100, 1000, 850, 1050, 1150]
}];

const chartSettings = {
  colors: ['#4D53E0', '#C7D0D9'],
  chart: {
    toolbar: {
      show: false,
    },
    height: 350,
    type: 'line',
    stacked: false,
  },
  stroke: {
    width: [0, 0],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  fill: {
    type: "solid",
    opacity: [1, 0.5],
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  markers: {
    size: 0
  },
  xaxis: {
    type: 'category',
    labels: {
      style: {
        colors: "#6B859E",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: ["#6B859E"],
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " visits";
        }
        return y;

      }
    }
  }
};






export default function ApexColumnAreaChart() {
  return (
    <ApexCharts
      options={chartSettings}
      series={series}
      type="area"
      height={300}
    />
  );
}
