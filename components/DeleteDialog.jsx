import { deletePost } from "@/app/profile/page";
import React from "react";

const DeleteDialog = ({ handleOpen, slug }) => {
  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen h-screen overflow-hidden">
        <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md p-3">
            <div className=" px-4 pb-4 sm:p-5 sm:flex sm:items-start">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 className="text-lg font-semibold leading-6 text-red-500">
                  Delete Blog
                </h3>
                <p className="text-base text-black mt-1 font-medium">
                  Are you sure you want to delete your post? This data will be
                  permanently deleted and cannot be recovered later.
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse gap-4 sm:gap-6 font-semibold text-sm text-center">
              <button
                onClick={() => {deletePost(slug),handleOpen()}}
                className="w-full rounded-md bg-red-600 px-3 py-2 text-white hover:bg-red-700 sm:w-auto sm:px-5 "
              >
                Confirm
              </button>
              <button
                onClick={handleOpen}
                className="w-full rounded-md px-3 py-2 text-red-600 border-2 border-gray-400 hover:bg-gray-200 sm:w-auto sm:px-5"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
