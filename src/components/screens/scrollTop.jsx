import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
<<<<<<< HEAD
      className={`fixed bottom-28 z-50 right-5 bg-green-300 hover:bg-green-500 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 ${
=======
      className={`fixed bottom-5 z-50 right-5 bg-green-300 hover:bg-green-500 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 ${
>>>>>>> 1428cb6 (developing)
        isVisible ? "block" : "hidden"
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="w-8 h-8" />
    </button>
  );
};

export default ScrollToTopButton;
