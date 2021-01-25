import React, { useState, useEffect } from "react";
import PropType from "prop-types";
import PageLayout from "../../Layout/PageLayout";
<<<<<<< HEAD

const Compare = ({ location }) => {
  return (
    <PageLayout page="compare">
      <div> </div>
=======
import CompareForm from "./CompareForm";
import CompareChart from "./CompareChart";
import * as MarketApi from "../../Api/MarketApi";
import { Redirect } from "react-router-dom";

const initialCompareData = {};

const Compare = ({ location, history }) => {
  const pathName = location.pathname;
  console.log(pathName);
  const company1 = pathName.split("/")[2];
  const company2 = pathName.split("/")[3];
  // console.log(company1);
  // console.log(company2);
  const [compareData, setCompareData] = useState(initialCompareData);
  const currentStatus = "DAILY";
  useEffect(() => {
    if (company2 && company1) {
      fetchCompareData();
    }
  }, [company2]);

  const fetchCompareData = () => {
    MarketApi.compareChart(company1, company2, currentStatus)
      .then((data) => {
        setCompareData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.response);
        history.push("/compare/");
      });
  };

  //};
  return (
    <PageLayout page="compare">
      <section className="dark min-vh-100 padTop-5">
        <CompareForm location={location} history={history} />
        <div className="container">
          <CompareChart
            compareData={compareData}
            company2={company2}
            company1={company1}
          />
        </div>
      </section>
>>>>>>> jan21
    </PageLayout>
  );
};

Compare.propTypes = {};

export default Compare;
