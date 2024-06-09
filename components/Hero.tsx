"use client";

import Image from "next/image";
import Button from "./Button";
import { PRODUCT } from "@/constants";
import { useState } from "react";
import { CaretDoubleLeft, CaretDoubleRight } from "@phosphor-icons/react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  console.log(PRODUCT[currentIndex].variant);

  const currentProduct = PRODUCT[currentIndex];
  // console.log(currentProduct)

  const handlePrev = () => {
    setAnimationClass("fade-out-left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? PRODUCT.length - 1 : prevIndex - 1
      );
      setAnimationClass("fade-in-left");
    }, 500);
  };

  const handleNext = () => {
    setAnimationClass("fade-out-right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === PRODUCT.length - 1 ? 0 : prevIndex + 1
      );
      setAnimationClass("fade-in-right");
    }, 500);
  };

  return (
    <section>
      <div
        className={`border-b-2 max-container padding-container flex flex-col-reverse gap-5 pb-32 md:gap-28 lg:py-20 py-10 xl:flex-row bg-${currentProduct}`}
      >
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <h1 className="text-4xl capitalize">{PRODUCT[currentIndex].title}</h1>
          <p className="text-md mt-6 xl:max-w-[520px] my-11">
            {PRODUCT[currentIndex].description}
          </p>

          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button type="button" title="Check Product" variant="btn_orange" />
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="relative flex flex-1 sm:items-start">
            <Image
              src={PRODUCT[currentIndex].image}
              alt={PRODUCT[currentIndex].title}
              width={500}
              height={500}
              className={`w-[500px] rounded-3xl ${animationClass}`}
            />
          </div>
          <div className="flex justify-between w-full mt-4">
            <button
              onClick={handlePrev}
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
    </section>
  );
};

export default Hero;
