import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {
    cache: "force-cache",
  });
  const data = res.json();
  if (!res.ok) throw Error("Failed to get categories");
  return data;
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div>
      <h1 className=" my-4 sm:my-6 lg:my-9 text-xl sm:text-2xl lg:text-3xl font-bold">
        Popular Categories
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full gap-3 justify-between items-center">
        {data?.length>0 && data?.map((item) => (
          <Link
            key={item.id}
            href={`/blogs?cat=${item.slug}`}
            className={`flex gap-3 font-medium items-center capitalize h-16 w-full mx-auto px-2 py-1 lg:px-4 justify-center rounded-lg ${item.slug}`}
          >
            {item.image && (
              <Image
                src={item.image}
                alt={item.title}
                width={32}
                height={32}
                className=" object-cover object-center rounded-full w-10 h-10 overflow-hidden"
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
