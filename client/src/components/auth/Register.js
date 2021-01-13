import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

import {
  Button,
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  CardHeader,
} from "reactstrap";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { username, name, email, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  //console.log(username);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ username, name, email, password });
    }
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
          <h2>Register</h2>
        </CardHeader>
        <Form onSubmit={(e) => onSubmit(e)}>
          <FormGroup>
            <Label for='username'>Username</Label>
            <Input
              type='text'
              name='username'
              id='username'
              placeholder='Choose a username for you'
              value={username}
              onChange={(e) => onChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for='name'>Full Name</Label>
            <Input
              type='text'
              name='name'
              id='name'
              placeholder='What do people call you?'
              value={name}
              onChange={(e) => onChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for='Email'>Email</Label>
            <Input
              type='email'
              name='email'
              id='email'
              placeholder='Where do you get your emails?'
              value={email}
              onChange={(e) => onChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for='Password'>Password</Label>
            <Input
              type='password'
              name='password'
              id='password'
              placeholder='Choose a password'
              value={password}
              onChange={(e) => onChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for='Password2'>Confirm Password</Label>
            <Input
              type='password'
              name='password2'
              id='password2'
              placeholder='Re-enter the password'
              value={password2}
              onChange={(e) => onChange(e)}
            />
          </FormGroup>
          <Button
            className='button-container'
            /*className='btn-fill'*/
            size='large'
            color='primary'
            type='submit'
            block
          >
            Submit
          </Button>
        </Form>

        <p className='text-center'>
          {" "}
          Already have an account with StockStalk?
          <strong>
            {" "}
            <Link to='/login'>Login</Link>
          </strong>{" "}
        </p>
      </Card>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
