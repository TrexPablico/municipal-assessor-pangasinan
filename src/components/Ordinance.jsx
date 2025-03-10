import React, { useState } from "react";
import Slider from "react-slick";
import img1 from "../assets/Ordinance/img1.jpg";
import img2 from "../assets/Ordinance/img2.jpg";
import img3 from "../assets/Ordinance/img3.jpg";
import img4 from "../assets/Ordinance/img4.jpg";
import img5 from "../assets/Ordinance/img5.jpg";
import img6 from "../assets/Ordinance/img6.jpg";
import img7 from "../assets/Ordinance/img7.jpg";
import img8 from "../assets/Ordinance/img8.jpg";
import img9 from "../assets/Ordinance/img9.jpg";
import img10 from "../assets/Ordinance/img10.jpg";
import img11 from "../assets/Ordinance/img11.jpg";
import img12 from "../assets/Ordinance/img12.jpg";
import img13 from "../assets/Ordinance/img13.jpg";
import img14 from "../assets/Ordinance/img14.jpg";
import img15 from "../assets/Ordinance/img15.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

const Ordinance = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e) => {
    if (e.target.id === "modal-background") {
      closeModal();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-gray-200 flex flex-col md:flex-row items-center p-5 lg:mt-1 mt-[-600px]">
      <div className="md:mb-0 mb-5 text-center md:text-left flex-1 md:mr-5 mx-7 ml-20">
        <h1 className="text-red-500 text-md lg:text-5xl font-bold">
          Provincial Ordinance granting TAX AMNESTY on delinquent real property
          taxes
        </h1>
        <p className="text-black mt-5 lg:text-3xl text-md">
          Pangasinan provincial ordinance granting tax amnesty on interest in
          relation to real property tax
        </p>
      </div>
      <div className="flex justify-center items-center flex-1 ">
        <div className="w-full max-w-screen-md">
          <Slider {...settings} className="w-full">
            {images.map((image, index) => (
              <div key={index} className="w-full h-[700px]">
                <img
                  src={image}
                  alt={`Ordinance ${index + 1}`}
                  className="object-cover lg:w-full cursor-pointer h-[300px] w-[300px]"
                  onClick={() => openModal(image)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {isModalOpen && (
        <div
          id="modal-background"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={handleModalClick}
        >
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 m-4 text-black text-3xl"
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Full Screen"
              className="max-w-screen max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Ordinance;
