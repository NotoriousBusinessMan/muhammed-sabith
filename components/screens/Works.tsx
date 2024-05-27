"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "../includes/Cards";

const Works = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="works" className="worksSection px-20 py-36 w-full">
      <div className="top mb-20">
        <h1 className="font-semibold text-center md:text-left text-3xl md:text-6xl mb-4">
          My Past Projects for My Clients
        </h1>
      </div>
      <div className="bottom">
        <Slider {...settings}>
          <div>
            <Cards
              img_url="/one.png"
              title="Alex Hormozi Portfolio"
              paragraph="A true amazing website to showcase his skills for the vast majority"
            />
          </div>
          <div>
            <Cards
              img_url="/two.png"
              title="Alex Hormozi Portfolio"
              paragraph="A true amazing website to showcase his skills for the vast majority"
            />
          </div>
          <div>
            <Cards
              img_url="/three.png"
              title="Alex Hormozi Portfolio"
              paragraph="A true amazing website to showcase his skills for the vast majority"
            />
          </div>
          <div>
            <Cards
              img_url="/four.png"
              title="Alex Hormozi Portfolio"
              paragraph="A true amazing website to showcase his skills for the vast majority"
            />
          </div>
          <div>
            <Cards
              img_url="/one.jpeg"
              title="Alex Hormozi Portfolio"
              paragraph="A true amazing website to showcase his skills for the vast majority"
            />
          </div>
          <div>
            <Cards
              img_url="/two.png"
              title="Alex Hormozi Portfolio"
              paragraph="A true amazing website to showcase his skills for the vast majority"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Works;
