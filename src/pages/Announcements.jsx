import React from "react";
import RecentNews from "../components/RecentNews";

const announcements = [
  {
    id: 1,
    title: "Announcement #1",
    date: "November 15, 2024",
    coverPhoto: "https://via.placeholder.com/300x200", // Replace with your image URL
  },
  {
    id: 2,
    title: "Announcement #2",
    date: "November 20, 2024",
    coverPhoto: "https://via.placeholder.com/300x200", // Replace with your image URL
  },
];

const Announcements = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center py-6">
          News & Announcements
        </h1>
        <div className="max-w-3xl mx-auto p-4 space-y-6 cursor-pointer">
          {announcements.map((news) => (
            <div
              key={news.id}
              className="bg-white shadow-md rounded-lg overflow-hidden border"
            >
              <img
                src={news.coverPhoto}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {news.title}
                </h2>
                <p className="text-sm text-gray-500">Posted on: {news.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <RecentNews />
    </>
  );
};

export default Announcements;
