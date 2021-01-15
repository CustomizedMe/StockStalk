import React from "react";
import { Route } from "react-router-dom";
import Home from "../Component/Home";
import Register from "../Component/Register";
export default function AppRoute() {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route exact path='/enter' component={Register} />
      {/* <Route path = "/login" component = {Login}/> */}
    </>
  );
}
