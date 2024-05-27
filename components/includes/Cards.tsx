import Image from "next/image";
import React from "react";

interface CardProps {
  img_url: string;
  title: string;
  paragraph: string;
}

const Cards = ({ img_url, title, paragraph }: CardProps) => {
  return (
    <div className="bg-white mr-4 rounded-lg overflow-hidden pb-4">
      <div className="top mb-4 overflow-hidden">
        <Image
          src={img_url}
          alt="card_image"
          width={200}
          height={200}
          className="w-full transition-all ease-linear hover:scale-150 hover:brightness-50"
        />
      </div>
      <div className="bottom px-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm font-normal">{paragraph}</p>
      </div>
    </div>
  );
};

export default Cards;
