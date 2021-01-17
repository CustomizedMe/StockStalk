import React from "react";
import PropTypes from "prop-types";

const MarketForm = ({ onSubmit, company, onChange }) => {
  return (
    <div className=" mx-auto mt-5  py-5 w-50">
      <h1 className="mt-5 pt-5">Search for the company</h1>
      <form className="form my-4" onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            value={company}
            onChange={onChange}
            className="form-control py-3"
            placeholder="Enter company..."
          />
        </div>
      </form>
    </div>
  );
};

MarketForm.propTypes = {};

export default MarketForm;
