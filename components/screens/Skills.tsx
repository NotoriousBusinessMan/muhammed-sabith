import Image from "next/image";
import React from "react";

//font awesome

const Skills = () => {
  return (
    <section id="skills" className="skillSection px-20 py-36 w-full">
      <div className="top mb-16 lg:mb-36">
        <h1 className="font-semibold text-center md:text-left text-3xl md:text-6xl mb-4">
          My Skills & Experience
        </h1>
      </div>
      <div className="bottom px-2 md:px-36">
        <div className="top mb-10">
          <span className="text-xl font-medium block mb-2">My Skills</span>
          <p>
            Over the past five years and beyond, I&apos;ve honed my skills as a
            seasoned programmer and full-stack developer, embarking on a journey
            filled with diverse projects and clients. Each experience has been a
            source of both inspiration and invaluable learning, shaping me into
            the proficient professional I am today. I take immense pride in the
            multitude of successful ventures I&apos;ve undertaken, and I eagerly
            look forward to continuing this journey of growth and innovation.
          </p>
        </div>
        <div className="bottom flex items-center space-x-10 space-y-4 flex-wrap">
          <Image src="/html.svg" alt="html" width={50} height={50} />
          <Image src="/css.svg" alt="html" width={50} height={50} />
          <Image src="/js.svg" alt="html" width={50} height={50} />
          <Image src="/git.svg" alt="html" width={50} height={50} />
          <Image src="/gitlab.svg" alt="html" width={50} height={50} />
          <Image src="/sass.svg" alt="html" width={50} height={50} />
          <Image src="/bootstrap.svg" alt="html" width={50} height={50} />
          <Image src="/react.svg" alt="html" width={50} height={50} />
          <Image src="/python.svg" alt="html" width={50} height={50} />
          <Image src="/django.png" alt="html" width={50} height={50} />
          <Image src="/postman.png" alt="html" width={50} height={50} />
          <Image src="/social.png" alt="html" width={50} height={50} />
          <Image src="/pwa.png" alt="html" width={50} height={50} />
          <Image src="/nextjs.png" alt="html" width={50} height={50} />
          <Image src="/tailwind.png" alt="html" width={50} height={50} />
          <Image src="/vercel.png" alt="html" width={80} height={80} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
