import React from "react";
import ReactApexChart from "react-apexcharts";

const chartSettings = {
  options: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
  series: [
    {
      name: "Completed Tasks",
      data: [80, 70, 110, 75, 100, 55],
    },
  ],
  yaxis: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
    curve: "smooth",
  },
  chart: {
    toolbar: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  fill: {
    opacity: 0.2,
    colors: ["#4D53E0"],
  },
  colors: ["#4D53E0"],
};

const ApexRadarChart = () => {

  return (
    <div style={{ height: "316px" }}>
      <div className="my-3 body-3 muted">Different types of notifications for lots of use cases. Custom classes</div>
      <ReactApexChart
        options={chartSettings}
        series={chartSettings.series}
        type="radar"
        height="200"
      />
    </div>
  );
};

export default ApexRadarChart;
