import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RegisterForm = ({
  toggleRegister,
  registerDetails,
  onSubmit,
  onChange,
}) => {
  return (
    <div className="register-form text-white">
      <h2 className="mb-5 ">Register</h2>
      <form className="form my-3 w-75 mx-auto" onSubmit={onSubmit}>
        <div className="form-group my-3">
          {/* <label className="label"> Name</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Name..."
            name="name"
            onChange={onChange}
            value={registerDetails.name}
          />
        </div>
        <div className="form-group my-3">
          {/* <label className="label"> Name</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="User Name..."
            name="username"
            onChange={onChange}
            value={registerDetails.username}
          />
        </div>
        <div className="form-group text my-3">
          {/* <label className="label"> Name</label> */}
          <input
            type="email"
            className="form-control"
            placeholder="Email..."
            name="email"
            onChange={onChange}
            value={registerDetails.email}
          />
        </div>
        <div className="form-group text- my-3">
          {/* <label className="label"> Name</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Password..."
            name="password"
            onChange={onChange}
            value={registerDetails.password}
          />
        </div>
        <div className="form-group text- my-3">
          {/* <label className="label"> Name</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password..."
            name="confirmpassword"
            onChange={onChange}
            value={registerDetails.confirmpassword}
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
        <Link
          to="/enter/login"
          // onClick={toggleRegister}
          className=" btn btn-link text-primary text-decoration-none fw-bold"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
