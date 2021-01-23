import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, Redirect, useHistory } from "react-router-dom";
import * as commentApi from "../../../../Api/CommentApi";
//import { Redirect } from "react-router-dom";

const CommentForm = ({ symbol }) => {
  // const pathName = location.pathname;
  // const companyName = pathName.split("/")[2];
  const [CommentData, setCommentData] = useState({
    text: "default",
    symbol: symbol,
  });
  console.log(`comment data ${CommentData.symbol}`);
  const onChange = ({ target }) => {
    setCommentData({ ...CommentData, [target.name]: target.value });
  };
  let history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    commentApi
      .addComment(CommentData)
      .then((data) => {
        console.log(data);
        history.push("/market/" + symbol);
      })
      .catch((err) => {
        console.log(err);
        alert("some error in posting comment");
      });
  };

  return (
    <div className="card bg-dark my-5">
      <div className="card-header">
        <h2>Post Comment</h2>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-group d-flex justify-content-center">
          <div className="d-flex justify-content-center">
            <textarea
              cols="120"
              rows="4"
              onChange={onChange}
              className="form-control"
              placeholder="Post your comment for this Company"
              name="text"
            ></textarea>
          </div>
          <div className="justify-content-right align-center">
            <button type="submit" className="btn btn-primary mt-5">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

CommentForm.propTypes = {};

export default CommentForm;
