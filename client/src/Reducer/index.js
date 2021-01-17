import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";

const reducer = combineReducers({
  loggedIn: AuthReducer,
});

export default reducer;
