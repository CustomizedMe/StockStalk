import React, { useState, useEffect } from "react";
import PageLayout from "../../Layout/PageLayout";
import CompareForm from "./CompareForm";
import CompareChart from "./CompareChart";
import * as MarketApi from "../../Api/MarketApi";

const Compare = ({ location, history }) => {
  const pathName = location.pathname;
  const company1 = pathName.split("/")[2];
  const company2 = pathName.split("/")[3];
  const [compareData, setCompareData] = useState(null);

  const initial_CompanyForm = {
    company1,
    company2,
  };

  const [msg, setMsg] = useState("loading");
  const [companyForm, setcompanyForm] = useState(initial_CompanyForm);
  const currentStatus = "DAILY";

  useEffect(() => {
    if (companyForm.company1 && companyForm.company2) {
      fetchCompareData();
    }
  }, [company1, company2]);

  const onChange = ({ target }) => {
    setcompanyForm({
      ...companyForm,
      [target.name]: target.value.toUpperCase(),
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      company1 === companyForm.company1 &&
      company2 === companyForm.company2
    ) {
      return;
    }
    setCompareData(null);
    history.push(`/compare/${companyForm.company1}/${companyForm.company2}`);
  };

  const fetchCompareData = () => {
    setMsg("Loading");
    MarketApi.compareChart(
      companyForm.company1,
      companyForm.company2,
      currentStatus
    )
      .then((data) => {
        setCompareData(data);
      })
      .catch((err) => {
        console.log(err.response);
        setCompareData({});
        setMsg(err.response.data.msg);
      });
  };

  return (
    <PageLayout page="compare">
      <section className="dark min-vh-100 padTop-3">
        <div className="container">
          <CompareForm
            companyForm={companyForm}
            onChange={onChange}
            onSubmit={onSubmit}
          />
          {compareData ? (
            <CompareChart
              compareData={compareData}
              company2={company2}
              company1={company1}
            />
          ) : company1 && company2 ? (
            <h2 align="center">{msg}</h2>
          ) : (
            <></>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

Compare.propTypes = {};

export default Compare;
