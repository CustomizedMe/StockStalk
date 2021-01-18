import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loginAction } from "../../Action/AuthAction";
import PageLayout from "../../Layout/PageLayout";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import * as authApi from "../../Api/AuthApi";

import { registerUser } from "../../Api/AuthApi";
function Register({ login, location, history }) {
  const [formDetails, setFormDetails] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    name: "",
    email: "",
  });
  const params = location.pathname.split("/")[2];
  if (!params) {
    history.push("/enter/login");
  }
  const register = params !== "login";
  const onChange = ({ target }) => {
    setFormDetails({ ...formDetails, [target.name]: target.value });
  };
  const onLoginSubmit = (e) => {
    e.preventDefault();
    // const { username, password } = formDetails;
    const loginData = {
      username: formDetails.username,
      password: formDetails.password,
    };
    authApi
      .loginUser(loginData)
      .then((data) => {
        console.log(data);
        login(data);
        history.push("/market");
      })
      .catch((err) => {
        console.log(err);
        alert("some error");
      });
  };
  const onRegisterSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <PageLayout page="enter">
      <section className="dark min-vh-100 pb-5 padTop-5">
        <div className="container pt-5 ">
          <div className="card bg-dark text-center p-4 shadow-lg w-50 m-auto">
            <div>
              {register ? (
                <RegisterForm
                  // toggleRegister={() => {history.push}}
                  onSubmit={onRegisterSubmit}
                  registerDetails={formDetails}
                  onChange={onChange}
                />
              ) : (
                <LoginForm
                  // toggleRegister={() => setRegister(true)}
                  onSubmit={onLoginSubmit}
                  login={formDetails}
                  onChange={onChange}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
const mapDispatchToProps = {
  login: loginAction,
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
