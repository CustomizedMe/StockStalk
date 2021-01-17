import { LOGIN_SUCCESS, LOGOUT } from "../Action/types";
import initialState from "../InitialState";

export const AuthReducer = (state = initialState.loggedIn, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload);
      return action.payload;
    case LOGOUT:
      return false;
    default:
      return state;
  }
};
