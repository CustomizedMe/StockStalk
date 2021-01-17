import React, { useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { connect } from "react-redux";
import { logoutAction } from "../../Action/AuthAction";
function PageLayout({ children, page, loggedIn, logout, history }) {
  const [black, setBlack] = useState(page === "home" && window.scrollY <= 200);
  // const
  window.onscroll = () => {
    const scy = window.scrollY;
    if (scy <= 200) {
      setBlack(false);
    } else {
      setBlack(true);
    }
  };
  return (
    <>
      <NavBar
        loggedIn={loggedIn}
        page={page}
        black={page === "home" ? (black ? true : false) : true}
        logout={logout}
      />

      <div className="min-vh-100">{children}</div>
      <Footer />
    </>
  );
}
const mapDispatchToProps = {
  logout: logoutAction,
};
const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);
