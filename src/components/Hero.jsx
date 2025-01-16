import React from "react";
import p2 from "../assets/Hero/hero4.png";
import p1 from "../assets/Hero/herobg.png";
import p3 from "../assets/Hero/hero5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [p1, p2, p3];

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="relative w-full max-w-screen-lg h-full">
        {/* Carousel Background */}
        <Slider {...settings} className="absolute inset-0 w-full h-full mt-8">
          {images.map((image, index) => (
            <div key={index} className="w-full h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
