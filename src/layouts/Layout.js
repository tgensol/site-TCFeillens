import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./sections/Header";
import NavbarSection from "./sections/NavbarSection";
import Footer from "./sections/Footer";

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
