import React from "react";
import PropTypes from "prop-types";
import PageLayout from "../../Layout/PageLayout";
import CompareForm from "./CompareForm";
import CompareChart from "./CompareChart";

const Compare = ({ location }) => {
  return (
    <PageLayout page="compare">
      <section className="dark min-vh-100 padTop-5">
        <CompareForm />

        <div className="container"></div>
        <CompareChart />
      </section>
    </PageLayout>
  );
};

Compare.propTypes = {};

export default Compare;
