import React, { useState } from "react";
import { connect } from "react-redux";
import { loginAction } from "../../Action/AuthAction";
import PageLayout from "../../Layout/PageLayout";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { registerUser } from "../../Api/AuthApi";
function Register({ login }) {
  const [register, setRegister] = useState(true);
  const [formDetails, setFormDetails] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    name: "",
    email: "",
  });
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
    console.log(loginData);
    login(loginData);
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
                  toggleRegister={() => setRegister(false)}
                  onSubmit={onRegisterSubmit}
                  registerDetails={formDetails}
                  onChange={onChange}
                />
              ) : (
                <LoginForm
                  toggleRegister={() => setRegister(true)}
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
