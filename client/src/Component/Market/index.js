import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../Layout/PageLayout";
import MarketForm from "./MarketForm";
import CompanyPage from "./CompanyPage";
import * as MarketApi from "../../Api/MarketApi";
import { Redirect } from "react-router-dom";
import NewsCard from "./NewsCard";

const initial_News = [];
// console.log("initnal news");
// console.log(initialNews);
const initialData = {
  "Global Quote": {
    Data: "Not found or loading",
  },
};
const initial_comment = [];
const initialChartData = {};
const Market = ({ location, history }) => {
  const [company, setCompany] = useState("");
  const pathName = location.pathname;
  const companyName = pathName.split("/")[2];
  const [data, setData] = useState(initialData);
  const [chartData, setChartData] = useState(initialChartData);
  const [currentStatus, setCurrentStatus] = useState("daily");
  const [CommentData, setCommentData] = useState(initial_comment);
  const [NewsData, setNewsData] = useState(initial_News);

  useEffect(() => {
    MarketApi.newsFeed().then((data) => {
      console.log("news here");
      console.log(data.articles);
      setNewsData(data.articles);
      //const arrayOfObj = Object.entries(data.articles).map((e) => e[1]);
      //setNews(arrayOfObj);
    });
  }, []);

  useEffect(() => {
    if (companyName) {
      fetchMetaData();
      fetchCommentData();
    }
  }, [companyName]);

  useEffect(() => {
    if (companyName) {
      fetchChartData();
    }
  }, [companyName, currentStatus]);

  const fetchChartData = () => {
    MarketApi.companyChart(companyName, currentStatus)
      .then((data) => {
        const keys = Object.keys(data);
        const report = data[keys[1]];
        setChartData(report);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const fetchMetaData = () => {
    MarketApi.companyInfo(companyName)
      .then((data) => {
        console.log("data here");
        console.log(data);
        if (data["Global Quote"]) {
          setData(data);
        } else {
        }
      })
      .catch((err) => {
        // console.log(err.response);

        alert(err.response.data.msg || "Server error");
        // setTimeout(() => history.push("/market"), 2000);
      });
  };
  const fetchCommentData = () => {
    MarketApi.companyComments(companyName).then((data) => {
      setCommentData(data);
      console.log("data here");
      console.log(data);
    });
  };
  //   useEffect(() => {
  //     if (companyName) {
  //       MarketApi.companyInfo(companyName).then((data) => {
  //         console.log("data here");
  //         console.log(data);
  //         if (data) {
  //           setData(data);
  //         } else {

  //         }
  //       //fetch details of company
  //       // if found then great
  //       //setData(data);
  //       //else
  //       //redirect to /market
  //       //history.push("/market");
  //     })
  //   }
  // },[companyName]);

  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/market/${company}`);
  };

  const onChange = ({ target }) => {
    setCompany(target.value.toUpperCase());
  };

  const onChangeCurrentStatus = (value) => {
    setCurrentStatus(value);
  };
  console.log(companyName, data);
  return (
    <PageLayout page="market" history={history}>
      <section className="market dark min-vh-100 text-light padTop-5 pb-5">
        <div className="container">
          {data && companyName ? (
            <CompanyPage
              comments={CommentData}
              data={data}
              chartData={chartData}
              status={currentStatus}
              onChangeStatus={onChangeCurrentStatus}
            />
          ) : (
            <Fragment>
              <MarketForm
                onChange={onChange}
                value={company}
                onSubmit={onSubmit}
              />
              <h2 className=" text-center mt-5 pt-5">
                Here's the latest financial news
              </h2>
              <NewsCard News={NewsData} />
            </Fragment>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

Market.propTypes = {};

export default Market;
