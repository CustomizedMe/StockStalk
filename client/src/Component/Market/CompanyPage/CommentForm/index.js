<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, Redirect, useHistory } from "react-router-dom";
import * as commentApi from "../../../../Api/CommentApi";
//import { Redirect } from "react-router-dom";
=======
import React from "react";
>>>>>>> jan21

const CommentForm = ({ onSubmit, CommentData, onChange }) => {
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
              value={CommentData.text}
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
