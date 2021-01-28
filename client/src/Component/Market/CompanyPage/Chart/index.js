import React from "react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";
import { Button, Card, CardHeader } from "reactstrap";

const SChart = ({ data, status, onChangeStatus }) => {
  const times = Object.keys(data);
  const plotData = times.map((time) => {
    const value = data[time];
    return [
      new Date(time),
      parseInt(value["1. open"]),
      parseInt(value["2. high"]),
      parseInt(value["3. low"]),
      parseInt(value["4. close"]),
    ];
  });
  const series = [{ data: plotData }];
  const options = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
      },
    },
    candlestick: {
      wick: {
        useFillColor: true,
      },
      colors: {
        upward: "#3C90EB",
        downward: "#DF7D46",
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };
  return (
    <Card className="bg-white p-4">
      <CardHeader className="bg-white text-center my-2">
        <ul className="nav nav-pills row ">
          <li className="nav-item col-4">
            <Button
              className={
                "nav-link w-100 " +
                (status === "daily" ? " btn-dark" : "btn-simple")
              }
              onClick={() => onChangeStatus("daily")}
            >
              Daily
            </Button>
          </li>
          <li className="nav-item col-4">
            <Button
              className={
                "nav-link w-100 " +
                (status === "monthly" ? " btn-dark" : "btn-simple")
              }
              onClick={() => onChangeStatus("monthly")}
            >
              Monthly
            </Button>
          </li>
          <li className="nav-item col-4 ">
            <Button
              className={
                "nav-link w-100 " +
                (status === "weekly" ? " btn-dark" : "btn-simple")
              }
              onClick={() => onChangeStatus("weekly")}
            >
              Weekly
            </Button>
          </li>
        </ul>
      </CardHeader>
      <div className="card-body">
        <Chart
          options={options}
          series={series}
          type="candlestick"
          width={750}
          height={350}
        />
      </div>
    </Card>
  );
};

SChart.propTypes = {};

export default SChart;
