import React, { useEffect, useRef } from "react";
import message from "../assets/Contact/message.png";
import email from "../assets/Contact/mail.png";
import phone from "../assets/Contact/phone.png";
import location from "../assets/Contact/location.png";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "wait",
        "template_45u1dxq_zurich",
        form.current,
        "xFX7lbU3Y_kHT7BOV"
      )
      .then(
        () => {
          toast.success("Message Sent", {
            style: {
              background: "orange",
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "orange",
            },
          });
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="max-w-[90%] mx-auto mt-20 mb-20 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="md:w-1/2 text-gray-600">
        <h3 className="text-[#000f38] font-medium text-2xl flex items-center mb-5">
          Send us a Message <img src={message} alt="" className="ml-2 w-9" />
        </h3>
        <p className="max-w-md leading-relaxed">
          We’re here to serve you! Whether you need assistance with property
          assessments, zoning information, or tax inquiries, our dedicated team
          is ready to help.
          <br />
          <br />
          For property owners, let us provide clarity and guidance to ensure
          your assessments are accurate and fair. Share your questions or
          concerns with us—your satisfaction is our priority.
        </p>

        <ul className="space-y-5 mt-5">
          <li className="flex items-center">
            <img src={email} alt="" className="w-6 mr-2" />
            assessoremailsample@gmail.com
          </li>
          <li className="flex items-center">
            <img src={phone} alt="" className="w-6 mr-2" />
          </li>
          <li className="flex items-center">
            <img src={location} alt="" className="w-6 mr-2" />
            Pangasinan Assessors office address
          </li>
        </ul>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0">
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <label className="block font-semibold">Your Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
            className="w-full bg-indigo-100 p-4 rounded focus:outline-none"
          />
          <label className="block font-semibold">Your Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="example@email.com"
            required
            className="w-full bg-indigo-100 p-4 rounded focus:outline-none"
          />
          <label className="block font-semibold">Your Message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
            className="w-full bg-indigo-100 p-4 rounded focus:outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 text-white py-3 px-6 rounded hover:bg-orange-700 transition duration-300"
          >
            Send Message
          </button>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default Contact;
