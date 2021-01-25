import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";

export const loginAction = (data) => (dispatch) => {
  // console.log(user);
  dispatch({ type: LOGIN_SUCCESS, payload: data });
};

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
};
