import React from "react";
import PropTypes from "prop-types";
import MetaData from "./MetaData";
import SChart from "./Chart";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

const CompanyPage = ({
  data,
  chartData,
  status,
  onChangeStatus,
  comments,
  symbol,
  onChange,
  onSubmitForm,
  CommentData,
}) => {
  return (
    <div className="text-white">
      <div className="row mb-10 ">
        <div className="col-lg-9 col-md-12">
          <SChart
            data={chartData}
            status={status}
            onChangeStatus={onChangeStatus}
          />
        </div>
        <div className="col-lg-3 col-md-12">
          <MetaData data={data} />
        </div>
      </div>
      <div className="align-middle">
        <CommentForm
          symbol={symbol}
          onChange={onChange}
          onSubmit={onSubmitForm}
          CommentData={CommentData}
        />
      </div>
      <div>
        <Comments comments={comments} />
      </div>
    </div>
  );
};

CompanyPage.propTypes = {};

export default CompanyPage;
