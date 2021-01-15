import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducer from "../Reducer";
//import setAuthToken from './utils/setAuthToken';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  () => {},
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
