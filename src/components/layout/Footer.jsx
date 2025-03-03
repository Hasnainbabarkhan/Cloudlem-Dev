import React from "react";
import { Link } from "react-router-dom";
import Logo from "../lib/assets/logo 2.png";

function Footer() {
  return (
    <footer className="bg-[#F4F4F4] py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <img
              src={Logo}
              alt="Cloudlem Logo"
              className="w-40 mb-4"
            />
            <p className="text-gray-600 text-sm">Leading your business growth</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900">
                  How it works
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-700 hover:text-gray-900">
                  Sign up
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-700 hover:text-gray-900">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resource</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faqs" className="text-gray-700 hover:text-gray-900">
                  FAQ's
                </Link>
              </li>
              <li>
                <Link to="/help-center" className="text-gray-700 hover:text-gray-900">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-700 hover:text-gray-900">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="text-gray-700 hover:text-gray-900">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-700 hover:text-gray-900">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-700 hover:text-gray-900">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-700 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">JOIN OUR COMMUNITY</h4>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-orange-400"
              />
              <button className="px-4 py-2 bg-orange-500 text-white rounded-r-md hover:bg-orange-600">
                ➔
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <hr className="border-[#444444] mb-4" />
          <p className="text-gray-600 text-sm">
            Copyright © Cloudlem. All rights reserved 
          </p>
<<<<<<< HEAD
=======
          <p className="text-gray-600 text-sm">Developed by Hasnain babar</p>
>>>>>>> 1428cb6 (developing)
        </div>
      </div>
    </footer>
  );
}

export default Footer;
