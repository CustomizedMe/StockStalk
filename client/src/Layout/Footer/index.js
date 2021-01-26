import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assests/img/Logo.png";

export default function index() {
  return (
    <div className="footer mt-5 text-center navbar-dark1">
      <div className="container ">
        <div className="row text-light">
          <div className="col-4 text-center navbar-dark my-auto">
            {/* <img src={logo} alt="Logo" width={36} height={36} /> */}

            <h2 className="my-0">StockStalk</h2>
            <p>CopyRight &copy; 2020</p>
          </div>

          <div className="col-8 text-center navbar-dark my-auto">
            <div className="ms-auto">
              <Link to="#" className="text-white">
                <i className="icon fab fa-facebook fa mx-3 my-auto"></i>
              </Link>
              <a href="https://fb.com" className="text-white">
                <i className="icon fab fa-twitter fa mx-3 my-auto"></i>
              </a>
              <Link to="#" className="text-white">
                <i className="icon fab fa-linkedin fa mx-3 my-auto"></i>
              </Link>
              <Link to="#" className="text-white">
                <i className="icon fab fa-github fa mx-3 my-auto"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
