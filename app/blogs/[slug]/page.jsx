import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to get posts");
  return res.json();
};

const page = async ({ params }) => {
  const { slug } = params;
  const blog = await getData(slug);
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start gap-2 lg:gap-10 pt-5">
        <div className="flex-1 flex flex-col gap-5 lg:gap-10">
          <h1 className="text-3xl lg:text-4xl font-semibold">{blog.title}</h1>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <div className="h-12 w-fit">
                <Image
                  src={blog.user?.image}
                  alt={blog.user?.name}
                  width={12}
                  height={12}
                  className="object-cover object-center border-2 border-gray-200 rounded-full w-full h-full brightness-150 saturate-100 contrast-200"
                />
              </div>
              <div className="flex flex-col softText">
                <span className="font-bold">{blog?.user?.name}</span>
                <span className="text-sm">
                  {format(new Date(blog?.createdAt), "dd MMMM, yyyy")}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-10">
            <span className="font-medium ">{blog?.views} views</span>
            <span
              className={`capitalize font-medium lg:text-lg w-fit rounded-full py-1 px-5 text-white popular-${blog.catSlug}`}
            >
              {blog.catSlug}
            </span>
            </div>
          </div>
        </div>
        <div className="flex-1 md:h-[275px] lg:h-[325px] relative">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover object-center h-full w-full rounded-xl"
          />
        </div>
      </div>
      <div className="flex gap-5 mt-4 lg:mt-0">
        <div className="flex-1 lg:mt-9">
          <div
            className="flex flex-col text-lg textColor"
            dangerouslySetInnerHTML={{ __html: blog?.desc || "" }}
          />
          <div className="mt-3">
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default page;
