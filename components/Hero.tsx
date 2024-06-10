"use client";

import Image from "next/image";
import Button from "./Button";
import { PRODUCT } from "@/constants";
import { handleNext, handlePrev } from "@/utils/handler";
import { useState, useEffect } from "react";
import { CaretDoubleLeft, CaretDoubleRight } from "@phosphor-icons/react";
import LocationSearchBar from "./LocationSearchBar";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export const COLORS = ["#Ed8936", "#48bb78", "#F56565"];
const Hero = () => {
  const words = [
    {
      text: "Have ",
    },
    {
      text: "problems",
    },
    {
      text: "rent",
      // className: "text-green-500",
    },
    {
      text: "or",
    },
    {
      text: "buying",
      // className: "text-red-500",
    },
    {
      text: "Concrete?",
      // className: "text-orange-500",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const [bgColor, setBgColor] = useState(COLORS[0]);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setBgColor(COLORS[currentIndex]);
  }, [currentIndex]);

  return (
    <div className="border-b-2 max-container padding-container flex flex-col-reverse gap-5 pb-32 md:gap-28 lg:py-20 py-0 xl:flex-row">
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

      <div className="relative flex flex-col items-center">
        <div
          className="relative flex items-center justify-center"
          style={{
            width: "400px",
            height: "400px",
            overflow: "hidden",
          }}
        >
          <div
            className="absolute bg-cover bg-center rounded-lg"
            style={{
              backgroundColor: bgColor,
              width: "450px",
              height: "450px",
              transform: `rotate(${rotation}deg)`,
              transition: "transform 0.5s ease",
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              zIndex: 1,
            }}
          ></div>
          <div
            className={`absolute ${animationClass}`}
            style={{
              width: "400px",
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: "300px",
                height: "300px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={PRODUCT[currentIndex].image}
                alt={PRODUCT[currentIndex].title}
                width={300}
                height={300}
                className="object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute inset-y-0 flex items-center justify-between w-full px-4 hidden sm:flex"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <button
            onClick={() =>
              handlePrev(
                setCurrentIndex,
                setAnimationClass,
                setBgColor,
                setRotation,
                rotation
              )
            }
            className="text-orange-500 bg-transparent z-50 hover:bg-orange-500 hover:text-white px-2 py-1 rounded-md transition-all duration-300"
            style={{
              position: "absolute",
              left: "-50px",
              transform: "translateY(-50%)",
            }}
          >
            <CaretDoubleLeft size={32} />
          </button>
          <button
            onClick={() =>
              handleNext(
                setCurrentIndex,
                setAnimationClass,
                setBgColor,
                setRotation,
                rotation
              )
            }
            className="text-orange-500 bg-transparent z-50 hover:bg-orange-500 hover:text-white px-2 py-1 rounded-md transition-all duration-300"
            style={{
              position: "absolute",
              right: "-50px",
              transform: "translateY(-50%)",
            }}
          >
            <CaretDoubleRight size={32} />
          </button>
        </div>
        <div className="flex w-full justify-between mt-4 sm:hidden">
          <button
            onClick={() =>
              handlePrev(
                setCurrentIndex,
                setAnimationClass,
                setBgColor,
                setRotation,
                rotation
              )
            }
            className="text-orange-500 bg-transparent hover:bg-orange-500 hover:text-white px-2 py-1 rounded-md transition-all duration-300"
          >
            <CaretDoubleLeft size={32} />
          </button>
          <button
            onClick={() =>
              handleNext(
                setCurrentIndex,
                setAnimationClass,
                setBgColor,
                setRotation,
                rotation
              )
            }
            className="text-orange-500 bg-transparent hover:bg-orange-500 hover:text-white px-2 py-1 rounded-md transition-all duration-300"
          >
            <CaretDoubleRight size={32} />
          </button>
        </div>
      </div>
    </div>
    //     <section className="flex items-center justify-center">
    //       <Image
    //         src="/hero-image2.png"
    //         alt="hero image"
    //         width={1500}
    //         height={2}
    //         className="object-cover"
    //       />
    // <LocationSearchBar/>
    //     </section>
  );
};

export default Hero;
