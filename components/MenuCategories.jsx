import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const getData = async () => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);
    if (!res.ok) toast.error("Failed to get categories");
    return res.json();
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    toast.error("Failed to get categories");
  }
};

const MenuCategories = async () => {
  const data = await getData();

  return (
    <div className="hidden sm:block">
      <h2 className="font-normal mt-4 softText">Discover by topic</h2>
      <h1 className="font-bold text-lg lg:text-xl">Categories</h1>
      <div className=" my-4 flex flex-wrap gap-3 capitalize w-full font-medium">
        {data?.length > 0 &&
          data?.map((item) => (
            <Link
              key={item.id}
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
