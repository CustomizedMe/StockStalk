import React from "react";
import { Route } from "react-router-dom";
import Home from "../Component/Home";
import Register from "../Component/Register";
import Profile from "../Component/Profile";
import EditProfile from "../Component/EditProfile/";
import Market from "../Component/Market";
import Faqs from "../Component/Faqs";

export default function AppRoute() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/enter" component={Register} />
      <Route path="/profile" component={Profile} />
      <Route path="/editProfile" component={EditProfile} />
      <Route path="/market" component={Market} />
      <Route path="/faqs" component={Faqs} />
    </>
  );
}
