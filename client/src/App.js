import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppRoute from "./Routes";
import { Provider } from "react-redux";
import store from "./Store";
import "./App.css";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppRoute />
        {/* <Switch>
          <AppRoute />
        </Switch> */}
      </Router>
    </Provider>
  );
};
//console.log("Running");
export default App;
