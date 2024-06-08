"use client";

import { TESTIMONIAL } from "@/constants";
import { CaretDoubleLeft, CaretDoubleRight } from "@phosphor-icons/react";
import Image from "next/image";
import React, { useState } from "react";

const Guide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const handleSlide = () => {
    setAnimationClass("fade-out");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === TESTIMONIAL.length - 1 ? 0 : prevIndex + 1
      );
      setAnimationClass("fade-in");
    }, 500); // Sesuaikan dengan durasi animasi fade-out
  };

  const handlePrev = () => {
    setAnimationClass("fade-out-left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? TESTIMONIAL.length - 1 : prevIndex - 1
      );
      setAnimationClass("fade-in-left");
    }, 500); // Sesuaikan dengan durasi animasi fade-out
  };

  const handleNext = () => {
    setAnimationClass("fade-out-right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === TESTIMONIAL.length - 1 ? 0 : prevIndex + 1
      );
      setAnimationClass("fade-in-right");
    }, 500); // Sesuaikan dengan durasi animasi fade-out
  };
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        {/* <Image src="/camp.svg" alt="camp" width={50} height={50} /> */}
        <p className="uppercase regular-18 -mt-1 mb-3 text-orange-500">
          Testimonial
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            What our customers are saying
          </h2>
          <div>
            <div className="flex flex-row gap-2">
              <Image
                src={TESTIMONIAL[currentIndex].image}
                alt="user"
                width={48}
                height={48}
                className="inline-block"
              />
              <h1 className="font-bold flex justify-center items-center text-center">{TESTIMONIAL[currentIndex].name}</h1>
            </div>
            <p className="regular-16 text-gray-30 xl:max-w-[520px]">
              {TESTIMONIAL[currentIndex].description}
            </p>
          </div>
          <div className="flex justify-between w-full mt-4">
            <button
              onClick={handlePrev}
              // className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
              className="text-orange-500 bg-transparent hover:bg-orange-500 hover:text-white px-2 py-1 rounded-md transition-all duration-300"
            >
              <CaretDoubleLeft size={32} />
            </button>
            <button
              onClick={handleNext}
              className="text-orange-500 bg-transparent hover:bg-orange-500 hover:text-white px-2 py-1 rounded-md transition-all duration-300"
            >
              <CaretDoubleRight size={32} />
            </button>
          </div>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        {/* <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        /> */}

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
