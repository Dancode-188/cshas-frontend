import React from "react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import "./Layout.scss";

const Layout = ({ children, isNavOpen, toggleNav }) => {
  return (
    <div className={`app ${isNavOpen ? "nav-open" : ""}`}>
      <Header toggleNav={toggleNav} />
      <Navigation isOpen={isNavOpen} toggleMenu={toggleNav} />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
