import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate(); 

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent px-6 py-24 sm:py-32">
      <div className="text-center">
        <p className="text-2xl font-semibold text-[#ef6604]">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <p className="mt-2 text-base leading-7 text-gray-600">
          We're sorry for the inconvenience!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={goBack}
            className="border-2 border-[#ef6603] rounded-md text-white bg-[#ef6604] text-sm font-semibold tracking-wide transition duration-300 ease-in-out hover:bg-transparent hover:text-[#ef6603] px-4 py-2"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
<<<<<<< HEAD
=======

>>>>>>> 1428cb6 (developing)
