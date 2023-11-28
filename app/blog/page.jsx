import Menu from "@/components/Menu";
import PostList from "@/components/PostList";
import React from "react";

const page = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams || "";

  return (
    <div className="pt-7 lg:pt-3">
      <h1 className={`p-2 text-center font-bold capitalize ${cat}`}>
        {cat} blogs
      </h1>
      <div className="flex flex-col md:flex-row gap-3 lg:gap-10 w-full">
        <PostList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default page;
