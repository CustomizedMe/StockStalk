import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
export default function index({ children }) {
  return (
    <>
      <NavBar />
      <div className="min-vh-100">{children}</div>
      <Footer />
    </>
  );
}
