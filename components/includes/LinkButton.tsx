import Link from "next/link";
import React from "react";

interface LinkButtonProps {
  title: string;
  href: string;
  classes?: string;
}

const LinkButton = ({ title, href, classes }: LinkButtonProps) => {
  return (
    <Link href={href} className={`px-4 py-3 font-bold border-2 ${classes}`}>
      {title}
    </Link>
  );
};

export default LinkButton;
