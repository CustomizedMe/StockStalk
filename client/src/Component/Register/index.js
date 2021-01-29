import React, { useState } from "react";
import { connect } from "react-redux";
import { loginAction } from "../../Action/AuthAction";
import PageLayout from "../../Layout/PageLayout";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import * as authApi from "../../Api/AuthApi";
import { registerUser } from "../../Api/AuthApi";
import { editProfile } from "../../Api/ProfileApi";
import { Card, Container } from "reactstrap";

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
    const loginData = {
      username: formDetails.username,
      password: formDetails.password,
    };
    authApi
      .loginUser(loginData)
      .then((data) => {
        // console.log(data);
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
    registerUser(formDetails)
      .then((data) => {
        // console.log(data);
        history.push("/enter/login");
      })
      .catch((err) => {
        console.log(err);
        alert("Please check your username or email");
      });
  };

  return (
    <PageLayout page="enter">
      <section className="min-vh-100 pb-5 padTop-5">
        <Container className="pt-5">
          <Card className="text-center p-4 shadow-lg w-50 m-auto">
            <div>
              {register ? (
                <RegisterForm
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
          </Card>
        </Container>
      </section>
    </PageLayout>
  );
}
const mapDispatchToProps = {
  login: loginAction,
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
