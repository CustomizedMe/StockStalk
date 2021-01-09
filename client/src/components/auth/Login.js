import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import { setAlert } from "../../actions/alert";
import { login } from "../../actions/auth";

import {
  Button,
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  CardHeader,
} from "reactstrap";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
  };
  if (isAuthenticated) {
    return <Redirect to='/market' />;
  }
  return (
    <div
      className='content'
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        flexDirection: " column",
      }}
    >
      <Card style={{ width: "25rem", margin: "auto", padding: "30px" }}>
        <CardHeader style={{ textAlign: "center" }}>
          <h2>Login</h2>
        </CardHeader>
        <Form onSubmit={(e) => onSubmit(e)}>
          <FormGroup>
            <Label for='username'>Username</Label>
            <Input
              type='text'
              name='username'
              id='username'
              placeholder='Enter your username'
              value={username}
              onChange={(e) => onChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for='Password'>Password</Label>
            <Input
              type='password'
              name='password'
              id='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => onChange(e)}
            />
          </FormGroup>
          <div className='button-container'>
            <Button
              className='btn-fill'
              size='large'
              color='primary'
              type='submit'
              block
            >
              Login
            </Button>
          </div>
        </Form>

        <p className='text-center'>
          {" "}
          New to StockStalk?
          <strong>
            {" "}
            <Link to='/register'>Register</Link>
          </strong>{" "}
        </p>
      </Card>
    </div>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
