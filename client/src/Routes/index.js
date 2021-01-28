import React from "react";
import { Route } from "react-router-dom";
import Home from "../Component/Home";
import Register from "../Component/Register";
import Profile from "../Component/Profile";
import EditProfile from "../Component/EditProfile/";
import Market from "../Component/Market";
import Faqs from "../Component/FAQs";
import Compare from "../Component/Compare";
import PrivateRoute from "./PrivateRoute";
export default function AppRoute() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/enter" component={Register} />
      <Route exact path="/faqs" component={Faqs} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute exact path="/editProfile" component={EditProfile} />
      <PrivateRoute exact path="/market" component={Market} />
      <PrivateRoute exact path="/compare" component={Compare} />
    </>
  );
}
