"use client";
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const page = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Title"
        className=" p-4 lg:py-6 text-2xl lg:text-4xl bg-transparent outline-none input mb-2"
      />
      <div className="flex flex-col gap-5 relative">
        <button
          className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden bg-transparent border-2 border-[var(--softTextColor)] cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className="flex items-center justify-center gap-4 bgColor absolute left-12">
            <button className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden bg-transparent border-2 border-[var(--softTextColor)] cursor-pointer">
              <Image src="/image.png" alt="" width={16} height={16} />
            </button>
            <button className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden bg-transparent border-2 border-[var(--softTextColor)] cursor-pointer">
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden bg-transparent border-2 border-[var(--softTextColor)] cursor-pointer">
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <div className="w-[100%] flex-1">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
          />
        </div>
      </div>
      <button className=" mt-5 px-4 py-2 sm:w-fit sm:mx-auto sm:px-6 sm:font-medium rounded-3xl bg-[#1a8917] text-white ">
        Publish
      </button>
    </div>
  );
};

export default page;
