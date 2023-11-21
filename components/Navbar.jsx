import Link from "next/link";
import React from "react";
import AuthLinks from "./AuthLinks";
import ThemeToggle from "./ThemeToggle";
import SocialMedia from "./SocialMedia";

const Navbar = () => {
  return (
    <div className=" z-40 bgColor fixed inset-0 px-4 lg:px-10 h-20 w-full flex items-center justify-between mx-auto lg:max-w-6xl xl:max-w-7xl">
      <div className=" hidden md:flex gap-4 flex-1">
        <SocialMedia />
      </div>
      <Link href="/" className="flex-1 text-left md:text-center font-bold text-2xl">
        VBlog
      </Link>
      <div className="flex gap-4 flex-1 justify-between items-center font-medium text-xl sm:text-lg">
        <ThemeToggle />
        <Link className="hidden md:block" href="/">
          Home
        </Link>
        <Link className="hidden md:block" href="/about">
          About
        </Link>
        <Link className="hidden md:block" href="/contact">
          Contact
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
