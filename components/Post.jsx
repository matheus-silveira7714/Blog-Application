import Image from "next/image";
import Link from "next/link";
import React from "react";

const Post = ({ key, item }) => {
  return (
    <div
      key={key}
      className=" mb-2 md:mb-5 lg:mb-10 flex flex-col md:flex-row w-full items-center gap-2 md:gap-5"
    >
      {item.img && (
        <div className="flex-1 sm:h-[225px] lg:h-[300px] relative">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover w-full rounded-lg"
          />
        </div>
      )}
      <div className="flex-1 flex flex-col gap-1 lg:gap-3">
        <div className="flex items-center gap-1 text-sm md:text-xs lg:text-base">
          <div className="softText items-center flex gap-1">
            <span className="bg-rose-600 rounded-full h-2 w-2 mt-[2px] font-bold">
              &nbsp;
            </span>
            <span>{item.createdAt.substring(0, 10)} - </span>
          </div>
          <span className="text-rose-600 font-medium ">
            {item.catSlug.toUpperCase()}
          </span>
        </div>
        <Link href={`/blogs/${item.slug}`}>
          <h1 className="text-xl md:text-base lg:text-2xl font-bold">
            {item.title}
          </h1>
        </Link>
        <p className=" text-base lg:text-lg softText">
          {item.desc.substring(0, 75)}
        </p>
        <Link
          href={`/blogs/${item.slug}`}
          className="py-1 w-fit text-sm lg:text-base border-b-2 border-rose-600 textColor"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Post;
