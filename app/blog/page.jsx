import Menu from "@/components/Menu";
import PostList from "@/components/PostList";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="bg-[#57c4ff31] p-2 text-center font-bold">Style blog</h1>
      <div className="flex flex-col md:flex-row gap-3 lg:gap-10 w-full">
        <PostList />
        <Menu />
      </div>
    </div>
  );
};

export default page;
