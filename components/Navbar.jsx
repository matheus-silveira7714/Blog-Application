import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthLinks from './AuthLinks'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div className=" z-40 bgColor fixed inset-0 px-4 lg:px-10 h-16 sm:h-20 w-full flex items-center justify-between mx-auto lg:max-w-6xl xl:max-w-7xl">
      <div className=" hidden md:flex gap-2 flex-1">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className="flex-1 text-left md:text-center font-bold sm:text-2xl text-xl">
        VBlog
      </div>
      <div className="flex gap-4 flex-1 justify-between items-center text-xl sm:text-lg">
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
}

export default Navbar