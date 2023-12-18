import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/featured`, {
    revalidate: 180,
  });
  if (!res.ok) throw new Error("Failed to get featured post");
  const data = res.json();
  return data;
};

const Featured = async () => {
  const blog = await getData();

  return (
    <div className="mt-5 lg:mt-7">
      <h1 className="text-2xl leading-normal xl:leading-snug sm:text-3xl xl:text-6xl">
        <b>Hey, Vijay Kumar here!</b> Discover my stories and creative ideas.
      </h1>
      <div className=" md:mt-5 lg:mt-10 flex flex-col md:flex-row w-full md:items-center gap-4 lg:gap-7">
        <div className="flex-1 md:h-[275px] lg:h-[350px] xl:h-[375px] relative">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover object-center w-full h-full rounded-xl"
          />
        </div>
        <div className="flex-1">
          <Link href={`/blogs/${blog.slug}`} className="flex flex-col gap-2 lg:gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl mb-2">
              {blog.title}
            </h1>
            <div
              className=" text-xl lg:text-2xl softText"
              dangerouslySetInnerHTML={{
                __html:
                  blog.desc.length > 250
                    ? blog.desc.substring(0, 250) + "..."
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
