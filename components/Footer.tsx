import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="p-10 flex flex-col items-center justify-center gap-10 bg-gradient-to-br from-darkbg via-brand/30 to-darkbg flex-grow">
      <div className="w-full flex items-center justify-between">
        <Link href="/" className="text-3xl hover-cursor shadow-brand ">
          TOBI<span className="text-brand">.</span>
        </Link>
        <div className="flex gap-2">
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
      <div className="w-full text-center">
        © 2025 made with ❤️ by Tobi Owolabi
      </div>
    </div>
  );
}

export default Footer
