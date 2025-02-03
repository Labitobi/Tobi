import { Facebook, Github, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import Typed from "typed.js";
import { AnimatedCounter } from "@/components/Counter";

const Mainsection = () => {
  useEffect(() => {
    const typed = new Typed(".typed-element", {
      strings: [
        "Web Developer.",
        "UI/UX Designer.",
        "Tech Enthusiast.",
        "Web Designer.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <div className="w-[50%] mx-auto flex items-center justify-center shadow-2xl shadow-brand  h-5"></div>
      <div className="profile">
        <div className="relative w-[200px] h-[200px] lg:w-[530px] lg:h-[300px] xl:w-[600px] xl:h-[400px]  flex justify-center items-center mx-auto mt-7 lg:mr-10 z-0">
          <div className="absolute w-full h-full p-2 rounded-full border-brand border-x-8 shadow-md  border-dotted animate-border-spin-fast"></div>
          <div className="relative w-full h-full rounded-full justify-center items-center">
            <div className="absolute w-full h-full rounded-full border-[2px]  border-brand border-dashed animate-border-spin"></div>
            <Image
              src="/assets/profile.png"
              alt="Tobi"
              fill
              className="rounded-full object-contain p-2"
            />
          </div>
        </div>

        <div className="bio-container">
          <h1 className="text-brand text-3xl  m-5 text-left">
            Hi, I’m Tobi Owolabi, a <span className="typed-element"></span>
          </h1>
          <p className="text-lg m-5 ">
            I am a front-end web developer, UI/UX Designer. Committed to
            continuous learning and collaboration in the tech community.
          </p>
          <div className="flex ml-auto mr-0 justify-end items-center p-1 w-full space-x-3">
            <Link
              href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61563366152049"
              className="p-2 shadow-inner text-facebook shadow-facebook rounded-xl hover:animate-bounce hover-cursor"
            >
              <Facebook />
            </Link>
            <Link
              href="https://www.linkedin.com/in/oluwatobi-owolabi-72541a27b/"
              className="p-2 shadow-inner text-linkedin shadow-linkedin rounded-xl hover:animate-bounce hover-cursor"
            >
              <Linkedin />
            </Link>
            <Link
              href="https://github.com/Labitobi"
              className="p-2 shadow-inner text-white shadow-github rounded-xl hover:animate-bounce hover-cursor"
            >
              <Github />
            </Link>
            <Link
              href="https://x.com/OWOLABITOB95206"
              className="p-2 shadow-inner text-white shadow-github rounded-xl hover:animate-bounce hover-cursor"
            >
              <FaXTwitter size={23} />
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-20 flex items-center justify-center w-full space-x-5 p-5 flex-col md:flex-row lg:w-[60%] lg:text-right bg-transparent">
        <div className="border-b-brand border-b-[1px] md:border-r-[2px] md:border-r-brand md:border-b-0 p-3  text-xl w-full ml-5">
          <p>Projects</p>
          <p className="text-brand text-right text-5xl">
            <AnimatedCounter endValue={3} />
          </p>
        </div>
        <div className="p-3  text-xl w-full">
          <p>Services</p>
          <p className="text-brand text-right text-5xl">
            <AnimatedCounter endValue={2} />
          </p>
        </div>
        <div className="border-t-brand border-t-[1px] md:border-l-[2px] md:border-l-brand md:border-t-0 p-3  text-xl w-full ">
          <p>Age in Years</p>
          <p className="text-brand text-right text-5xl">
            <AnimatedCounter endValue={17} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mainsection;
