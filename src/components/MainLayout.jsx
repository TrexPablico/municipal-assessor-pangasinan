import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  const location = useLocation();

  // Hide Hero on specific routes (resource detail or contact page)
  const hideHero =
    location.pathname.startsWith("/resource/") ||
    location.pathname === "/contact" ||
    location.pathname === "/media" ||
    location.pathname === "/announcements" ||
    location.pathname === "/about";

  return (
    <>
      <Navbar />
      {!hideHero && <Hero />}
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
