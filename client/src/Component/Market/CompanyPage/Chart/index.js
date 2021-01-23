import React from "react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";
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
    title: {
      text: "CandleStick Chart",
      align: "left",
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
    <div className="card bg-white text-dark p-4">
      <div className="card-header bg-white text-center my-2">
        <ul class="nav nav-pills row ">
          <li className="nav-item col-4">
            <button
              className={
                "nav-link w-100 " +
                (status === "daily" ? " btn-dark" : "btn-outline-dark")
              }
              onClick={() => onChangeStatus("daily")}
            >
              Daily
            </button>
          </li>
          <li className="nav-item col-4">
            <button
              className={
                "nav-link w-100 " +
                (status === "monthly" ? " btn-dark" : "btn-outline-dark")
              }
              onClick={() => onChangeStatus("monthly")}
            >
              Monthly
            </button>
          </li>
          <li className="nav-item col-4 ">
            <button
              className={
                "nav-link w-100 " +
                (status === "weekly" ? " btn-dark" : "btn-outline-dark")
              }
              onClick={() => onChangeStatus("weekly")}
            >
              Weekly
            </button>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <Chart
          options={options}
          series={series}
          type="candlestick"
          width={750}
          height={350}
        />
      </div>
    </div>
  );
};

SChart.propTypes = {};

export default SChart;
