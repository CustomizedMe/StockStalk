import React from "react";
import { Link } from "react-router-dom";
export default function index() {
  return (
    <footer className="footer footer-dark bg-dark py-5 text-center">
      <div className="container">
        <div className="row text-light">
          <div className="col-4">
            <h1>StockStalk</h1>
            <p>CopyRight &copy; 2020</p>
          </div>

          <nav className="col-4  navbar-dark">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link"> Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"> Market</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"> Faqs</Link>
              </li>
            </ul>
          </nav>
          <div className="col-4 text-center navbar-dark">
            <div className="text-light">
              <Link>
                <i className="fab fa-facebook fa-2x mx-3 my-auto"></i>
              </Link>
              <Link>
                <i className="fab fa-twitter fa-2x mx-3 my-auto"></i>
              </Link>
              <Link>
                <i className="fab fa-linkedin fa-2x mx-3 my-auto"></i>
              </Link>
              <Link>
                <i className="fab fa-github fa-2x mx-3 my-auto"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
