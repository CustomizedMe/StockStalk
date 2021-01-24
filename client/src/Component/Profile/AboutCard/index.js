import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

const AboutCard = ({ profile, isMyProfile }) => {
  return (
    <Card className="card-user">
      <CardBody>
        <CardText />
        <div className="author">
          <div className="block block-one" />
          <div className="block block-two" />
          <div className="block block-three" />
          <div className="block block-four" />
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img alt="..." className="avatar" src={profile.picture} />
            <h4 className="title">{(profile.user || { name: "" }).name}</h4>
          </a>
          <br></br>
          <p className="description">
            {" "}
            {`${profile.designation || ""} | ${profile.company || ""}`}
          </p>
        </div>
        <div className="card-description">{profile.about || ""}</div>
      </CardBody>
      <hr></hr>
      <CardFooter>
        <div className="button-container">
          <Button
            className="btn-icon btn-round"
            style={{
              backgroundImage: "none",
              backgroundColor: " #1da1f2",
            }}
          >
            <a
              href={(profile.social || { twitter: "" }).twitter}
              className="btn-icon btn-round"
              color="twitter"
            >
              <i className=" text-white fab fa-twitter"></i>
            </a>
          </Button>
          <Button
            className="btn-icon btn-round"
            style={{
              backgroundImage: "none",
              backgroundColor: "#3b5998",
            }}
          >
            <a
              href={(profile.social || { facebook: "" }).facebook}
              className="text-white icon "
            >
              <i className=" fab fa-facebook"></i>
            </a>
          </Button>
          <Button
            className="btn-icon btn-round"
            style={{
              backgroundImage: "none",
              backgroundColor: "#0a66c2",
            }}
          >
            <a
              href={(profile.social || { linkedin: "" }).linkedin}
              className="text-white icon "
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

AboutCard.propTypes = {};

export default AboutCard;
{
  /* 

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
        <p className="py-3"></p>

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
      </div> */
}
