import React from "react";
import { Link } from "react-router-dom";
export default function index({ loggedIn = true }) {
  return (
    <nav className="navbar navbar-dark py-4 bg-primary navbar-expand-lg">
      <div className="container ">
        <Link className="navbar-brand fs-1 fw-5 ">
          <span className="text-dark text-uppercase">Stock</span>Stalk
        </Link>
        <div className="collapse navbar-collapse text-light ">
          <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item">
              <Link className="nav-link"> Market</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link"> FAQs</Link>
            </li>
            {loggedIn ? (
              <li className="nav-item">
                <Link className="nav-link"> Profile</Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link"> Login / Register</Link>
              </li>
            )}
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
