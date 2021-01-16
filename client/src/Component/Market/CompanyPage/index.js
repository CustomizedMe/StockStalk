import React from "react";
import PropTypes from "prop-types";
import MetaData from "./MetaData";
import SChart from "./Chart";
import Comments from "./Comments";

const CompanyPage = ({ data, chartData }) => {
  return (
    <div className="text-white">
      <div className="row">
        <div className="col-8">
          <SChart data={chartData} />
        </div>
        <div className="col-4">
          <MetaData data={data} />
        </div>
      </div>
      <div>
        <Comments />
      </div>
    </div>
  );
};

CompanyPage.propTypes = {};

export default CompanyPage;
