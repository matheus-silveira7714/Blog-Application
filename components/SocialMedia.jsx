import React from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

const SocialMedia = () => {
  return (
    <div>
      <div className="flex gap-4 flex-1">
        <FaFacebookF size={26} className="bg-[#3b5998] text-white rounded-full p-1" />
        <FaXTwitter size={26} className=" text-white bg-black rounded-full p-1" />
        <FaInstagram size={26} className=" bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full p-[3px]"/>
        <TiSocialLinkedin size={26} className="bg-[#0072b1] text-white rounded-full p-[1px]" />
        <FaGithub size={26} />
      </div>
    </div>
  );
};

export default SocialMedia;
