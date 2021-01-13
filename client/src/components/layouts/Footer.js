import React from "react";

// reactstrap components
import { Container, Nav, NavItem } from "reactstrap";

function Footer() {
  return (
    <div
      style={{ textAlign: "center", marginBottom: "20px", marginTop: "20px" }}
    >
      © {new Date().getFullYear()} made with{" "}
      <i className='tim-icons icon-heart-2' /> by{" "}
      <a href='https://github.com/CustomizedMe'>Prakhar Bhatnagar</a> for
      everyone
    </div>
  );
}

export default Footer;
