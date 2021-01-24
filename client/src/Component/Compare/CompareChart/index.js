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
    colors: ["#FF1654", "#247BA0"],
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
          color: "#FF1654",
        },
        labels: {
          style: {
            colors: "#FF1654",
          },
        },
        title: {
          text: company1,
          style: {
            color: "#FF1654",
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
          color: "#247BA0",
        },
        labels: {
          style: {
            colors: "#247BA0",
          },
        },
        title: {
          text: company2,
          style: {
            color: "#247BA0",
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
    },
  };
  return (
    <div className="mt-10">
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
