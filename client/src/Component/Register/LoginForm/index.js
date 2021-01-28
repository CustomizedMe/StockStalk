import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LoginForm = ({ toggleRegister, onSubmit, login, onChange, alert1 }) => {
  return (
    <div>
      <h2 className="mb-5 mt-4">Login</h2>
      {alert1 ? (
        <div className="alert alert-warning">Some error have come up</div>
      ) : (
        ""
      )}
      <form className="form my-3 w-75 mx-auto" onSubmit={onSubmit}>
        <div className="form-group my-3">
          {/* <label className="label"> Name</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="User Name..."
            name="username"
            required
            onChange={onChange}
            value={login.username}
          />
        </div>

        <div className="form-group text- my-3">
          {/* <label className="label"> Name</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Password..."
            name="password"
            required
            onChange={onChange}
            value={login.password}
          />
        </div>

        <input
          type="submit"
          className="mt-4 btn btn-outline-light mx-auto"
          value="Login"
        />
      </form>

      <p>
        Don't have an account ?
        <Link
          to="/enter/register"
          // onClick={toggleRegister}
          className=" btn btn-link text-primary text-decoration-none fw-bold"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
