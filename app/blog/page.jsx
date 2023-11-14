'use client'
import Menu from "@/components/Menu";
import PostList from "@/components/PostList";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = ({}) => {
  const searchParams = useSearchParams()
  const category = searchParams.get('cat')

  return (
    <div>
      <h1 className="bg-[#57c4ff31] p-2 text-center font-bold capitalize">{category} blogs</h1>
      <div className="flex flex-col md:flex-row gap-3 lg:gap-10 w-full">
        <PostList />
        <Menu />
      </div>
    </div>
  );
};

export default page;
