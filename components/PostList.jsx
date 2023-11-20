import React from "react";
import Pagination from "./Pagination";
import Post from "./Post";

const PostList = () => {
  return (
    <div className="flex-1 ">
      <h1 className=" my-4 sm:mt-6 lg:mt-9 text-lg sm:text-2xl lg:text-3xl font-bold">
        Recent Posts
      </h1>
      <Post />
      <Post />
      <Post />
      <Post />
      <Pagination />
    </div>
  );
};

export default PostList;
