import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
const page = () => {
  return (
    <div className="flex items-center justify-center mt-5 lg:mt-8 max-sm:min-h-[50vh] ">
      <div className="flex justify-center items-center flex-col gap-5 lg:gap-8 softBg px-5 py-4 sm:py-16 sm:px-16 rounded-md">
        <div className="flex gap-2 items-center px-6 py-4 rounded-lg bg-white cursor-pointer font-medium sm:font-bold text-black w-[250px] border-[1px] border-softTextColor">
          <Image src='/google.png' alt="google" width={24} height={24} className="bg-transparent"/>
          Sign in with Google
        </div>
        <div className="flex gap-2 items-center px-6 py-4 rounded-lg bg-[#111] cursor-pointer font-medium sm:font-bold text-white w-[250px] border-[1px] border-softTextColor">
          <FaGithub size={22} />
          Sign in with Github
        </div>
        <div className="flex gap-2 items-center px-6 py-4 rounded-lg bg-[#3b5998] cursor-pointer font-medium sm:font-bold text-white w-[250px] ">
          <FaFacebook size={22} />
          Sign in with Facebook
        </div>
        <Link href="/write">Write a blog</Link>
      </div>
    </div>
  );
};

export default page;
