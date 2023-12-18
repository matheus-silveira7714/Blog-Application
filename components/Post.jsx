import Image from "next/image";
import Link from "next/link";
import React from "react";
// import createDOMPurify from "dompurify";
import { format } from "date-fns";

// const purify = typeof window !== "undefined" ? createDOMPurify(window) : null;

const Post = ({ key, item }) => {
  // const sanitizeHTML = (html) => {
  //   return purify ? { __html: purify.sanitize(html) } : { __html: html };
  // };
  return (
    <div
      key={key}
      className=" mb-2 md:mb-5 lg:mb-10 flex flex-col md:flex-row w-full md:items-center gap-2 md:gap-5"
    >
      <div className="flex-1 sm:h-[225px] lg:h-[300px] relative">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="flex-1 flex flex-col gap-1 lg:gap-3">
        <div className="flex items-center gap-1 text-sm md:text-xs lg:text-base">
          <div className="softText items-center flex gap-1">
            <span className="bg-rose-600 rounded-full h-2 w-2 mt-[2px] font-bold">
              &nbsp;
            </span>
            <span> {format(new Date(item?.createdAt), "dd/MM/yyyy")} - </span>
          </div>
          <span className="text-rose-600 font-medium ">
            {item.catSlug.toUpperCase()}
          </span>
        </div>
        <Link href={`/blogs/${item.slug}`}>
          <h1 className="text-xl md:text-base lg:text-2xl font-bold">
            {item.title.substring(0,50)+"..."}
          </h1>
        </Link>
        <div
          className=" text-base lg:text-lg softText"
          dangerouslySetInnerHTML={{
            __html:
              item.desc.length > 150
                ? item.desc.substring(0, 150) + "..."
                : item.desc,
          }}
        />
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
