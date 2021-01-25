import React from "react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";
import { Card, CardBody } from "reactstrap";

const CompareChart = ({ compareData, company1, company2 }) => {
  var dates = Object.keys(compareData);
  dates.reverse();
  var company1Data = [];
  var company2Data = [];
  for (var i = 0; i < dates.length; i++) {
    company1Data.push(compareData[dates[i]]["first"]);
    company2Data.push(compareData[dates[i]]["second"]);
  }
  var options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#e14eca", "#1d8cf8"],
    series: [
      {
        name: company1,
        data: company1Data,
      },
      {
        name: company2,
        data: company2Data,
      },
    ],
    stroke: {
      width: [1, 2],
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
      },
    },
    xaxis: {
      categories: dates,
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#e14eca",
        },
        labels: {
          style: {
            colors: "#e14eca",
          },
        },
        title: {
          text: company1,
          style: {
            color: "#e14eca",
          },
        },
      },
      {
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#1d8cf8",
        },
        labels: {
          style: {
            colors: "#1d8cf8",
          },
        },
        title: {
          text: company2,
          style: {
            color: "#1d8cf8",
          },
        },
      },
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false,
      },
    },
    legend: {
      horizontalAlign: "center",
      offsetX: 40,
      fontFamily: "Poppins",
      labels: {
        colors: "#ffffff",
        useSeriesColors: true,
      },
    },
  };
  return (
    <div className="container">
      <Card>
        <Chart
          options={options}
          series={options.series}
          type="line"
          width={1000}
          height={350}
        />
      </Card>
    </div>
  );
};

CompareChart.propTypes = {};

export default CompareChart;
