import React from "react";
import ApexCharts from "react-apexcharts";

const series = [
  {
    name: "Website Blog Visits",
    data: [670, 720, 770, 690, 900, 970, 1030],
  },
  {
    name: "Social Media Visits",
    data: [760, 590, 910, 850, 700, 1050, 920],
  },
];

const chartSettings = {
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    type: "category",
    categories: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ],
    labels: {
      style: {
        colors: "#6B859E",
        opacity: 0.7,
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: ["#6B859E"],
        opacity: 0.7,
      },
    },
  },
  tooltip: {
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 1,
      stops: [40, 90, 100]
    }
  },
  colors: ["#4D53E0", "#41D5E2"],
  chart: {
    toolbar: {
      show: false,
    },
  },
  legend: {
    show: true,
    horizontalAlign: "center",
  },
};

export default function ApexLineChart() {
  return (
    <ApexCharts
      options={chartSettings}
      series={series}
      type="area"
      height={300}
    />
  );
}
