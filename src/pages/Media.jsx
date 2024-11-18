import React from "react";
import Slider from "react-slick";
import sampleImage from "../assets/Media/sampol.jpg"; // Replace with your actual image path
import RecentNews from "../components/RecentNews";

const Media = () => {
  const mediaItems = [
    {
      id: 1,
      title: "Sample Title 1",
      description: "This is a brief description for media item 1.",
      date: "March 20, 2024",
      image: sampleImage,
    },
    {
      id: 2,
      title: "Sample Title 2",
      description: "This is a brief description for media item 2.",
      date: "February 9, 2024",
      image: sampleImage,
    },
    {
      id: 3,
      title: "Sample Title 3",
      description: "This is a brief description for media item 3.",
      date: "December 11, 2023",
      image: sampleImage,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <section className="py-16 bg-slate-200">
        <div className="w-4/5 m-auto">
          <h1 className="text-3xl font-bold text-center mb-8 font-Quicksand">
            Media Gallery
          </h1>
          <div className="max-w-[700px] mx-auto">
            {" "}
            {/* Added wrapper for fixed width */}
            <Slider {...settings}>
              {mediaItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-white rounded-lg shadow-lg text-center"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[350px] lg:h-[650px] object-cover justify-center object-center rounded-md mb-4"
                  />
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                  <p className="text-gray-400 text-sm mt-4">{item.date}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <RecentNews />
    </>
  );
};

export default Media;
