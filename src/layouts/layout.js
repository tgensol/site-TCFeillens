import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./sections/header";
import NavbarSection from "./sections/navbar-section";
import Footer from "./sections/footer";

const Layout = () => {
  console.log("Hello Layout!");

  return (
    <div className="layout">
      <Header />
      <NavbarSection />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
