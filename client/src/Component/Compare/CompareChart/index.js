import React from "react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";
import { Card, CardBody } from "reactstrap";

const CompareChart = (props) => {
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
        name: "Company I",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
      },
      {
        name: "Company I",
        data: [20, 29, 37, 36, 44, 45, 50, 58],
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
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
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
          text: "Series A",
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
          text: "Company 2",
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
    <div>
      <Card>
        <Chart
          options={options}
          series={options.series}
          type="line"
          width={1200}
          height={350}
        />
      </Card>
    </div>
  );
};

CompareChart.propTypes = {};

export default CompareChart;
