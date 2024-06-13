"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LocationSearchBar from "./LocationSearchBar";
import { TypewriterEffect } from "./ui/typewriter-effect";

const words = [
  {
    text: "Have ",
  },
  {
    text: "problems",
  },
  {
    text: "rent",
    className: "text-green-500",
  },
  {
    text: "or",
  },
  {
    text: "buying",
    className: "text-red-500",
  },
  {
    text: "Concrete?",
    className: "text-orange-500",
  },
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-white">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        className="h-full"
      >
        <div className="max-container padding-container flex items-center justify-center h-full bg-white">
          <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <h1 className="text-4xl sm:text-start text-center">
              <TypewriterEffect words={words} />
              {/* Have problems renting or buying concrete? */}
            </h1>
            <p className="text-md mt-6 xl:max-w-[520px] my-11">
              At Farrasindo Perkasa, we have all the solutions for you, from
              heavy equipment rental, to precast concrete we have it all.
            </p>
            <div className="flex flex-col w-full gap-3 sm:flex-row">
              {/* <Button type="button" title="Check Product" variant="btn_orange" /> */}
              <LocationSearchBar />
            </div>
          </div>
          <img
            src="/IMG_1616.png"
            alt="Hero Image"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Duplicate the div above two more times to create three images */}
        <div className="max-container padding-container flex items-center justify-center h-full bg-white">
          <div className="flex flex-col items-start justify-center max-w-2xl px-6 py-12 space-y-6">
            <h1 className="text-4xl font-bold">Redmi 13</h1>
            <p className="text-lg">
              Auto glow up
              <br />
              Rp 1,999,000
            </p>
            <p className="text-sm">Penjualan perdana 6 Juni 2024</p>
            <button className="px-4 py-2 font-bold text-white bg-black rounded-full">
              Learn More
            </button>
          </div>
          <img
            src="/IMG_1616.png"
            alt="Hero Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="max-container padding-container flex items-center justify-center h-full bg-white">
          <div className="flex flex-col items-start justify-center max-w-2xl px-6 py-12 space-y-6">
            <h1 className="text-4xl font-bold">Redmi 13</h1>
            <p className="text-lg">
              Auto glow up
              <br />
              Rp 1,999,000
            </p>
            <p className="text-sm">Penjualan perdana 6 Juni 2024</p>
            <button className="px-4 py-2 font-bold text-white bg-black rounded-full">
              Learn More
            </button>
          </div>
          <img
            src="/IMG_1616.png"
            alt="Hero Image"
            className="object-cover w-full h-full"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSection;
