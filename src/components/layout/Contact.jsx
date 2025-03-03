import { useState } from "react";
import emailjs from "emailjs-com";
import img1 from "../lib/assets/Vector.png";
import img2 from "../lib/assets/Vector1.png";
import img3 from "../lib/assets/Vector2.png";
import Icons from "../lib/assets/const.js";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log environment variables to debug
    console.log(
      "Service ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID,
      "Template ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      "Public Key:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    );

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => alert("Message Sent Successfully"),
        (error) => {
          console.error("Email send failed:", error);
          alert("Failed to send message");
        }
      );
  };

  return (
    <div className="bg-gray-100 w-full py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">
            Contact <span className="text-[#ef6603] font-semibold">Us</span>
          </h2>
        </div>
        <div className="text-center mb-10">
          <h2 className="text-[#444444] text-3xl sm:text-4xl md:text-xl">
            We are here for you! How can we help?
          </h2>
        </div>
        <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side: Contact Info */}
          <div className="bg-gray-50 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-lg md:text-3xl font-bold text-gray-800">
                Contact Information
              </h2>
              <p className="text-gray-600 mt-2">Say something to start a live chat!</p>
              <div className="mt-20 space-y-4 text-sm md:text-base">
                <div className="flex gap-4 items-center">
                  <img src={img1} alt="Email Icon" className="w-[20px] h-[16px]" />
                  <p className="text-gray-700">Contact@cloudlem.com</p>
                </div>
                <div className="flex gap-4 items-center">
                  <img src={img2} alt="Phone Icon" className="w-[20px] h-[16px]" />
                  <p className="text-gray-700">+92-355-4475474</p>
                </div>
                <div className="flex gap-4 items-center">
                  <img src={img3} alt="Location Icon" />
                  <p className="text-gray-700">
                    Cloudlem 2nd floor, Bakhtawar <br />
                    Shah Plaza, Jutial, Gilgit
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-6 text-xl md:text-2xl">
              <Icons />
            </div>
          </div>

          {/* Right Side: Form */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="border p-3 rounded w-full text-gray-700"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="border p-3 rounded w-full text-gray-700"
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border p-3 rounded w-full mt-4 text-gray-700"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="border p-3 rounded w-full mt-4 text-gray-700"
              onChange={handleChange}
              required
            />

            <p className="mt-4 font-semibold text-gray-800">Select Subject:</p>
            <div className="flex flex-wrap space-x-2 mt-2 text-sm md:text-base gap-10">
              {["DevOps", "Cloud Computing", "Web Development"].map((subject, idx) => (
                <label key={idx} className="flex items-center text-gray-700">
                  <input
                    type="radio"
                    name="subject"
                    value={subject}
                    checked={formData.subject === subject}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {subject}
                </label>
              ))}
            </div>

            <textarea
              name="message"
              placeholder="Write your message..."
              className="border p-3 rounded w-full mt-4 text-gray-700"
              rows="4"
              onChange={handleChange}
              required
            ></textarea>
            <div className="text-center">
              <button type="submit" className="bg-orange-500 text-white py-3 px-6 rounded mt-6 w-[40%] font-bold hover:bg-orange-600">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
