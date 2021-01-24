import React from "react";
import PropTypes from "prop-types";
import NewscardLayout from "../../../Layout/NewscardLayout";

const NewsCard = ({ News = [] }) => {
  // console.log("news sent like this");
  // console.log(News);
  return (
    <div
    // class={{ display: "grid", align: "top" }}
    >
      {News.map((object, ind) => (
        <NewscardLayout news={object} key={ind} />
      ))}
      <div />
    </div>
  );
};

NewsCard.propTypes = {};

export default NewsCard;
