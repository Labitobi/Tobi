import React from "react";
import { techStackIcon, techStackIcon1 } from "@/constants";
import Image from "next/image";

const Techstack = () => {
  return (
    <div className="relative overflow-hidden z-0">
      <div className="flex flex-col items-center justify-center mx-auto mt-10 mb-50">
        <h1 className="text-4xl lg:text-7xl">My Tech Stack</h1>
        <p className="p-2 md:p-4 backdrop-blur-md rounded-xl shadow-sm text-lg md:text-2xl">
          Tools I use
        </p>
      </div>
      <div className="mb-20 mt-[150px]">
        <div className="flex gap-2 md:gap-5 mt-8 animate-marquee hover:paused">
          {techStackIcon.concat(techStackIcon).map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center backdrop-blur shadow-lg rounded-lg p-3 min-w-[100px] md:min-w-[150px] z-0"
            >
              <Image src={tech.icon} alt={tech.name} width={200} height={200} className="" />
              <p className="mt-2 text-sm font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-5 mt-8 animate-marquee2 hover:paused">
          {techStackIcon1.concat(techStackIcon1).map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center backdrop-blur shadow-lg rounded-lg p-3 min-w-[100px] md:min-w-[150px] z-0"
            >
              <Image src={tech.icon} alt={tech.name} width={200} height={200} className="" />
              <p className="mt-2 text-sm font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techstack;
