"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "../includes/Cards";
import { Autoplay } from "swiper/modules";

const Works = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
    <section
      id="works"
      className="worksSection px-8 md:px-20 py-20 md:py-36 w-full">
      <div className="top mb-20">
        <h1 className="font-semibold text-center md:text-left text-3xl md:text-6xl mb-4">
          My Past Projects for My Clients
        </h1>
      </div>
      <div className="bottom">
        <Slider {...settings}>
          <div>
            <Cards
              img_url="/bmghs.png"
              title="BMG HS"
              paragraph="A proffessional website I made for my School. Including Dashboard functionality"
            />
          </div>
          <div>
            <Cards
              img_url="/gym.png"
              title="Website For Gym"
              paragraph="I've made this website for a gym, which increased their online presence."
            />
          </div>
          <div>
            <Cards
              img_url="/math.png"
              title="A Math game Website"
              paragraph="Suitable for kids and adults to increase their maths skills."
            />
          </div>
          <div>
            <Cards
              img_url="/aloha.png"
              title="A personal Portfolio"
              paragraph="A true amazing website to showcase his skills for the vast majority"
            />
          </div>
          <div>
            <Cards
              img_url="/frugo.png"
              title="Frugo Stores"
              paragraph="E commerce website for Sports and accessories to showcase"
            />
          </div>
          <div>
            <Cards
              img_url="/boogie.png"
              title="Boogie Stores"
              paragraph="A furniture selling website to showcase the different furnitures"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Works;
