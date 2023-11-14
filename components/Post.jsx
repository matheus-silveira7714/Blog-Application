import Image from "next/image";
import Link from "next/link";
import React from "react";

const Post = () => {
  return (
    <div className=" mb-2 md:mb-5 lg:mb-10 flex flex-col md:flex-row w-full items-center gap-2 md:gap-5">
      <div className="flex-1 sm:h-[225px] lg:h-[300px] relative">
        <Image src="/p1.jpeg" alt="" fill className="object-cover w-full" />
      </div>
      <div className="flex-1 flex flex-col gap-2 lg:gap-3">
        <div className="flex gap-1 text-sm md:text-xs lg:text-base">
          <span className="softText">11.02.2023 - </span>
          <span className="text-rose-600 font-medium">CULTURE</span>
        </div>
        <Link href="/vvnv">
          <h1 className="text-xl md:text-base lg:text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className=" text-base lg:text-lg softText">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos earum
          nihil optio autem, ipsum perferendis omnis aliquid saepe at, quod
          unde, sit quam! Ex quasi tempora ab placeat quidem odio?
        </p>
        <Link href="/vvnv" className="py-1 w-fit text-sm lg:text-base border-b-2 border-rose-600 textColor">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Post;
