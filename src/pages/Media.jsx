import React from "react";
import Slider from "react-slick";
import sampleImage from "../assets/Media/sampol.jpg";
import media1 from "../assets/Media/m1.jpg";
import media2 from "../assets/Media/m2.jpg";
import media3 from "../assets/Media/m3.jpg";
import media4 from "../assets/Media/m4.jpg";
import media5 from "../assets/Media/m5.jpg";
import media6 from "../assets/Media/m6.jpg";
import media7 from "../assets/Media/m7.jpg";
import media8 from "../assets/Media/m8.jpg";
import RecentNews from "../components/RecentNews";

const Media = () => {
  const mediaItems = [
    {
      id: 1,
      title: "Sample Title 1",
      description: "This is a brief description for media item 1.",
      date: "March 20, 2024",
      image: media1,
    },
    {
      id: 2,
      title: "Sample Title 2",
      description: "This is a brief description for media item 2.",
      date: "February 9, 2024",
      image: media2,
    },
    {
      id: 3,
      title: "Sample Title 3",
      description: "This is a brief description for media item 3.",
      date: "December 11, 2023",
      image: media3,
    },
    {
      id: 4,
      title: "Sample Title 4",
      description: "This is a brief description for media item 4.",
      date: "October 21, 2022",
      image: media4,
    },

    {
      id: 5,
      title: "Sample Title 5",
      description: "This is a brief description for media item 5.",
      date: "October 21, 2022",
      image: media5,
    },
    {
      id: 6,
      title: "Sample Title 6",
      description: "This is a brief description for media item 6.",
      date: "October 21, 2022",
      image: media6,
    },
    {
      id: 7,
      title: "Sample Title 7",
      description: "This is a brief description for media item 7.",
      date: "October 21, 2022",
      image: media7,
    },
    {
      id: 8,
      title: "Sample Title 8",
      description: "This is a brief description for media item 8.",
      date: "October 21, 2022",
      image: media8,
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
