import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-center py-6">
      <div className="middle flex items-center justify-center">
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
    </nav>
  );
};

export default Navbar;
