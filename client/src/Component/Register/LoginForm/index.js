import React from "react";
import PropTypes from "prop-types";

const LoginForm = ({ toggleRegister }) => {
  return (
    <div className="register-form text-white">
      <h2 className="mb-5 ">Login</h2>
      <form className="form my-3 w-75 mx-auto">
        <div className="form-group my-3">
          {/* <label className="label"> Name</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="User Name..."
          />
        </div>

        <div className="form-group text- my-3">
          {/* <label className="label"> Name</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Password..."
          />
        </div>

        <input
          type="submit"
          className=" mt-4 w-50 btn btn-outline-light"
          value="Login"
        />
      </form>

      <p>
        Don't have an account ?
        <button
          onClick={toggleRegister}
          className=" btn btn-link text-primary text-decoration-none fw-bold"
        >
          Register
        </button>
      </p>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
