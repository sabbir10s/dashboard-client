import React from "react";
import Input from "../lib/Input";

const Icons = () => {
  return (
    <div>
      <div className="flex flex-col mb-4">
        <label
          htmlFor="name"
          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
        >
          Name
        </label>

        <div className="relative">
          <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
            <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>

          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 !pl-12 border-red-500 input_styles"
          />
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <label
          htmlFor="name"
          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
        >
          Name
        </label>

        <div className="relative">
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2  border-red-500 input_styles"
          />
          <div className="absolute flex border border-transparent right-0 top-0 h-full w-10">
            <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
