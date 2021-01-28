import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Collapse, NavbarToggler } from "reactstrap";

export default function NavBar({ loggedIn, black, page, logout }) {
  const [search, setSearch] = useState("");
  let history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    history.push("/market/" + search);
    setSearch("");
  };
  const [collapseOpen, setcollapseOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", updateCollapse);
    return function cleanup() {
      window.removeEventListener("resize", updateCollapse);
    };
  });
  const updateCollapse = () => {
    if (
      window.innerWidth < 1200
      // && collapseOpen
    ) {
      setcollapseOpen(true);
    } else {
      setcollapseOpen(false);
    }
  };
  const toggleCollapse = () => {
    setcollapseOpen(!collapseOpen);
  };

  return (
    <nav
      className={
        "navbar fixed-top navbar-expand-md navbar-dark" +
        (black ? " navbar-dark1" : "")
      }
    >
      <div className="container text-uppercase font-mont">
        <Link to="/" className="navbar-brand fs-1 text-light">
          <span className="text-light text-uppercase fw-bold">Stock</span>
          Stalk
        </Link>
        <NavbarToggler onClick={toggleCollapse}>
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
        </NavbarToggler>
        {/* <div className="collapse navbar-collapse"> */}
        <Collapse navbar isOpen={collapseOpen}>
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
                to="/compare"
                className={
                  "nav-link text-white" + (page === "compare" ? " active" : "")
                }
              >
                {" "}
                Compare
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
                    className="nav-link text-white"
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
                  Login/Register
                </Link>
              </li>
            )}
          </ul>
          <form className="d-flex" onSubmit={onSubmit}>
            <input
              className="form-control me-2 bg-light"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={({ target }) => setSearch(target.value.toUpperCase())}
            />
            <Button
              className="btn-simple fas fa-search fa-1x"
              color="success"
              type="submit"
            ></Button>
          </form>
        </Collapse>
      </div>
    </nav>
  );
}
