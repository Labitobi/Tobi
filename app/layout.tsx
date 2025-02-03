import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tobi",
  description: "Tobi Portfolio",
  icons: "/assets/profile.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
       
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-darkbg quantico text-lightbg cursor min-h-[100vh] flex flex-col`}
      >
        <Navbar />
        <div>
          {children}
        </div>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
