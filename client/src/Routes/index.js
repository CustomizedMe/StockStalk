import React from "react";
import { Route } from "react-router-dom";
import Home from "../Component/Home";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <Route path="/" component={Home} />
    </>
  );
};
