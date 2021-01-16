import React from "react";
import PropTypes from "prop-types";

const RegisterForm = ({ toggleRegister }) => {
  return (
    <div className="register-form text-white">
      <h2 className="mb-5 ">Register</h2>
      <form className="form my-3 w-75 mx-auto">
        <div className="form-group my-3">
          {/* <label className="label"> Name</label> */}
          <input type="text" className="form-control" placeholder="Name..." />
        </div>
        <div className="form-group my-3">
          {/* <label className="label"> Name</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="User Name..."
          />
        </div>
        <div className="form-group text my-3">
          {/* <label className="label"> Name</label> */}
          <input type="email" className="form-control" placeholder="Email..." />
        </div>
        <div className="form-group text- my-3">
          {/* <label className="label"> Name</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Password..."
          />
        </div>
        <div className="form-group text- my-3">
          {/* <label className="label"> Name</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password..."
          />
        </div>

        <input
          type="submit"
          className=" mt-4 w-50 btn btn-outline-light"
          value="Register"
        />
      </form>

      <p>
        Already have an account ?
        <button
          onClick={toggleRegister}
          className=" btn btn-link text-primary text-decoration-none fw-bold"
        >
          Sign In
        </button>
      </p>
    </div>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
