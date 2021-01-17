import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//ReactStrap
import classNames from "classnames";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  UncontrolledDropdown,
  Navbar,
  NavLink,
  NavItem,
  Nav,
  Container,
} from "reactstrap";
//Logout
import { logout } from "../../actions/auth";

const AdminNavbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const logged = (
    <Nav
      className='ml-auto'
      navbar
      style={{ alignItems: "center", color: "textcolor" }}
    >
      <NavItem>
        <Link to='/'>Market</Link>
      </NavItem>
      <NavItem>
        <Link to='/compare'>Compare</Link>
      </NavItem>
      <NavItem>
        <Link to='#'>FAQs</Link>
      </NavItem>
      <Form>
        <FormGroup>
          <div class='input-group'>
            <i class='fa fa-search'></i>
            <input
              type='text'
              class='form-control'
              id='company'
              placeholder='Search Company'
            ></input>
          </div>
        </FormGroup>
      </Form>
      <UncontrolledDropdown nav>
        <DropdownToggle
          caret
          color='default'
          nav
          onClick={(e) => e.preventDefault()}
        >
          <div className='photo'>
            <img
              alt='...'
              src={require("./../../assets/img/anime3.png").default}
            />
          </div>
          <b className='caret d-none d-lg-block d-xl-block' />
          <p className='d-lg-none'></p>
        </DropdownToggle>
        <DropdownMenu className='dropdown-navbar' right tag='ul'>
          <NavLink tag='li'>
            <DropdownItem className='text-muted'>
              <Link to='/profile' className='text-muted'>
                Profile
              </Link>
            </DropdownItem>
          </NavLink>
          <DropdownItem divider tag='li' />
          <NavLink tag='li'>
            <DropdownItem className='text-warning'>
              <Link to='/' onClick={logout} className='text-muted'>
                Log out
              </Link>
            </DropdownItem>
          </NavLink>
        </DropdownMenu>
      </UncontrolledDropdown>
      <li className='separator d-lg-none' />
    </Nav>
  );
  //if User is not logged in
  const guest = (
    <Nav className='ml-auto' navbar style={{ alignItems: "center" }}>
      <NavItem>
        <Link to='/'>Market</Link>
      </NavItem>
      <NavItem>
        <Link to='/register'>Login/Register</Link>
      </NavItem>
      <NavItem>
        <Link to='#'>FAQs</Link>
      </NavItem>
      <li className='separator d-lg-none' />
    </Nav>
  );

  //const [color, setcolor] = React.useState("navbar-transparent");
  /*React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 800) {
      setcolor("bg-white");
    } else {
      setcolor("navbar-transparent");
    }
  };*/
  return (
    <Navbar className={classNames("navbar") /*,color*/} expand='lg'>
      <Container fluid>
        <div className='navbar-wrapper'>
          <Link to='/' style={{ fontSize: "1.8em", color: "white" }}>
            StockStalk
          </Link>
        </div>
        {!loading && <Fragment>{isAuthenticated ? logged : guest}</Fragment>}
      </Container>
    </Navbar>
  );
};

AdminNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(AdminNavbar);
