import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-10 pt-5">
        <div className="flex-1 flex flex-col gap-5 lg:gap-10">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            molestiae at est autem nulla.
          </h1>
          <div className="flex gap-3 items-center">
            <div className="h-12 w-fit">
              <Image
                src="/p1.jpeg"
                alt=""
                width={12}
                height={12}
                className="object-cover border-2 border-gray-200 rounded-full overflow-hidden w-12 h-12"
              />
            </div>
            <div className="flex flex-col softText">
              <span className="font-bold">John Doe</span>
              <span>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className="flex-1 md:h-[275px] lg:h-[325px] relative">
          <Image src="/p1.jpeg" alt="" fill className="object-cover w-full" />
        </div>
      </div>
      <div className="flex gap-5 mt-4 lg:mt-0">
        <div className="flex-1 lg:mt-9">
          <div className="flex flex-col text-xl">
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium enim, impedit illum corporis porro reiciendis, quaerat
              quibusdam dolorum praesentium omnis ipsam quis. Eaque blanditiis
              molestiae eius sapiente voluptatum suscipit nisi?
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium enim, impedit illum corporis porro reiciendis, quaerat
              quibusdam dolorum praesentium omnis ipsam quis. Eaque blanditiis
              molestiae eius sapiente voluptatum suscipit nisi?
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium enim, impedit illum corporis porro reiciendis, quaerat
              quibusdam dolorum praesentium omnis ipsam quis. Eaque blanditiis
              molestiae eius sapiente voluptatum suscipit nisi?
            </p>
          </div>
          <div className="">
            <Comments/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default page;
