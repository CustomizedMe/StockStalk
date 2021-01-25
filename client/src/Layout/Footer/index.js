import React from "react";
import { Link } from "react-router-dom";
export default function index() {
  return (
    <footer className="footer footer-dark dark py-5 text-center">
      <div className="container">
        <div className="row text-light">
          <div className="col-4">
            <h1>StockStalk</h1>
            <p>CopyRight &copy; 2020</p>
          </div>

          <div className="col-8 text-center navbar-dark">
            <div className="ms-auto">
              <p className="font-monotone fs-5">Connect with us on</p>
              <Link to="#" className="text-white">
                <i className="icon fab fa-facebook fa-2x mx-3 my-auto"></i>
              </Link>
<<<<<<< HEAD
              <Link to="#" className="text-white">
                <i className="icon fab fa-twitter fa-2x mx-3 my-auto"></i>
              </Link>
=======
              <a href="https://fb.com" className="text-white">
                <i className="icon fab fa-twitter fa-2x mx-3 my-auto"></i>
              </a>
>>>>>>> jan21
              <Link to="#" className="text-white">
                <i className="icon fab fa-linkedin fa-2x mx-3 my-auto"></i>
              </Link>
              <Link to="#" className="text-white">
                <i className="icon fab fa-github fa-2x mx-3 my-auto"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
