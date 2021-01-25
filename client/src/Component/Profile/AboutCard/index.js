import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
const AboutCard = ({ profile, isMyProfile }) => {
  return (
    <div className="card p-0 bg-dark text-white mb-5">
      <div className="card-header p-5 text-center border-start-0 border-end-0 border-top-0  border-danger">
        <img
          src={profile.picture}
          className="rounded-circle w-25 border border-success border-2"
          alt=""
        />
        <div className="bg-dark-50 text-center">
          {(profile.user || { name: "" }).name}
          <div className="text-muted">
            @{(profile.user || { name: "" }).name}
          </div>
        </div>
        <p className="lead mt-2 mb-0">{`${profile.designation || ""} | ${
          profile.company || ""
        }`}</p>
      </div>
      <div className="card-body px-5 pb-5">
        <p className="py-3">{profile.about || ""}</p>

        <div className=" w-50  mx-auto d-flex justify-content-around">
          <a
            href={(profile.social || { twitter: "" }).twitter}
            className="text-white icon "
          >
            <i className=" text-white fab fa-twitter fa-2x"></i>
          </a>
          <a
            href={(profile.social || { facebook: "" }).facebook}
            className="text-white icon "
          >
            <i className=" fab fa-facebook fa-2x"></i>
          </a>
          <a
            href={(profile.social || { linkedin: "" }).linkedin}
            className="text-white icon "
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>

        {isMyProfile ? (
          <Link
            to="/editprofile"
            className="btn btn-outline-danger mx-auto mt-5 w-100"
          >
            Edit my profile
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

AboutCard.propTypes = {};

export default AboutCard;
