<<<<<<< HEAD
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";

export const loginAction = (data) => (dispatch) => {
  // console.log(user);
=======
import { LOGIN_SUCCESS,LOGOUT } from "./types";

export const loginAction = (data) => (dispatch) => {
>>>>>>> jan21
  dispatch({ type: LOGIN_SUCCESS, payload: data });
};

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
};
