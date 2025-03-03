import React from "react";
import { Link } from "react-router-dom";
import Logo from "../lib/assets/logo 2.png";

function Navbar() {
  return (
    <>
      <div className="w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex items-center justify-between h-24">
            <img src={Logo} alt="Logo" className="w-[155px]" />
            <div className="hidden md:flex space-x-20">
              {" "}
              <Link to="/" className="text-black text-lg hover: half-underline">
                Home
              </Link>
<<<<<<< HEAD
              <Link to="/about" className="text-black text-lg hover: half-underline">
=======
              <Link to="/About" className="text-black text-lg hover: half-underline">
>>>>>>> 1428cb6 (developing)
                About Us
              </Link>
              <Link
                to="/services"
                className="text-black text-lg hover: half-underline"
              >
                Services
              </Link>
              <Link to="/blogs" className="text-black text-lg hover: half-underline">
                Blogs
              </Link>
            </div>
            <button className="border-2 border-[#ef6603] rounded-md text-white bg-[#ef6603] text-sm font-semibold tracking-wide transition duration-300 ease-in-out hover:bg-transparent hover:text-[#ef6603] px-4 py-2">
              Contact us
            </button>
            <div className="md:hidden flex items-center">
              <button className="text-black focus:outline-none">&#9776;</button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-24" />
    </>
  );
}

export default Navbar;


