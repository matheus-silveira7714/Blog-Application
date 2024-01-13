import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";

const BlogCard = ({ item }) => {
  return (
    <div className="flex flex-col max-w-2xl gap-3 mb-5">
      <div className="sm:h-[225px] lg:h-[250px] group overflow-hidden rounded-lg">
        <Image
          src={item?.image}
          alt={item?.title}
          width={275}
          height={250}
          className="object-cover object-center w-full h-full rounded-lg group-hover:scale-105 transition-all duration-500 ease-in cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-1 lg:gap-3">
        <div className="flex items-center gap-1 text-sm md:text-xs lg:text-base softText">
          <span className="bg-rose-600 rounded-full h-2 w-2 mt-[2px] font-bold" />
          <span className="gap-2">
            {format(new Date(item?.createdAt), "dd/MM/yyyy")}
          </span>
          <span className="font-bold">-</span>
          <span className="text-rose-600 font-medium uppercase">
            {item.catSlug}
          </span>
        </div>
        <Link href={`/blogs/${item?.slug}`}>
          <h1 className="text-xl md:text-base lg:text-2xl font-bold">
            {item?.title?.substring(0, 50) + "..."}
          </h1>
        </Link>
        <div
          className=" text-base lg:text-lg softText"
          dangerouslySetInnerHTML={{
            __html:
              item?.desc?.length > 150
                ? item?.desc?.substring(0, 150) + "..."
                : item?.desc,
          }}
        />
        <div className="flex items-center justify-between gap-3">
          <Link
            href={`/blogs/${item?.slug}`}
            className="py-[2px] w-fit text-sm lg:text-base border-b-2 border-rose-600 textColor"
          >
            Read more
          </Link>
          {/* Edit option */}
          {/* delete option */}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
