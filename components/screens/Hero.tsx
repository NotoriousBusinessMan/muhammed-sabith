import React from "react";
import LinkButton from "../includes/LinkButton";
import Link from "next/link";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="heroSection px-8 py-36 w-full flex flex-col items-center justify-center">
      <h1 className="font-semibold text-center sm:text-6xl mb-4 text-4xl">
        Hi <i className="not-italic hidden lg:inline-block">👋</i>, It&apos;s Me
        <br />
        <b>Muhammed Sabith</b>
      </h1>
      <p className="md:text-lg text-sm font-medium mb-10 text-center">
        Transforming your vision into stunning websites. Let&apos;s build
        something amazing together.
      </p>
      <div className="buttons flex flex-col items-center md:flex-row">
        <LinkButton
          title="Contact Me"
          href="/#contact"
          classes="mr-3 border-black hover:border-cyan-700 hover:text-cyan-700 w-40 text-center mb-3 md:mb-0"
        />
        <LinkButton
          title="Hire Me"
          href="/"
          classes="mr-3 border-black hover:border-cyan-700 hover:text-cyan-700 w-40 text-center mb-3 md:mb-0"
        />
        <LinkButton
          title="See My Works"
          href="/#works"
          classes="mr-3 border-black hover:border-cyan-700 hover:text-cyan-700 w-40 text-center mb-3 md:mb-0"
        />
      </div>
      <div className="callToActionContainer flex items-center space-x-7 mt-14">
        <Link href="tel:+91 7736572490">
          <FontAwesomeIcon
            icon={faPhone}
            className="w-8 h-8  text-black hover:scale-125 transition-all ease-linear"
          />
        </Link>

        <Link href="mailto:masterdevsabith@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="w-8 h-8 text-black hover:scale-125 transition-all ease-linear"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
