import React from "react";
import classNames from "classnames";
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  NavItem,
  Nav,
  Container,
  Modal,
  NavbarToggler,
  ModalHeader,
} from "reactstrap";

const NavBar = (props) => {
  return (
    <>
      <Navbar className={classNames("navbar-absolute")} expand='lg'>
        <Container fluid>
          <NavbarBrand href='/'>StockStalk</NavbarBrand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
