import { LOGIN_SUCCESS,LOGOUT } from "./types";

export const loginAction = (data) => (dispatch) => {
  dispatch({ type: LOGIN_SUCCESS, payload: data });
};

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
};
