import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Component/Home";
import Register from "../Component/Register";
import Profile from "../Component/Profile";
import EditProfile from "../Component/EditProfile/";
import Market from "../Component/Market";
import Faqs from "../Component/FAQs";
import Compare from "../Component/Compare";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Component/NotFound";
export default function AppRoute() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/enter" component={Register} />
        <Route path="/faqs" component={Faqs} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/editProfile" component={EditProfile} />
        <PrivateRoute path="/market" component={Market} />
        <PrivateRoute path="/compare" component={Compare} />
        <Route
          // path="" component={NotFound}
          component={NotFound}
        />
      </Switch>
    </>
  );
}
