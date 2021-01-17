import React from "react";
import PropTypes from "prop-types";

const MetaData = ({ data }) => {
  const keys = Object.keys(data);
  return (
    <div className="card bg-dark text-white ">
      <div className="card-header text-center h2"> Meta Data</div>
      <div className="card-body">
        {keys.map((key) => (
          <div key={key} className="row my-2">
            <div className="col-6">{key}</div>
            <div className="col-6 text-light">{data[key]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

MetaData.propTypes = {};

export default MetaData;
