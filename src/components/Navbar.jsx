import React, { useState, useEffect } from "react";
import logo from "../assets/Navbar/hc.png";
import { LuContact } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import PopupBanner from "./PopupBanner";
import sample from "../assets/Navbar/sample.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [eClassroomOpen, setEClassroomOpen] = useState(false);
  const [time, setTime] = useState("");
  const [bannerVisible, setBannerVisible] = useState(true); // New state for banner

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const toggleEClassroom = () => {
    setEClassroomOpen(!eClassroomOpen);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeOptions = {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      const dateOptions = {
        timeZone: "Asia/Manila",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const philippineTime = now.toLocaleTimeString("en-US", timeOptions);
      const philippineDate = now.toLocaleDateString("en-US", dateOptions);
      setTime(`${philippineDate} - ${philippineTime}`);
    }, 1000);

    // Check if banner has been dismissed previously
    const isDismissed = localStorage.getItem("bannerDismissed");
    if (isDismissed) setBannerVisible(false);

    return () => clearInterval(intervalId);
  }, []);

  const handleClose = () => {
    setBannerVisible(false);
    localStorage.setItem("bannerDismissed", "true"); // Remember dismissal
  };

  return (
    <header className="bg-red-600 py-4 text-white sticky z-50 shadow-md top-0 left-0 w-full">
      {/* Popup Banner */}
      {bannerVisible && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
          onClick={handleClose} // Close banner on clicking outside
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()} // Prevent close on clicking inside the banner
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Welcome to Our Website!</h2>
              <button onClick={handleClose} className="text-red-600 font-bold">
                X
              </button>
            </div>
            <p className="text-black">
              Here’s some important announcements. Click "X" or outside this box
              to close.
            </p>
            <img src={sample} alt="" />
          </div>
        </div>
      )}

      <div className="container flex justify-between items-center">
        {/* Logo - 1/3 of Navbar */}
        <div className="w-1/3 flex justify-center items-center">
          <img src={logo} alt="logo" className="h-[70px]" />
        </div>

        {/* Navigation links - 1/3 of Navbar */}
        <div className="w-1/3 justify-center items-center gap-6 font-bold hidden md:flex">
          <Link to="/" className="hover:text-blue-600 transition duration-300">
            Home
          </Link>
          <Link
            to="/announcements"
            className="hover:text-blue-600 transition duration-300"
          >
            Announcements
          </Link>
          <Link to="/" className="hover:text-blue-600 transition duration-300">
            Media Gallery
          </Link>
          <Link to="/" className="hover:text-blue-600 transition duration-300">
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-600 transition duration-300"
          >
            Contact
          </Link>
        </div>
        {/* Philippine Date and Time - 1/3 of Navbar */}
        <div className="w-1/3 text-center text-[11px]">
          Philippine Standard Time:
          <br />
          {time}
        </div>

        {/* Menu icon for small screens */}
        {dropdown ? (
          <div
            onClick={showDropdown}
            className="lg:hidden md:hidden text-[22px] cursor-pointer text-black mr-5"
          >
            <MdClose />
          </div>
        ) : (
          <div
            onClick={showDropdown}
            className="lg:hidden md:hidden text-[22px] cursor-pointer text-black mr-5"
          >
            <HiMenuAlt3 />
          </div>
        )}
      </div>

      <div
        className={`lg:hidden w-full fixed top-24 bg-gray transition-all duration-300 ${
          dropdown ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </header>
  );
};

export default Navbar;
