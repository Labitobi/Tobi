"use client";
import Mainsection from "@/components/Mainsection";
import Services from "@/components/Services";
import Techstack from "@/components/Techstack";

const Page = () => {

  return (
    <main>
      <section className="mainbg w-full h-full xl:p-10 shadow-brand shadow-inner mt-10 z-0">
        <Mainsection />
      </section>
      <section className="sectionbg w-full h-full xl:p-10 shadow-brand shadow-inner z-0">
        <Techstack />
      </section>
      <section className="sectionbg2 w-full h-full xl:p-10 shadow-brand shadow-inner z-0">
        <Services />
      </section>
    </main>
  );
};

export default Page;
