import Link from 'next/link';
import React from 'react'

const MenuCategories = () => {
  return (
    <div>
      <h2 className="font-normal mt-4 text-softTextColor ">
        Discover by topic
      </h2>
      <h1 className="font-bold text-lg lg:text-xll">Categories</h1>
      <div className=" my-4 flex flex-wrap gap-3 capitalize w-full font-medium">
        <Link href="/" className="px-4 py-2 lg:px-4 rounded-lg  bg-[#57c4ff31]">
          Style
        </Link>
        <Link href="/" className="px-4 py-2 lg:px-4 rounded-lg bg-[#da85c731]">
          Fashion
        </Link>
        <Link href="/" className="px-4 py-2 lg:px-4 rounded-lg bg-[#7fb88133]">
          Food
        </Link>
        <Link href="/" className="px-4 py-2 lg:px-4 rounded-lg bg-[#ff795736]">
          Travel
        </Link>
        <Link href="/" className="px-4 py-2 lg:px-4 rounded-lg bg-[#ffb04f45]">
          Culture
        </Link>
        <Link href="/" className="px-4 py-2 lg:px-4 rounded-lg bg-[#5e4fff31]">
          Coding
        </Link>
      </div>
    </div>
  );
}

export default MenuCategories