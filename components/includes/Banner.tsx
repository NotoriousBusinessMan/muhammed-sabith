import React, { ReactNode } from "react";

interface BannerProps {
  title: string;
  content: ReactNode;
}
const Banner = ({ title, content }: BannerProps) => {
  return (
    <div className="bannerComponent px-12 py-12 bg-slate-900 flex flex-col md:flex-row items-center space-x-0 md:space-x-14 space-y-9 md:space-y-0">
      <div className="text-center md:text-left left w-full md:w-1/2 text-gray-400 text-2xl font-semibold flex flex-col items-center">
        <h5>{title}</h5>
      </div>
      <div className="right w-full md:w-1/2">
        <p className=" text-base text-gray-300 italic text-center">
          &quot;{content}&quot;
        </p>
      </div>
    </div>
  );
};

export default Banner;
