"use client";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";
import Loading from "./Loading";

const getData = async (url) => {
  const res = await fetch(url, { revalidate: 600 });
  const data = await res.json();
  if (!res.ok) throw Error(data.messaage);
  return data;
};

const Comments = ({ postSlug }) => {
  const { data: session, status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    ` ${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/comments?postSlug=${postSlug}`,
    getData
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/comments`, {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  const userHasPostedComment = data?.some(
    (comment) => comment.user?.email === session?.user?.email
  );

  return (
    <>
      <h1 className=" font-bold text-xl lg:text-2xl mb-3">Comments</h1>
      {status === "authenticated" ? (
        !userHasPostedComment && (
          <div className=" flex gap-4 items-center">
            <textarea
              // disabled={userHasPostedComment}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="write a comment..."
              cols="30"
              rows="2"
              className="flex-1 max-w-[75%] p-2 softBg rounded-sm resize-none items-center outline-none"
            />
            <button
              // disabled={userHasPostedComment}
              onClick={handleSubmit}
              className={`px-4 lg:px-6 py-2 font-semibold rounded-md text-white bg-cyan-700 ${
                userHasPostedComment ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              Post
            </button>
          </div>
        )
      ) : (
        <div className="text-center font-medium">
          <Link href="/login">Please login to post a comment</Link>
        </div>
      )}
      <div className="flex flex-col gap-5 lg:gap-7 mt-5">
        {isLoading ? (
          <Loading />
        ) : data?.length > 0 ? (
          data?.map((item) => (
            <div key={item._id} className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <div className="h-10 w-fit">
                  <Image
                    src={item.user?.image}
                    alt={item.user?.name}
                    width={12}
                    height={12}
                    className="object-cover object-center border-2 border-gray-200 rounded-full contrast-100 w-10 h-10 "
                  />
                </div>
                <div className="flex flex-col softText">
                  <span className="font-bold">{item.user?.name}</span>
                  <span className="text-sm">
                    {format(new Date(item?.createdAt), "dd MMMM, yyyy")}
                  </span>
                </div>
              </div>
              <p>{item.desc}</p>
            </div>
          ))
        ) : (
          <span className="text-center">No comments yet</span>
        )}
      </div>
    </>
  );
};

export default Comments;
