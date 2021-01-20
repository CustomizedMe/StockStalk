import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
export default function NavBar({ loggedIn, black, page, logout }) {
  // console.log(loggedIn)
  const [search, setSearch] = useState("");
  let history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();

    history.push("/market/" + search);
    setSearch("");
  };
  return (
    <nav
      className={
        "navbar fixed-top navbar-expand-lg navbar-dark" +
        (black ? " navbar-dark1" : "")
      }
    >
      <div className="container text-uppercase">
        <Link to="/" className="navbar-brand fs-1 text-light">
          <span className="text-light text-uppercase fw-bold">Stock</span>
          Stalk
        </Link>
        <div className="collapse navbar-collapse  ">
          <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item">
              <Link
                to="/market"
                className={
                  "nav-link text-white" + (page === "market" ? " active" : "")
                }
              >
                {" "}
                Market
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Faqs"
                className={
                  "nav-link text-white" + (page === "faqs" ? " active" : "")
                }
              >
                {" "}
                FAQs
              </Link>
            </li>
            {loggedIn.token ? (
              <>
                <li className="nav-item">
                  <Link
                    to="/profile"
                    className={
                      "nav-link text-white" +
                      (page === "profile" ? " active" : "")
                    }
                  >
                    {" "}
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    onClick={() => {
                      logout();
                    }}
                    className=" btn nav-link text-white"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link
                  to="/enter"
                  className={
                    "nav-link  text-white" + (page === "enter" ? " active" : "")
                  }
                >
                  Enter
                </Link>
              </li>
            )}
          </ul>
          <form className="d-flex" onSubmit={onSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={({ target }) => setSearch(target.value.toUpperCase())}
            />
            <button
              className="btn btn-outline-light fas fa-search fa-1x"
              type="submit"
            ></button>
          </form>
        </div>
      </div>
    </nav>
  );
}
