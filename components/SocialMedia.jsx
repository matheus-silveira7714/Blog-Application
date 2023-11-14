import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div>
      <div className="flex gap-4 flex-1">
        <FaFacebook size={24} className="text-[#3b5998] bg-white rounded-full" />
        <FaXTwitter size={24}  />
        <FaInstagram size={24} className=" bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-md"/>
        <FaLinkedin size={24} className="text-[#0072b1]" />
        <FaGithub size={24} />
      </div>
    </div>
  );
};

export default SocialMedia;
