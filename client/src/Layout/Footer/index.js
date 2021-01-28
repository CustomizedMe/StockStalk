import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import logo from "../../Assests/img/Logo.png";

export default function index() {
  return (
    <div className="footer mt-5 text-center navbar-dark1">
      <div className="container">
        <div className="row text-light">
          <div className="col-4 text-center navbar-dark my-auto mx-auto">
            {/* <Button className="btn-round btn-icon" color="primary">
                <img src={logo} alt="Logo" width={36} height={36} />
              </Button> */}
            <h2 className="my-0 text-bold">StockStalk</h2>
            <p>CopyRight &copy; 2020</p>
          </div>

          <div className="col-8 text-center navbar-dark my-auto">
            <div className="my-1">
              Made by{" "}
              <a href="https://github.com/CustomizedMe">Prakhar Bhatnagar </a>
            </div>
            <div className="ms-auto">
              <a
                href="https://github.com/CustomizedMe"
                className="text-white"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icon fab fa-github fa mx-3 my-auto"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/prakharbhatnagar-iitbhu/"
                className="text-white"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icon fab fa-linkedin fa mx-3 my-auto"></i>
              </a>
              <a
                href="https://www.facebook.com/prakhar.bhatnagar.3950/"
                className="text-white"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icon fab fa-facebook fa mx-3 my-auto"></i>
              </a>
              <a
                href="https://www.instagram.com/prakhar_1874/"
                className="text-white"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icon fab fa-instagram fa mx-3 my-auto"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
