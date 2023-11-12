import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center mt-5 lg:mt-8 max-sm:min-h-[50vh] ">
      <div className="flex justify-center items-center flex-col gap-5 lg:gap-8 softBg px-5 py-4 sm:py-16 sm:px-16 rounded-md text-white">
        <div className=" px-8 lg:px-10 py-4 rounded-lg bg-[#ff5555] cursor-pointer font-medium sm:font-bold">Sign in with Google</div>
        <div className=" px-8 lg:px-10 py-4 rounded-lg bg-[#111] cursor-pointer font-medium sm:font-bold">Sign in with Github</div>
        <div className=" px-8 lg:px-10 py-4 rounded-lg bg-[#087bea] cursor-pointer font-medium sm:font-bold">Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default page;
