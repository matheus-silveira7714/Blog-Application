import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/popular`, {
    revalidate: 180,
  });
  const data = res.json();
  if (!res.ok) throw new Error("Failed to get featured post");
  return data;
};

const MenuPosts = async ({ withImage, title, subtitle }) => {
  const blogs = await getData();

  return (
    <div>
      <h2 className="font-normal softText">{subtitle}</h2>
      <h1 className="font-bold text-xl">{title}</h1>
      <div className="flex flex-col gap-4 lg:gap-4 mt-4 lg:mt-3">
        {blogs.length > 0 &&
          blogs?.map((item) => (
            <Link
              href={`/blogs/${item.slug}`}
              className="flex gap-3 items-center "
              key={item.id}
            >
              {withImage && (
                <div className="h-12 w-fit">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={12}
                    height={12}
                    className="object-cover border-2 border-gray-200 rounded-full overflow-hidden w-14 h-14 lg:h-12 lg:w-12"
                  />
                </div>
              )}
              <div className="flex-1 flex flex-col gap-1 truncate">
                <span
                  className={`capitalize text-xs px-3 py-1 md:font-normal lg:font-medium font-medium popular-${item.catSlug} w-fit rounded-2xl text-white`}
                >
                  {item.catSlug}
                </span>
                <h3 className="font-medium text-sm md:text-xs lg:text-sm truncate">
                  {item.title}
                </h3>
                <div className="flex gap-2 text-xs">
                  <span>
                    {item.user?.name} -
                    {format(new Date(item?.createdAt), "dd/MM/yyyy")}
                  </span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MenuPosts;
