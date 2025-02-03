import React from 'react'

const page = () => {
  return (
    <main className="w-full h-full cursor mainbg p-2 md:p-10">
      <div className="mt-20 mb-10 mx-auto p-10 bg-transparent backdrop-blur-lg md:max-w-[70%] rounded-xl shadow-md shadow-brand/55">
        <h1 className="text-3xl flex text-brand">Who Am I ?</h1>
        <div className="flex flex-col md:flex-row gap-10 mt-5">
          <div className="flex flex-col gap-10">
            <p>
              My Name Is Tobi Owolabi, a passionate Nigerian 🇳🇬 frontend
              developer who began my journey into web development in 2024, right
              after finishing high school. Driven by a desire to create engaging
              digital experiences, I jumped into self-directed learning, and
              since then, I’ve been dedicated to mastering the art of web
              development.
            </p>
            <p>
              I immersed myself in mastering web development skills, exploring
              everything from foundational design principles to the intricacies
              of frontend coding. I quickly became fascinated by the process of
              building interactive, seamless, and visually appealing user
              interfaces. It’s not just about writing code for me—it’s about
              designing experiences that users connect with.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <p>
              React played a pivotal role in my journey. This powerful framework
              gave me the tools to bring my creative ideas to life through
              dynamic, responsive applications. It allowed me to merge my love
              for design with my technical skills, pushing me to constantly
              innovate and refine my craft. As I grew more confident in frontend
              development, I expanded my skill set into backend development,
              understanding how crucial it is to have a full-stack approach.
            </p>
            <p>
              This helped me bridge the gap between frontend and backend, giving
              me the ability to build scalable, end-to-end solutions. Today,
              with a solid foundation in both frontend and backend development,
              I’m ready to help clients bring their digital ideas to life. I’m
              passionate about using technology to create solutions that are not
              only functional but also elevate user experiences.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page

