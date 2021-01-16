import React, { useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
export default function PageLayout({ children, page }) {
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
        loggedIn={true}
        page={page}
        black={page === "home" ? (black ? true : false) : true}
      />

      <div className="min-vh-100">{children}</div>
      <Footer />
    </>
  );
}
