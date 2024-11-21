import React from "react";
import { Link } from "react-router-dom";
import img2 from "../lib/assets/card1.png";
import img3 from "../lib/assets/card2.png";
import img4 from "../lib/assets/card3.png";
import img5 from "../lib/assets/card4.png";
import img6 from "../lib/assets/card5.png";
import img7 from "../lib/assets/card6.png";

const services = [
  {
    id: 1,
    title: "DevOps Services",
    description:
      "DevOps is a systematic, automated method for software development and IT operations, focusing on continuous integration, delivery, and efficiency.",
    image: img2,
  },
  {
    id: 2,
    title: "Cloud Consultants",
    description:
      "Cloud Consultants help businesses design, execute, and manage cloud systems to enhance efficiency, flexibility, and safety.",
    image: img3,
  },
  {
    id: 3,
    title: "Web Design & Development",
    description:
      "Transform web development with micro services. Modular, scalable, and agile. Embrace technology diversity, enabling independent updates.",
    image: img4,
  },
  {
    id: 4,
    title: "Cloud Server Management",
    description:
      "Server Management involves the configuration, monitoring, and maintenance of servers to ensure optimal performance, security, and reliability.",
    image: img5,
  },
  {
    id: 5,
    title: "Database Administration",
    description:
      "Database administration encompasses the design, implementation, and maintenance of databases, ensuring efficient data storage, retrieval, and security.",
    image: img6,
  },
  {
    id: 6,
    title: "Cloud Managed Services",
    description:
      "Cloud Managed Services involve outsourcing the administration and optimization of cloud infrastructure to ensure reliability, scalability, and performance.",
    image: img7,
  },
];

const Services = () => {
  return (
    <div className="bg-[#F4F4F4] mt-20 pb-10">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">
            Our <span className="text-[#ef6603] font-semibold">Services</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 lg:p-8 rounded-lg shadow-md text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl min-h-[250px] lg:min-h-[350px]"
            >
              <div className="bg-[#ef6603] w-16 h-16 mx-auto -mt-12 rounded-full flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="mt-6 text-lg sm:text-xl md:text-2xl font-bold truncate">
                {service.title}
              </h3>
              <p className="mt-6 text-gray-600 text-sm sm:text-base">
                {service.description}
              </p>
              <Link to="/about">
                <button className="border-2 border-green-500 rounded-md text-white bg-green-500 text-xs sm:text-sm md:text-base font-semibold tracking-wide transition duration-300 ease-in-out hover:bg-transparent hover:text-[#ef6603] px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 mt-6 sm:mt-8 md:mt-10">
                  Learn More
                </button>
              </Link>
            </div>

            
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Services;
