import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className=" md:mt-5 lg:mt-10 flex flex-col md:flex-row w-full items-center gap-4 lg:gap-7">
      <div className="flex-1 sm:h-[200px] lg:h-[250px] xl:h-[275px] relative">
        <Image src="/p1.jpeg" alt="" fill className="object-cover w-full" />
      </div>
      <div className="flex-1 flex flex-col gap-2 lg:gap-5">
        <div className="flex gap-1 text-sm md:text-xs lg:text-base">
          <span className="softText">11.02.2023 - </span>
          <span className="text-rose-600 font-medium">CULTURE</span>
        </div>
        <Link href="/blog">
          <h1 className="text-lg md:text-base lg:text-xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className=" text-sm lg:text-base softText">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos earum
          nihil optio autem, ipsum perferendis omnis aliquid saepe at, quod
          unde, sit quam! Ex quasi tempora ab placeat quidem odio?
        </p>
        <Link href="/blog" className="py-2 w-fit text-sm lg:text-base md:py-1 border-b-2 border-rose-600 textColor">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
