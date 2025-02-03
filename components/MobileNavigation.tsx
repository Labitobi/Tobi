'use client';

import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { navItems } from '@/constants';
import { usePathname } from 'next/navigation';



const MobileNavigation = () => {
  const pathname = usePathname();
  return (
      <Sheet>
        <SheetTrigger >
          <Menu />
        </SheetTrigger>
        <SheetContent className="mainbg border-none">
          <SheetHeader>
            <SheetTitle>
              <Link href="/" className="text-3xl text-white">
                TOBI<span className="text-brand">.</span>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <ul className="flex space-y-4 flex-col w-full mt-5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name} className="hover:text-brand">
                  <Link
                    href={item.url}
                    className={`${
                      pathname === item.url ? "active" : ""
                    } flex items-center gap-2 `}
                  >
                    <Icon />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
  );
}

export default MobileNavigation
