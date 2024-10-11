import React from "react";
import { Link } from "react-router-dom";
import { FaBell, FaGem, FaUserCircle } from "react-icons/fa";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

function Navbar() {
  return (
    <nav className="bg-white p-4 pl-32 pr-32 flex justify-between items-center">
      <div className="flex space-x-4">
        {/* Left Side Links */}
        <Link to="/" className=" text-base hover:text-gray-600">
          Explore
        </Link>
        <Link to="/problems" className=" text-base hover:text-gray-600">
          Problems
        </Link>
        <Link to="/discuss" className=" text-base hover:text-gray-600">
          Discuss
        </Link>
        <Link to="/interview-prep" className=" text-base hover:text-gray-600">
          Interview Prep
        </Link>
        <Link to="/store" className=" text-base hover:text-gray-600">
          Forum
        </Link>
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
