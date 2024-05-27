import React from "react";

interface KeyPointsProps {
  count: string;
  title: string;
  desc: string;
}

const KeyPoints = ({ count, title, desc }: KeyPointsProps) => {
  return (
    <div className="w-full lg:w-1/4 flex flex-col items-start lg:items-center">
      <div className="p-2 bg-black rounded-full w-10 h-10 flex items-center justify-center mb-4">
        <h2 className="text-white inline font-bold">{count}</h2>
      </div>
      <div>
        <h2 className="text-xl text-left font-semibold mb-2">{title}</h2>
        <p className="text-left">{desc}</p>
      </div>
    </div>
  );
};

export default KeyPoints;
