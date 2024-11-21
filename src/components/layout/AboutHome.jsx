import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../lib/assets/leon.png";
import img2 from '../lib/assets/about2.JPG';
import img3 from '../lib/assets/about3.JPG';
import { Link } from "react-router-dom";

const About = () => {
  const services = [
    "DevOps Engineers",
    "Site Reliability Engineers",
    "Cloud Consultants",
    "Software Architects",
    "Software Engineers",
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Title Section */}
      <header className="text-center my-10">
        <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Who <span className="text-[#ef6603] font-semibold">we are</span>
        </h4>
      </header>

      {/* Marquee Section */}
      <section className="bg-[#ef6603] py-4 sm:py-5 mb-8 sm:mb-10">
        <div className="overflow-hidden">
          <Marquee
            speed={100}
            className="flex whitespace-nowrap max-w-full"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={(e) => e.stopPropagation()}
            onMouseLeave={(e) => e.stopPropagation()}
          >
            {services.map((service, index) => (
              <h5
                key={index}
                className="text-lg sm:text-xl md:text-2xl mx-4 sm:mx-8 lg:mx-10 text-white"
              >
                {service}
              </h5>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Description Section */}
      <section className="flex flex-col md:flex-row justify-between gap-6 sm:gap-10 mt-20 sm:mb-10">
        <p className="text-base sm:text-lg md:w-1/2">
          Cloudlem specializes in cloud migration, maintenance, and assisting
          customers in building scalable, highly available architectures on AWS,
          Azure, GCP, and other leading cloud platforms.
        </p>
        <p className="text-base sm:text-lg md:w-1/2">
          The company's services include deployment, automation, infrastructure,
          dockerization, security recovery planning, and execution to benefit
          its customers.
        </p>
      </section>

      {/* Image and Additional Info Section */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-10 mt-20">
        <img
          src={img1}
          alt="Cloudlem"
          className="w-full h-auto md:w-[50%] md:h-[400px] object-cover rounded-lg"
        />
        <div className="text-center md:text-left md:w-1/2">
          <h4 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10">
            Growing your business
          </h4>
          <p className="text-base sm:text-lg mb-4 sm:mb-5">
            Cloudlem offers seamless cloud migration, scalable architecture
            design, and ongoing maintenance across platforms like AWS, Azure,
            and GCP. Our expert services ensure high availability and optimized
            performance, helping you future-proof your operations and drive
            business growth. Let’s scale together!
          </p>
          <Link to="/about">
            <button className="text-base sm:text-lg text-[#ef6603] hover:underline">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 sm:gap-10 mt-20">
        <div className="text-center md:text-left md:w-1/2">
          <h4 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10">
            Growing your business
          </h4>
          <p className="text-base sm:text-lg mb-4 sm:mb-5">
            Cloudlem offers seamless cloud migration, scalable architecture
            design, and ongoing maintenance across platforms like AWS, Azure,
            and GCP. Our expert services ensure high availability and optimized
            performance, helping you future-proof your operations and drive
            business growth. Let’s scale together!
          </p>
          <Link to="/about">
            <button className="text-base sm:text-lg text-[#ef6603] hover:underline">
              Learn More
            </button>
          </Link>
        </div>

        <img
          src={img2}
          alt="Cloudlem"
          className="w-full h-auto md:w-[50%] md:h-[400px] object-cover rounded-lg"
        />
      </section>

      <section className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-10 mt-20">
        <img
          src={img3}
          alt="Cloudlem"
          className="w-full h-auto md:w-[50%] md:h-[400px] object-cover rounded-lg"
        />
        <div className="text-center md:text-left md:w-1/2">
          <h4 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10">
            Growing your business
          </h4>
          <p className="text-base sm:text-lg mb-4 sm:mb-5">
            Cloudlem offers seamless cloud migration, scalable architecture
            design, and ongoing maintenance across platforms like AWS, Azure,
            and GCP. Our expert services ensure high availability and optimized
            performance, helping you future-proof your operations and drive
            business growth. Let’s scale together!
          </p>
          <Link to="/about">
            <button className="text-base sm:text-lg text-[#ef6603] hover:underline">
              Learn More
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
