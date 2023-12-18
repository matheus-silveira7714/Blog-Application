import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);
  const data = res.json();
  if (!res.ok) throw Error("Failed to get categories");
  return data;
};

const MenuCategories = async () => {
  const data = await getData();

  return (
    <div className="hidden sm:block">
      <h2 className="font-normal mt-4 text-softTextColor ">
        Discover by topic
      </h2>
      <h1 className="font-bold text-lg lg:text-xl">Categories</h1>
      <div className=" my-4 flex flex-wrap gap-3 capitalize w-full font-medium">
        {data?.map((item) => (
          <Link
            key={item._id}
            href={`/blogs?cat=${item.slug}`}
            className={`px-4 py-2 lg:px-4 rounded-lg ${item.slug}`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuCategories;
