import { AppWindow, DraftingCompass } from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <div>
      <div className="flex items-center w-full flex-col">
        <h1 className="text-4xl lg:text-7xl">Services</h1>
        <p className="p-2 md:p-4 backdrop-blur-md rounded-xl bg-transparent shadow-sm text-lg md:text-2xl">
          What i can do
        </p>
      </div>
      <div className="flex flex-wrap items-center w-full justify-center gap-[100px] mt-20 mb-20 p-5">
        <div className="flex flex-col space-y-4 p-5 backdrop-blur-md bg-transparent border border-brand rounded-lg min-w-[200px] max-w-[300px]">
          <span className="p-3 bg-transparent backdrop-blur-sm shadow-brand shadow-sm rounded-lg w-fit text-brand">
            <AppWindow size={50} />
          </span>
          <h1 className="text-3xl">Web Development</h1>
          <p className="text-md">
            I can build responsive, scalable and beautiful website
          </p>
        </div>
        <div className="flex flex-col space-y-4 p-5 backdrop-blur-md bg-transparent border border-brand rounded-lg min-w-[200px] max-w-[300px]">
          <span className="p-3 bg-transparent backdrop-blur-sm shadow-brand shadow-sm rounded-lg w-fit text-brand">
            <DraftingCompass size={50} />
          </span>
          <h1 className="text-3xl">Design</h1>
          <p>I create beautiful and useful designs</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
