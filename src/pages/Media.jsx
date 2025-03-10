import React from "react";
import Slider from "react-slick";
import media1 from "../assets/Media/m1.jpg";
import media2 from "../assets/Media/m2.jpg";
import media3 from "../assets/Media/m3.jpg";
import media4 from "../assets/Media/m4.jpg";
import media5 from "../assets/Media/m5.jpg";
import media6 from "../assets/Media/m6.jpg";
import media7 from "../assets/Media/m7.jpg";
import media8 from "../assets/Media/m8.jpg";
import media9 from "../assets/Media/m9.mp4";
import media10 from "../assets/Media/m10.mp4";
import RecentNews from "../components/RecentNews";

const Media = () => {
  const mediaItems = [
    {
      id: 1,
      title: "",
      description: "",
      date: "March 20, 2024",
      image: media1,
    },
    {
      id: 2,
      title: "",
      description: "",
      date: "February 9, 2024",
      image: media2,
    },
    {
      id: 3,
      title: "",
      description: "",
      date: "December 11, 2023",
      image: media3,
    },
    {
      id: 4,
      title: "",
      description: "",
      date: "October 21, 2022",
      image: media4,
    },
    {
      id: 5,
      title: "",
      description: "",
      date: "October 21, 2022",
      image: media5,
    },
    {
      id: 6,
      title: "",
      description: "",
      date: "October 21, 2022",
      image: media6,
    },
    {
      id: 7,
      title: "",
      description: "",
      date: "October 21, 2022",
      image: media7,
    },
    {
      id: 8,
      title: "",
      description: "",
      date: "October 21, 2022",
      image: media8,
    },
    {
      id: 9,
      title: "",
      description: "",
      date: "October 21, 2022",
      image: media9,
    },
    {
      id: 10,
      title: "",
      description: "",
      date: "October 21, 2022",
      image: media10,
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
            <Slider {...settings}>
              {mediaItems
                .slice()
                .reverse()
                .map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white rounded-lg shadow-lg text-center"
                  >
                    {item.image.endsWith(".mp4") ? (
                      <video
                        controls
                        className="w-full h-[350px] lg:h-[650px] object-cover justify-center object-center rounded-md mb-4"
                      >
                        <source src={item.image} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[350px] lg:h-[650px] object-cover justify-center object-center rounded-md mb-4"
                      />
                    )}
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
