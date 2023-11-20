import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className=" bottom-0 mt-5 pb-4 lg:py-7 flex flex-col gap-4 sm:flex-row items-center justify-between ">
      <div className="flex flex-1 gap-2 lg:gap-4 flex-col">
        <div className="flex gap-3 font-bold text-lg lg:text-2xl items-center">
          <Image
            src="/logo.png"
            alt=""
            width={50}
            height={50}
            className="object-cover filter saturate-100 contrast-100"
          />
          <h1>VBlog</h1>
        </div>
        <p className="text-sm lg:text-base softText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit suscipit ea debitis molestiae, esse a, aspernatur,
          consequuntur magni inventore nam officiis tempore corporis voluptatum
          vel ratione accusantium optio ex.
        </p>
        <div className="flex justify-center ">
          <SocialMedia />
        </div>
      </div>
      <div className="flex flex-1 gap-10 md:gap-16 justify-center softText">
        <div className="flex flex-col items-center">
          <span className="font-bold textColor mb-1">Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex  flex-col items-center">
          <span className="font-bold textColor mb-1">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Food</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold textColor mb-1">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">LinkedIn</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
