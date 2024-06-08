// "use client";

// import Image from "next/image";
// import Button from "./Button";
// import { PRODUCT } from "@/constants";
// import { useState } from "react";
// import { ArrowCircleLeft, ArrowCircleRight, ArrowLeft, ArrowRight } from "@phosphor-icons/react";

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? PRODUCT.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === PRODUCT.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//   return (
//     <section className="max-container padding-container flex flex-col-reverse gap-5 pb-32 md:gap-28 lg:py-20 py-10 xl:flex-row">
//       {/* <div className="hero-map" /> */}

//       <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
//         {/* <Image
//           src="/camp.svg"
//           alt="camp"
//           width={50}
//           height={50}
//           className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
//         /> */}
//         <h1 className="text-4xl capitalize">{PRODUCT[currentIndex].title}</h1>
//         <p className="text-md mt-6 xl:max-w-[520px] my-11">
//           {PRODUCT[currentIndex].description}
//         </p>

//         {/* <div className="my-11 flex flex-wrap gap-5">
//           <div className="flex items-center gap-2">
//             {Array(5).fill(1).map((_, index) => (
//               <Image
//                 src="/star.svg"
//                 key={index}
//                 alt="star"
//                 width={24}
//                 height={24}
//               />
//             ))}
//           </div>

//           <p className="bold-16 lg:bold-20 text-blue-70">
//             198k
//             <span className="regular-16 lg:regular-20 ml-1">Ulasan Luar Biasa</span>
//           </p>
//         </div> */}

//         <div className="flex flex-col w-full gap-3 sm:flex-row">
//           <Button type="button" title="Check Product" variant="btn_orange" />
//           {/* <Button
//             type="button"
//             title="how farrasindo works?"
//             icon="/play.svg"
//             variant="btn_white_text"
//           /> */}
//         </div>
//       </div>

//       {/* <div className="relative flex flex-1 sm:items-start">
//         <Image
//           src="/concrete pump.png"
//           alt="hero"
//           width={1000}
//           height={1000}
//           className="  w-[1000px] rounded-3xl"
//         />
//       </div> */}
//       <div className="relative flex flex-col items-center">
//         <div className="relative flex flex-1 sm:items-start">
//           <Image
//             src={PRODUCT[currentIndex].image}
//             alt={PRODUCT[currentIndex].title}
//             width={500}
//             height={500}
//             className="w-[500px] rounded-3xl"
//           />
//         </div>
//         <div className="flex justify-between w-full mt-4">
//           <button
//             onClick={handlePrev}
//             className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
//           >
//            <ArrowLeft size={32} />
//           </button>
//           {/* <div className="text-center">
//           <h2>{PRODUCT[currentIndex].title}</h2>
//           <p>{PRODUCT[currentIndex].description}</p>
//         </div> */}
//           <button
//             onClick={handleNext}
//             className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
//           >
//             <ArrowRight size={32} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import Image from "next/image";
import Button from "./Button";
import { PRODUCT } from "@/constants";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CaretDoubleLeft,
  CaretDoubleRight,
} from "@phosphor-icons/react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const handleSlide = () => {
    setAnimationClass("fade-out");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === PRODUCT.length - 1 ? 0 : prevIndex + 1
      );
      setAnimationClass("fade-in");
    }, 500); // Sesuaikan dengan durasi animasi fade-out
  };

  const handlePrev = () => {
    setAnimationClass("fade-out-left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? PRODUCT.length - 1 : prevIndex - 1
      );
      setAnimationClass("fade-in-left");
    }, 500); // Sesuaikan dengan durasi animasi fade-out
  };

  const handleNext = () => {
    setAnimationClass("fade-out-right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === PRODUCT.length - 1 ? 0 : prevIndex + 1
      );
      setAnimationClass("fade-in-right");
    }, 500); // Sesuaikan dengan durasi animasi fade-out
  };

  return (
    <section className="border-b-2 max-container padding-container flex flex-col-reverse gap-5 pb-32 md:gap-28 lg:py-20 py-10 xl:flex-row">
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
    </section>
  );
};

export default Hero;
