import React, { useState } from "react";

// Mock data for the reviews
const reviews = [
  {
    name: "Jonh V. Bellamy",
    role: "Founder And CEO Of The Company",
    image: "https://randomuser.me/api/portraits/men/11.jpg", // Placeholder image
    review:
      "Over the years, DevOps Prodigy has consistently resolved potential emergencies for the agency. The team leveraged their technical knowledge and skills to execute well. Once they receive the requirements, they're able to work near independently.",
  },
  {
    name: "Sarah T. Connor",
    role: "Head of Operations",
    image: "https://randomuser.me/api/portraits/women/21.jpg", // Placeholder image
    review:
      "Working with DevOps Prodigy was fantastic. The team exceeded our expectations in delivering solutions on time and within budget. We highly recommend them!",
  },
  // Add more reviews as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    // Outer div that takes the full width and has background color
    <div className="w-full bg-[#F4F4F4]">
      {/* Centered container inside with fixed max-width */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-4xl text-center mb-6">
          Client <span className="text-orange-500 font-semibold">Reviews</span>
        </h2>
        <h3 className="text-2xl text-center text-black-600 mb-6 mt-16">
          A Word From Our Customer
        </h3>
        <p className="text-center text-black-600 text-lg mb-12">
          We’ve been helping businesses to do their best since 2020.
        </p>

        <div className="relative flex items-center justify-center">
          {/* Review Card */}
          <div className="bg-green-900 shadow-lg rounded-lg p-8 text-center max-w-3xl">
            <p className="text-white text-lg mb-6 leading-relaxed">
              {reviews[currentIndex].review}
            </p>

            <div className="flex justify-center items-center mb-4">
              <img
                src={reviews[currentIndex].image}
                alt={reviews[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <h4 className="mt-2 font-semibold text-lg">{reviews[currentIndex].name}</h4>
            <p className="text-white">{reviews[currentIndex].role}</p>

            {/* Static Rating Stars */}
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 01.69.482l2.205 5.763 6.026.439a.75.75 0 01.434 1.307l-4.579 4.034 1.471 5.828a.75.75 0 01-1.137.8L12 17.302l-5.11 3.602a.75.75 0 01-1.137-.8l1.47-5.828-4.578-4.034a.75.75 0 01.434-1.307l6.026-.439 2.205-5.763A.75.75 0 0112 2.25zm0 1.858L9.986 9.53a.75.75 0 01-.65.462l-5.277.384 4.002 3.526a.75.75 0 01.233.732l-1.2 4.755 4.168-2.938a.75.75 0 01.847 0l4.167 2.938-1.2-4.755a.75.75 0 01.233-.732l4.002-3.526-5.277-.384a.75.75 0 01-.65-.462L12 4.108z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 text-orange-500 hover:text-orange-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 text-orange-500 hover:text-orange-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 19.5l7.5-7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
