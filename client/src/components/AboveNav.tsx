import React from "react";
import { Link } from "react-router-dom";

const AboveNav: React.FC = () => {
  return (
    <div className="bg-[#004d3d] text-white text-sm px-4 py-2">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Left Side Text */}
        <p className="text-xs sm:text-sm">Free COD Delivery Across India</p>

        {/* Right Side Links */}
        <div className="space-x-4 text-xs sm:text-sm">
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          <Link to="/partner"className="text-white hover:text-beige px-4 py-2 transition-colors duration-300">
           Partner With Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboveNav;
