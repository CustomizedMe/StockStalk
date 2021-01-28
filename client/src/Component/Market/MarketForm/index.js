import React from "react";

const MarketForm = ({ onSubmit, company, onChange }) => {
  return (
    <div className=" mx-auto mt-1  py-1 w-50">
      <h2 className="mt-5 pt-5 text-justify">Search for the company</h2>
      <form className="form my-4" onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            value={company}
            onChange={onChange}
            className="form-control py-3"
            placeholder="Enter company's BSE Symbol eg: RELIANCE, ITC etc"
          />
        </div>
      </form>
    </div>
  );
};

MarketForm.propTypes = {};

export default MarketForm;
