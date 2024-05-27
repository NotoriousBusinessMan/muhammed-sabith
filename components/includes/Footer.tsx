import React from "react";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-950 flex flex-col items-center justify-center">
      <div className="top mb-10 flex items-center space-x-10">
        <Link
          href="https://www.instagram.com/mr.sabith._.a5/"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="w-6 text-white"
          />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61550297444926"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            className="w-6 text-white"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/muhammed-sabith-as-8a2981211/"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="w-6 text-white"
          />
        </Link>
        <Link
          href="https://wa.me/7736572490?text=Hello%20I'm%20interested%20in%20your%20works%20!!!"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="2x"
            className="w-6 text-white"
          />
        </Link>
        <Link
          href="https://github.com/NotoriousBusinessMan"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="w-6 text-white"
          />
        </Link>
      </div>
      <div className="bottom">
        <h5 className="text-white font-medium text-sm">
          @2024 SABITH All Rights Reserved
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
