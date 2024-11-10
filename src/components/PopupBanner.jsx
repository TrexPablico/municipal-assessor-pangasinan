// components/PopupBanner.js
import React from "react";

const PopupBanner = ({ onClose }) => {
  const handleClickOutside = (e) => {
    if (e.target.id === "overlay") onClose(); // Close when clicking outside modal
  };

  return (
    <div
      id="overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleClickOutside}
    >
      <div className="bg-white w-1/2 h-1/2 p-8 relative shadow-lg rounded-md">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Welcome to Our Site!</h2>
        <p className="text-lg">
          This is a banner message to show important information or promotions.
        </p>
        {/* Additional content here if needed */}
      </div>
    </div>
  );
};

export default PopupBanner;
