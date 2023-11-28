import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import Image from "next/image";
import React from "react";

const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.status === 200) throw Error("Failed to get posts");
  return res.json();
};

const page = async ({ params }) => {
  const { slug } = params;
  const blog = await getData(slug);
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-10 pt-5">
        <div className="flex-1 flex flex-col gap-5 lg:gap-10">
          <h1 className="text-3xl lg:text-4xl font-bold">{blog.title}</h1>
          <div className="flex gap-3 items-center">
            <div className="h-12 w-fit">
              <Image
                src={blog.user?.image}
                alt=""
                width={12}
                height={12}
                className="object-cover border-2 border-gray-200 rounded-full overflow-hidden w-12 h-12"
              />
            </div>
            <div className="flex flex-col softText">
              <span className="font-bold">{blog.user?.name}</span>
              <span className="text-sm">01.01.2024</span>
            </div>
          </div>
        </div>
        <div className="flex-1 md:h-[275px] lg:h-[325px] relative">
          <Image
            src={blog.img}
            alt=""
            fill
            className="object-cover w-full rounded-xl"
          />
        </div>
      </div>
      <div className="flex gap-5 mt-4 lg:mt-0">
        <div className="flex-1 lg:mt-9">
          <div
            className="flex flex-col text-xl"
            dangerouslySetInnerHTML={{ __html:<p>{blog?.desc }</p>}}
          />
          <div className="">
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default page;
