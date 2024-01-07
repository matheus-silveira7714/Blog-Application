import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const getData = async () => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/featured`, {
      revalidate: 180,
    });
    if (!res.ok) toast.error("Failed to get featured post");
    return res.json();
  } catch (error) {
    console.error("Error fetching featured post:", error.message);
    toast.error("Failed to get featured post");
  }
};

const Featured = async () => {
  const blog = await getData();

  return (
    <div className="mt-5 sm:mt-3 lg:mt-7">
      <h1 className="text-2xl leading-normal xl:leading-snug sm:text-3xl xl:text-6xl">
        Hey, <b>Vijay Kumar here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="mt-3 md:mt-5 lg:mt-10 flex flex-col sm:flex-row w-full sm:items-center gap-2 sm:gap-4 lg:gap-7">
        <div className="flex-1 sm:h-[250px] lg:h-[350px] xl:h-[375px] group overflow-hidden rounded-xl">
          <Image
            src={blog.image}
            alt={blog.title}
            width={275}
            height={250}
            className="object-cover object-center w-full h-full rounded-xl group-hover:scale-105 transition-all duration-500 ease-in cursor-pointer"
          />
        </div>
        <div className="flex-1">
          <Link
            href={`/blogs/${blog.slug}`}
            className="flex flex-col gap-2 lg:gap-4 xl:gap-6"
          >
            <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
              {blog.title}
            </h1>
            <div
              className="text-xl sm:text-lg md:text-xl xl:text-2xl softText"
              dangerouslySetInnerHTML={{
                __html:
                  blog.desc.length > 175
                    ? blog.desc.substring(0, 175) + "..."
                    : blog.desc,
              }}
            />
            <button className=" rounded-lg mt-2 px-4 py-2 w-fit lg:px-5 lg:py-3 softBg">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
