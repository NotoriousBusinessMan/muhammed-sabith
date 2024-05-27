"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import LinkButton from "./LinkButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false); // Optional: Close the menu when a link is clicked
  };

  return (
    <nav className="w-full flex items-center justify-end sm:justify-center py-6 px-6">
      <div className="middle flex items-center justify-center hidden sm:block">
        <ul className="flex items-center">
          <li className="mr-10 font-semibold text-black-text hover:text-gray-950">
            <Link href="/#about">ABOUT</Link>
          </li>
          <li className="mr-10 font-semibold text-black-text hover:text-gray-950">
            <Link href="/#skills">SKILLS</Link>
          </li>
          <li className="mr-10 font-semibold text-black-text hover:text-gray-950">
            <Link href="/#works">WORKS</Link>
          </li>
          <li className=" font-semibold text-black-text hover:text-gray-950">
            <Link href="/#contact">CONTACT</Link>
          </li>
        </ul>
      </div>
      <div className="right sm:hidden">
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          className="w-6 justify-self-start "
          onClick={toggleMenu}
        />
      </div>

      {/* ham code */}
      <div
        className={`hamMenu flex flex-col items-center absolute top-0 left-0 w-full h-screen transition-transform duration-300 px-8 py-8 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="top">
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            className="w-6 justify-self-start "
            onClick={toggleMenu}
          />
        </div>
        <div className="bottom mt-24">
          <ul className="flex flex-col items-center">
            <li className="mb-10 font-semibold text-center text-gray-950">
              <Link href="/#about" onClick={handleLinkClick}>
                ABOUT
              </Link>
            </li>
            <li className="mb-10 font-semibold text-center text-gray-950">
              <Link href="/#skills" onClick={handleLinkClick}>
                SKILLS
              </Link>
            </li>
            <li className="mb-10 font-semibold text-center text-gray-950">
              <Link href="/#works" onClick={handleLinkClick}>
                WORKS
              </Link>
            </li>
            <li className="font-semibold text-center text-gray-950">
              <Link href="/#contact" onClick={handleLinkClick}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="calltoactions flex flex-col items-center mt-12"
          onClick={handleLinkClick}>
          <LinkButton
            title="Contact Me"
            href="/#contact"
            classes="mb-5 border-black hover:border-cyan-700 hover:text-cyan-700 w-40 text-center md:mb-0"
          />
          <LinkButton
            title="Hire Me"
            href="/"
            classes="mb-5 border-black hover:border-cyan-700 hover:text-cyan-700 w-40 text-center  md:mb-0"
          />
          <LinkButton
            title="See My Works"
            href="/#works"
            classes="mb-5 border-black hover:border-cyan-700 hover:text-cyan-700 w-40 text-center  md:mb-0"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
