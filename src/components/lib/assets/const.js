import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex gap-4 justify-center items-center">
      {/* LinkedIn */}
      <div className="group w-12 h-12 flex justify-center items-center rounded-full bg-orange-500 transition-all duration-300 hover:bg-white border-2 border-orange-500">
        <FaLinkedin className="text-white group-hover:text-orange-500 text-2xl transition-all duration-300" />
      </div>

      {/* Twitter */}
      <div className="group w-12 h-12 flex justify-center items-center rounded-full bg-orange-500 transition-all duration-300 hover:bg-white border-2 border-orange-500">
        <FaTwitter className="text-white group-hover:text-orange-500 text-2xl transition-all duration-300" />
      </div>

      {/* Instagram */}
      <div className="group w-12 h-12 flex justify-center items-center rounded-full bg-orange-500 transition-all duration-300 hover:bg-white border-2 border-orange-500">
        <FaInstagram className="text-white group-hover:text-orange-500 text-2xl transition-all duration-300" />
      </div>
    </div>
  );
};

export default SocialIcons;
