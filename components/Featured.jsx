import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="mt-2 md:mt-5 lg:mt-7">
      <h1 className="text-3xl leading-normal xl:leading-snug lg:text-4xl xl:text-6xl">
        <b>Hey, Vijay Kumar here!</b> Discover my stories and creative ideas.
      </h1>
      <div className=" md:mt-5 lg:mt-10 flex flex-col md:flex-row w-full items-center gap-4 lg:gap-10">
        <div className="flex-1 sm:h-[300px] lg:h-[350px] xl:h-[375px] relative">
          <Image src="/p1.jpeg" alt="" fill className="object-cover w-full" />
        </div>
        <div className="flex-1 flex flex-col gap-2 lg:gap-6">
          <h1 className="text-xl lg:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className=" text-base lg:text-xl softText">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos earum
            nihil optio autem, ipsum perferendis omnis aliquid saepe at, quod
            unde, sit quam! Ex quasi tempora ab placeat quidem odio?
          </p>
          <button className=" rounded-xl mt-2 px-4 py-2 w-fit lg:px-5 lg:py-3 softBg">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
