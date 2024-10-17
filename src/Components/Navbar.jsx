import React from "react";
import { Link } from "react-router-dom";
import { FaBell, FaGem, FaUserCircle } from "react-icons/fa";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

function Navbar() {
  return (
    <nav className="bg-white/30 backdrop-blur sticky top-0 p-4 pl-32 pr-32 shadow-sm flex justify-between items-center z-50">
      <div className="flex flex-row gap-8">
        {/* Left Side Links */}
        <Link to="/" className=" text-base hover:text-gray-600">
          Explore
        </Link>
        {/* <Link to="/problems" className=" text-base hover:text-gray-600">
          Problems
        </Link>
        <Link to="/discuss" className=" text-base hover:text-gray-600">
          Discuss
        </Link> */}
        <Link to="/interview-prep" className=" text-base hover:text-gray-600">
          Interview Prep
        </Link>
        <Link to="/resumecheck" className=" text-base hover:text-gray-600">
          Resume Check
        </Link>
        {/* <Link to="/store" className=" text-base hover:text-gray-600">
          Forum
        </Link> */}
      </div>

      <div className="flex items-center space-x-4">
        {/* Right Side Icons */}
        <FaBell className="text-xl hover:text-gray-600 cursor-pointer" />
        <FaGem className="text-xl hover:text-gray-600 cursor-pointer" />

        <div className="flex items-center space-x-4">
          <Profile />
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
