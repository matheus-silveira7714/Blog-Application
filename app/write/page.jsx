"use client";
import React, { useState } from "react";
import { FaImage, FaPlus } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";
import { PiVideoBold } from "react-icons/pi";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const page = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
    const { status } = useSession();
    const router = useRouter();

    if (status === "loading") {
      return <div className="h-[50vh] flex items-center justify-center font-bold">Loading...</div>;
    }

    if (status === "unauthenticated") {
      router.push("/login");
    }

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Title"
        className="p-4 lg:p-6 text-2xl lg:text-3xl bg-transparent outline-none input mb-2"
      />
      <div className="flex flex-col gap-5 relative">
        <button
          className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden bg-transparent border-2 cursor-pointer softBorder"
          onClick={() => setOpen(!open)}
        >
          <FaPlus />
        </button>
        {open && (
          <div className="flex items-center justify-center gap-4 bgColor absolute left-12">
            <input id='imageUpload' type="file" accept="image/*" className="hidden"/>
              <label htmlFor="imageUpload" className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden bg-transparent border-2 cursor-pointer softBorder"><FaImage size={16} /></label>
            <input id='videoUpload' type="file" accept="video/*" className="hidden"/>
              <label htmlFor="videoUpload" className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden bg-transparent border-2 cursor-pointer softBorder"><PiVideoBold size={20} /></label>
            <input id='fileUpload' type="file" className="hidden"/>
              <label htmlFor="fileUpload" className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden bg-transparent border-2 cursor-pointer softBorder"><MdOutlineFileUpload size={22} /></label>
          </div>
        )}
        <div className="w-[100%] flex-1 textColor">
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
