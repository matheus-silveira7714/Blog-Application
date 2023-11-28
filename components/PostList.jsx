import React from "react";
import Pagination from "./Pagination";
import Post from "./Post";

const getData = async (page, cat) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );
  if (!res.status === 200) throw Error("Failed to get posts");
  return res.json();
};

const PostList = async ({ page, cat }) => {
  const { posts, count } = await getData(page,cat);
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className="flex-1 ">
      <h1 className=" my-4 sm:mt-6 lg:mt-9 text-lg sm:text-2xl lg:text-3xl font-bold">
        Recent Posts
      </h1>
      {posts?.map((item) => (
        <Post item={item} key={item._id} />
      ))}
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default PostList;
