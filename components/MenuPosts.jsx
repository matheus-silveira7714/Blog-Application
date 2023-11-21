import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuPosts = ({ withImage,title,subtitle }) => {
  return (
    <div>
      <h2 className="font-normal softText ">{subtitle}</h2>
      <h1 className="font-bold text-lg lg:text-xl">{title}</h1>
      <div className="flex flex-col gap-2 lg:gap-4  mt-2">
        <Link href="/" className="flex gap-3 items-center ">
          {withImage && (
            <div className="h-10 lg:h-12 w-fit">
              <Image
                src="/p1.jpeg"
                alt=""
                width={12}
                height={12}
                className="object-cover border-2 border-gray-200 rounded-full overflow-hidden w-10 h-10 lg:h-12 lg:w-12"
              />
            </div>
          )}
          <div className="flex-1 flex flex-col gap-1">
            <span className="text-xs px-2 py-1 md:font-normal lg:font-medium font-medium bg-[#ff7857] w-fit rounded-2xl text-white">
              Travel
            </span>
            <h3 className="font-medium text-sm md:text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing .
            </h3>
            <div className="flex gap-2 text-xs">
              <span>John Doe</span>
              <span> - 11.02.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="flex gap-3 items-center ">
          {withImage && (
            <div className="h-10 lg:h-12 w-fit">
              <Image
                src="/p1.jpeg"
                alt=""
                width={12}
                height={12}
                className="object-cover border-2 border-gray-200 rounded-full overflow-hidden w-10 h-10 lg:h-12 lg:w-12"
              />
            </div>
          )}
          <div className="flex-1 flex flex-col gap-1">
            <span className="text-xs px-2 py-1 md:font-normal lg:font-medium font-medium bg-[#ffb14f] w-fit rounded-2xl text-white">
              Culture
            </span>
            <h3 className="font-medium text-sm md:text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing .
            </h3>
            <div className="flex gap-2 text-xs">
              <span>John Doe</span>
              <span> - 11.02.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="flex gap-3 items-center ">
          {withImage && (
            <div className="h-10 lg:h-12 w-fit">
              <Image
                src="/p1.jpeg"
                alt=""
                width={12}
                height={12}
                className="object-cover border-2 border-gray-200 rounded-full overflow-hidden w-10 h-10 lg:h-12 lg:w-12"
              />
            </div>
          )}
          <div className="flex-1 flex flex-col gap-1">
            <span className="text-xs px-2 py-1 md:font-normal lg:font-medium font-medium bg-[#7fb881] w-fit rounded-2xl text-white">
              Food
            </span>
            <h3 className="font-medium text-sm md:text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing .
            </h3>
            <div className="flex gap-2 text-xs">
              <span>John Doe</span>
              <span> - 11.02.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="flex gap-3 items-center ">
          {withImage && (
            <div className="h-10 lg:h-12 w-fit">
              <Image
                src="/p1.jpeg"
                alt=""
                width={12}
                height={12}
                className="object-cover border-2 border-gray-200 rounded-full overflow-hidden w-10 h-10 lg:h-12 lg:w-12"
              />
            </div>
          )}
          <div className="flex-1 flex flex-col gap-1">
            <span className="text-xs px-2 py-1 md:font-normal lg:font-medium font-medium bg-[#789cff] w-fit rounded-2xl text-white">
              Style
            </span>
            <h3 className="font-medium text-sm md:text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing .
            </h3>
            <div className="flex gap-2 text-xs">
              <span>John Doe</span>
              <span> - 11.02.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="flex gap-3 items-center ">
          {withImage && (
            <div className="h-10 lg:h-12 w-fit">
              <Image
                src="/p1.jpeg"
                alt=""
                width={12}
                height={12}
                className="object-cover border-2 border-gray-200 rounded-full overflow-hidden w-10 h-10 lg:h-12 lg:w-12"
              />
            </div>
          )}
          <div className="flex-1 flex flex-col gap-1">
            <span className="text-xs px-2 py-1 md:font-normal lg:font-medium font-medium bg-[#ff7887] w-fit rounded-2xl text-white">
              Fashion
            </span>
            <h3 className="font-medium text-sm md:text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing .
            </h3>
            <div className="flex gap-2 text-xs">
              <span>John Doe</span>
              <span> - 11.02.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="flex gap-3 items-center ">
          {withImage && (
            <div className="h-10 lg:h-12 w-fit">
              <Image
                src="/p1.jpeg"
                alt=""
                width={12}
                height={12}
                className="object-cover border-2 border-gray-200 rounded-full overflow-hidden w-10 h-10 lg:h-12 lg:w-12"
              />
            </div>
          )}
          <div className="flex-1 flex flex-col gap-1">
            <span className="text-xs px-2 py-1 md:font-normal lg:font-medium font-medium bg-[#775aec] w-fit rounded-2xl text-white">
              Coding
            </span>
            <h3 className="font-medium text-sm md:text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing .
            </h3>
            <div className="flex gap-2 text-xs">
              <span>John Doe</span>
              <span> - 11.02.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuPosts;
