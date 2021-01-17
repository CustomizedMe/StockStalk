import React from "react";
import PropTypes from "prop-types";
import james from "../../../Assests/img/james.jpg";
const AboutCard = (props) => {
  return (
    <div className="card p-0 bg-dark text-white mb-5">
      <div className="card-header p-5 text-center border-start-0 border-end-0 border-top-0  border-danger">
        <img
          src={james}
          className="rounded-circle w-25 border border-success border-2"
          alt=""
        />
        <div className="bg-dark-50 text-center">
          Prakhar Bhatnagar
          <div className="text-muted">@UserName</div>
        </div>
        <p className="lead mt-2 mb-0">CEO | CO-founder | company</p>
      </div>
      <div className="card-body px-5 pb-5">
        <p className="py-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum velit
          vel nemo deleniti magnam ut delectus nisi mollitia pariatur, odit,
          commodi cumque nam? Possimus vero eius, corrupti voluptates magnam
          totam.
        </p>

        <div className=" w-50  mx-auto d-flex justify-content-around ">
          <a href="#" className="text-white icon ">
            <i className=" text-white fab fa-twitter fa-2x"></i>
          </a>
          <a href="#" className="text-white icon ">
            <i className=" fab fa-facebook fa-2x"></i>
          </a>
          <a href="#" className="text-white icon ">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

AboutCard.propTypes = {};

export default AboutCard;
