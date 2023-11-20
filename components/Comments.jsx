import Image from "next/image";
import Link from "next/link";
import React from "react";

const Comments = () => {
  const status = "authenticated";
  return (
    <div>
      <h1 className=" font-bold text-xl lg:text-2xl mb-3">Comments</h1>
      {status === "authenticated" ? (
        <div className=" flex gap-4 items-center">
          <textarea
            placeholder="write a comment..."
            id=""
            cols="30"
            rows="2"
            className="flex-1 max-w-[75%] p-2 softBg rounded-sm resize-none items-center outline-none"
          />
          <button className="px-4 lg:px-6 py-2 font-semibold cursor-pointer rounded-md text-white bg-cyan-700">
            Post
          </button>
        </div>
      ) : (
        <div className="text-center font-medium">
          <Link href="/login" >Please login to post a comment</Link>
        </div>
      )}
      <div className="flex flex-col gap-5 lg:gap-10 mt-5">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <div className="h-10 w-fit">
              <Image
                src="/p1.jpeg"
                alt=""
                width={12}
                height={12}
                className="object-cover border-2 border-gray-200 rounded-full overflow-hidden w-10 h-10"
              />
            </div>
            <div className="flex flex-col softText">
              <span className="font-bold">John Doe</span>
              <span className="text-sm">01.01.2024</span>
            </div>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <div className="h-10 w-fit">
              <Image
                src="/p1.jpeg"
                alt=""
                width={12}
                height={12}
                className="object-cover border-2 border-gray-200 rounded-full overflow-hidden w-10 h-10"
              />
            </div>
            <div className="flex flex-col softText">
              <span className="font-bold">John Doe</span>
              <span className="text-sm">01.01.2024</span>
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            perspiciatis officiis odit suscipit fugit quod doloribus? Eum
            repudiandae expedita nisi laborum, explicabo accusantium distinctio
            deleniti cumque corrupti officia illo libero!
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <div className="h-10 w-fit">
              <Image
                src="/p1.jpeg"
                alt=""
                width={12}
                height={12}
                className="object-cover border-2 border-gray-200 rounded-full overflow-hidden w-10 h-10"
              />
            </div>
            <div className="flex flex-col softText">
              <span className="font-bold">John Doe</span>
              <span className="text-sm">01.01.2024</span>
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            perspiciatis officiis odit suscipit fugit quod doloribus? Eum
            repudiandae expedita nisi laborum.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <div className="h-10 w-fit">
              <Image
                src="/p1.jpeg"
                alt=""
                width={12}
                height={12}
                className="object-cover border-2 border-gray-200 rounded-full overflow-hidden w-10 h-10"
              />
            </div>
            <div className="flex flex-col softText">
              <span className="font-bold">John Doe</span>
              <span className="text-sm">01.01.2024</span>
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            perspiciatis officiis odit suscipit fugit quod doloribus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
