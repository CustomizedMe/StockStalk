import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://www.creative-tim.com/?ref=bdr-user-archive-footer">
              Creative Tim
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.creative-tim.com/presentation?ref=bdr-user-archive-footer">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.creative-tim.com/blog?ref=bdr-user-archive-footer">
              Blog
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a href='https://github.com/CustomizedMe'>
            Prakhar Bhatnagar
          </a>{" "}
          for everyone
        </div>
      </Container>
    </footer>
  );
}

export default Footer;