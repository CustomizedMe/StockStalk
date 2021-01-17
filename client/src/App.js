import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/scss/black-dashboard-react.scss";
import "./assets/css/nucleo-icons.css";
import AdminNavbar from "./components/layouts/AdminNavbar";
//import NavBar from "./components/layouts/NavBar";
import Landing from "./components/layouts/Landing";
import Footer from "./components/layouts/Footer";
import Register from "./components/auth/Register";
import UserProfile from "./components/Profile/UserProfile";
import ProfileForm from "./components/Profile/ProfileForm";
import Login from "./components/auth/Login";
import Alerts from "./components/layouts/Alert";
import Market from "./components/market/Market";
import PrivateRoute from "./components/routing/PrivateRoute";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    /* window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });*/
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <AdminNavbar />
          <Alerts />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/profile' component={UserProfile} />
            <PrivateRoute path='/profileform' component={ProfileForm} />
            <PrivateRoute path='/market' component={Market} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};
//console.log("Running");
export default App;
