'use client';
import { navItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {

const pathname = usePathname();

  return (
    <nav className="flex items-center shadow-brand shadow-md px-10 py-4 w-full bg-transparent backdrop-blur-xl fixed top-0 z-10">
      <div className="flex items-center justify-between w-full mx-auto">
        <Link href="/" className="text-3xl hover-cursor shadow-brand ">
          TOBI<span className="text-brand">.</span>
        </Link>
        <div className="items-center justify-center p-2 shadow-md shadow-brand rounded-md hidden lg:flex">
          <ul className="flex items-center space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name} className="hover:text-brand  hover-cursor">
                  <Link
                    href={item.url}
                    className={`${
                      pathname === item.url ? "active" : ""
                    } flex items-center gap-2  hover-cursor`}
                  >
                    <Icon />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:hidden">
          <MobileNavigation /> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
