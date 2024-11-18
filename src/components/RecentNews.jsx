import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import cover1 from "../assets/Resources/Capture1.JPG";
import cover2 from "../assets/Resources/Capture2.JPG";
import cover3 from "../assets/Resources/Capture3.JPG";

const RecentNews = () => {
  const navigate = useNavigate();

  const resource = [
    {
      id: 1,
      cover: cover1,
      title: "Tax Mapping Activities 2023-2024",
      description:
        "Collaborative efforts by & between NIA Region 1 and Assessor Aguilar",
      date: "March 20, 2024",
    },
    {
      id: 2,
      cover: cover2,
      title: "Monthly Meeting",
      description:
        "DILG Aguilar field office, MLGOO Norberto L. Macaraeg Jr.   &   16 Barangay Secretaries",
      date: "February 9, 2024",
    },
    {
      id: 3,
      cover: cover3,
      title: "Tax Mapping Activity",
      description:
        "Office of the Municipal Assessor Tax Mapping Activity (Nov 30 - Dec 7)",
      date: "December 11,2023",
    },
  ];

  const handleCardClick = (id) => {
    navigate(`/resource/${id}`);
  };

  const handleSeeMoreClick = () => {
    navigate("/blogs"); // Navigate to a dedicated blogs page
  };

  return (
    <section className="py-16 bg-slate-200">
      <div className="w-4/5 m-auto">
        <div className="mb-16">
          <h1 className="text-3xl font-semibold font-Quicksand">
            Recent Posts
          </h1>
          <span className="text-sm mt-2 block">
            Office of the Municipal Asssesssor
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resource.map((item) => (
            <div
              key={item.id}
              className="box rounded-lg shadow-shadow1 bg-white cursor-pointer"
              onClick={() => handleCardClick(item.id)}
            >
              <div className="images rounded-t-lg relative overflow-hidden h-50 w-full">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="rounded-t-lg object-cover w-full h-full"
                />
                <div className="categ flex gap-4 absolute top-0 m-3"></div>
              </div>
              <div className="text p-3 bg-white">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FaBook />
                    <span className="text-[14px] ml-2">
                      Reading/Video Lessons
                    </span>
                  </div>
                </div>
                <h3 className="text-black my-4 font-bold">{item.title}</h3>
                <h4 className="text-gray-700 my-4 font-semibold">
                  {item.description}
                </h4>
                <h5 className="text-end font-extralight">{item.date}</h5>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={handleSeeMoreClick}
            className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-400 transition"
          >
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
