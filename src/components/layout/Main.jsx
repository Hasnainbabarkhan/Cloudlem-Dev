import React, { useState, useEffect } from "react";
import sliderOne from "../lib/assets/sllider1.png";
import sliderTwo from "../lib/assets/slider2.png";
import sliderThree from "../lib/assets/slider3.png";

const slides = [
  { imgPath: sliderOne },
  { imgPath: sliderTwo },
  { imgPath: sliderThree },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="container mx-auto px-4 text-center relative"> {/* Adjust max-w to match About component */}
      {/* Slides */}
      <div className="overflow-hidden -mt-20"> {/* Fixed height */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0"> {/* Ensure each slide takes full width and height */}
              <img
                src={slide.imgPath}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover" // Ensure image fills the container
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full border-2 border-orange-500 ${
              activeIndex === index ? "bg-orange-500" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
