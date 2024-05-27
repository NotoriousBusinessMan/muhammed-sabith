import React from "react";
import LinkButton from "../includes/LinkButton";

const Hero = () => {
  return (
    <section className="heroSection py-36 w-full flex flex-col items-center justify-center">
      <h1 className="font-semibold text-center md:text-6xl mb-4 text-3xl">
        Hi <i className="not-italic hidden lg:inline-block">👋</i> , Welcome To
        My Portfolio <br /> My Name is <b>Muhammed Sabith</b>
      </h1>
      <p className="md:text-lg text-sm font-medium mb-10 text-center">
        Transforming your vision into stunning websites. Let&apos;s build
        something amazing together.
      </p>
      <div className="buttons">
        <LinkButton
          title="Contact Me"
          href="/"
          classes="mr-3 border-black hover:border-cyan-700 hover:text-cyan-700"
        />
        <LinkButton
          title="Hire Me"
          href="/"
          classes="mr-3 border-black hover:border-cyan-700 hover:text-cyan-700"
        />
        <LinkButton
          title="See My Works"
          href="/"
          classes="mr-3 border-black hover:border-cyan-700 hover:text-cyan-700"
        />
      </div>
    </section>
  );
};

export default Hero;
