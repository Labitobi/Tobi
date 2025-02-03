import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { cardInfo } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <main className="w-full h-full cursor mainbg mt-5 p-10">
      <div className="w-full flex flex-col items-center justify-center mt-10 gap-2 mb-20">
        <h1 className="text-3xl md:text-7xl text-brand">Portfolio</h1>
        <p className="p-1 md:p-2 bg-transparent backdrop-blur-md rounded-xl shadow-2xl shadow-brand/55 w-fit text-lg md:text-2xl">
          My Works
        </p>
      </div>
      <div className="my-20 lg:w-[95%] mx-auto">
        <Card className="flex flex-col lg:flex-row lg:p-5 bg-transparent backdrop-blur-lg shadow-xl shadow-brand/50 border-0 items-center lg:gap-10">
          <CardContent className="ml-0 mr-auto lg:mx-auto w-full h-full">
            <Image
              src="/assets/img1.png"
              alt="Store it"
              layout="intrinsic" 
              width={500}
              height={500}
              className="rounded-xl mt-10"
            />
          </CardContent>
          <CardHeader className="flex flex-col">
            <CardTitle className="text-brand text-3xl lg:text-7xl">Store It</CardTitle>
            <CardDescription className="text-lightbg text-2xl">
              A storage web application used for storing files and document
            </CardDescription>
            <Link href="https://storeit-pied.vercel.app/" target="_blank">
              <Button className="bg-darkbg shadow-md shadow-brand/50">
                Visit <ArrowUpRight />
              </Button>
            </Link>
          </CardHeader>
          <Badge className="mt-0 mb-auto w-fit bg-brand text-lightbg absolute right-5 lg:static">
            Latest Work
          </Badge>
        </Card>
      </div>
      <div className="flex flex-col md:flex-row w-full h-full items-center justify-center gap-5">
        {cardInfo.map((card, index) => (
          <Card
            key={index}
            className="bg-darkbg border-none p-2 pt-4 shadow-lg shadow-brand"
          >
            <CardContent>
              <Image
                src={card.image}
                alt={card.title}
                layout="responsive"
                width={200}
                height={200}
                className="rounded-xl"
              />
            </CardContent>
            <CardHeader>
              <CardTitle className="text-brand">{card.title}</CardTitle>
              <CardDescription className="text-lightbg">
                {card.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default page;
