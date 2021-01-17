import * as authApi from "../Api/AuthApi";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";

export const loginAction = (user) => (dispatch) => {
  console.log(user);
  authApi
    .loginUser(user)
    .then((data) => {
      console.log(data);
      const token = data.token;
      dispatch({ type: LOGIN_SUCCESS, payload: token });
    })
    .catch((err) => {
      console.log(err);
      alert("some error");
    });
};

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
};
