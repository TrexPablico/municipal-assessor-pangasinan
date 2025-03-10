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

    setBannerVisible(true);

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
            className="bg-white p-6 md:p-6 p-4 rounded-lg shadow-lg max-w-md w-full mx-4 relative text-center justify-center md:ml-0 ml-4"
            onClick={(e) => e.stopPropagation()} // Prevent close on clicking inside the banner
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-red-600 font-bold"
            >
              X
            </button>
            <h2 className="text-lg md:text-lg text-md font-bold mb-4">
              Announcements!
            </h2>
            <p className="mb-4 text-red-600 text-3xl md:text-3xl text-xl font-bold">
              List of Delinquent Owners
            </p>
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

      <div className="container flex justify-between items-center lg:ml-[150px] md:ml-[110px]">
        {/* Logo */}
        <div className="w-1/3 flex justify-center items-center">
          <img src={logo} alt="logo" className="h-[70px]" />
          <div className="px-3 hidden md:flex">
            <h1>
              Municipal Assessor <br />{" "}
              <span className="text-2xl">Aguilar Pangasinan</span>
            </h1>
          </div>
        </div>

        {/* Navigation links */}
        <div className="w-1/3 justify-center items-center gap-6 font-bold hidden lg:flex">
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
          <Link
            to="/about"
            className="hover:text-blue-600 transition duration-300"
          >
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
        <div className="w-1/3 text-center text-[11px] lg:mr-0 mr-11">
          Philippine Standard Time:
          <br />
          {time}
        </div>

        {/* Menu icon for small screens */}
        {dropdown ? (
          <div
            onClick={showDropdown}
            className="lg:hidden text-[22px] cursor-pointer text-black mr-5"
          >
            <MdClose className="text-white" />
          </div>
        ) : (
          <div
            onClick={showDropdown}
            className="lg:hidden text-[22px] cursor-pointer text-black mr-5"
          >
            <HiMenuAlt3 className="text-white" />
          </div>
        )}
      </div>

      <div
        className={`lg:hidden fixed top-24 left-0 bg-white w-full z-40 shadow-lg transition-all duration-300 ${
          dropdown ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col gap-4 py-6 px-4 text-black">
          <li>
            <Link
              to="/"
              className="block text-center text-lg font-semibold hover:text-blue-600 transition duration-300"
              onClick={() => setDropdown(false)} // Close dropdown on click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/announcements"
              className="block text-center text-lg font-semibold hover:text-blue-600 transition duration-300"
              onClick={() => setDropdown(false)}
            >
              Announcements
            </Link>
          </li>
          <li>
            <Link
              to="/media"
              className="block text-center text-lg font-semibold hover:text-blue-600 transition duration-300"
              onClick={() => setDropdown(false)}
            >
              Media Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="block text-center text-lg font-semibold hover:text-blue-600 transition duration-300"
              onClick={() => setDropdown(false)}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-center text-lg font-semibold hover:text-blue-600 transition duration-300"
              onClick={() => setDropdown(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-center text-lg font-semibold hover:text-blue-600 transition duration-300"
              onClick={() => setDropdown(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
