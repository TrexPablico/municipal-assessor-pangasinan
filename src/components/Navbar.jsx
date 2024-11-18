import React, { useState, useEffect } from "react";
import logo from "../assets/Navbar/hc.png";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import Slider from "react-slick";
import a1 from "../assets/Navbar/a1.jpg";
import a2 from "../assets/Navbar/a2.jpg";
import a3 from "../assets/Navbar/a3.jpg";
import a4 from "../assets/Navbar/a4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [time, setTime] = useState("");
  const [bannerVisible, setBannerVisible] = useState(true);

  const showDropdown = () => {
    setDropdown(!dropdown);
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

    const isDismissed = localStorage.getItem("bannerDismissed");
    if (isDismissed) setBannerVisible(false);

    return () => clearInterval(intervalId);
  }, []);

  const handleClose = () => {
    setBannerVisible(false);
    localStorage.setItem("bannerDismissed", "true");
  };

  const images = [a1, a2, a3, a4];
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
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
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()} // Prevent close on clicking inside the banner
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-red-600 font-bold"
            >
              X
            </button>
            <h2 className="text-lg font-bold mb-4">Announcements!</h2>
            <p className="text-black mb-4"></p>
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={image}
                    alt={`Announcement ${index + 1}`}
                    className="w-full rounded-md"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}

      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="w-1/3 flex justify-center items-center">
          <img src={logo} alt="logo" className="h-[70px]" />
        </div>

        {/* Navigation links */}
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
          <Link
            to="/media"
            className="hover:text-blue-600 transition duration-300"
          >
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

        {/* Philippine Date and Time */}
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
