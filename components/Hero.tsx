// "use client";

// import { useState, useRef } from "react";
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import LocationSearchBar from "./LocationSearchBar";
// import { TypewriterEffect } from "@/components/ui/typewriter-effect";
// import { CaretDoubleLeft, CaretDoubleRight, CaretDown } from "@phosphor-icons/react";

// export const COLORS = ["#Ed8936", "#48bb78", "#F56565"];
// export const IMAGE = ["/IMG_1616_11zon.jpg", "/GOPR1013.png", "/SAM_1815.png"];

// const Hero = () => {
//   const words = [
//     { text: "Have " },
//     { text: "problems" },
//     { text: "rent" },
//     { text: "or" },
//     { text: "buying" },
//     { text: "Concrete?" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carouselRef = useRef(null);

//   const handlePrev = () => {
//     if (carouselRef.current) {
//       carouselRef.current.decrement();
//     }
//   };

//   const handleNext = () => {
//     if (carouselRef.current) {
//       carouselRef.current.increment();
//     }
//   };

//   const handleScrollDown = () => {
//     window.scrollTo({
//       top: window.innerHeight,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div
//       style={{
//         top: 0,
//         backgroundImage: `url('${IMAGE[currentIndex]}')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//       className="relative border-b-2 max-container padding-container flex flex-col-reverse gap-5 pb-32 md:gap-28 lg:py-20 py-0 xl:flex-row"
//     >
//       <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
//         <h1 className="text-4xl sm:text-start text-center">
//           <TypewriterEffect words={words} />
//         </h1>
//         <p className="text-md mt-6 xl:max-w-[520px] my-11">
//           At Farrasindo Perkasa, we have all the solutions for you, from heavy
//           equipment rental, to precast concrete we have it all.
//         </p>
//         <div className="flex flex-col w-full gap-3 sm:flex-row">
//           <LocationSearchBar />
//         </div>
//       </div>

//       <div className="relative flex flex-col items-center xl:w-1/2">
//         <Carousel
//           ref={carouselRef}
//           showArrows={false}
//           showStatus={false}
//           showIndicators={false}
//           showThumbs={false}
//           selectedItem={currentIndex}
//           onChange={index => setCurrentIndex(index)}
//           infiniteLoop
//           autoPlay
//           interval={3000}
//           className="hidden"
//         >
//           {IMAGE.map((src, index) => (
//             <div key={index}>
//               <img src={src} alt={`Slide ${index}`} />
//             </div>
//           ))}
//         </Carousel>
//       </div>

//       <button
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full text-white"
//         onClick={handlePrev}
//       >
//         <CaretDoubleLeft size={32} />
//       </button>
//       <button
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full text-white"
//         onClick={handleNext}
//       >
//         <CaretDoubleRight size={32} />
//       </button>
//       <button
//         className="absolute animate-bounce bottom-2 left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 rounded-full text-white"
//         onClick={handleScrollDown}
//       >
//         <CaretDown size={32} />
//       </button>
//     </div>
//   );
// };

// export default Hero;

"use client";

import { useState, useRef } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LocationSearchBar from "./LocationSearchBar";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { CaretDoubleLeft, CaretDoubleRight, CaretDown } from "@phosphor-icons/react";

export const COLORS = ["#Ed8936", "#48bb78", "#F56565"];
export const IMAGE = ["/IMG_1616_11zon.jpg", "/GOPR1013.png", "/SAM_1815.png"];

const Hero = () => {
  const words = [
    { text: "Have " },
    { text: "problems" },
    { text: "rent" },
    { text: "or" },
    { text: "buying" },
    { text: "Concrete?" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? IMAGE.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === IMAGE.length - 1 ? 0 : prevIndex + 1));
  };

  // const handleScrollDown = () => {
  //   window.scrollTo({
  //     top: window.innerHeight,
  //     behavior: "smooth",
  //   });
  // };

  // const handleScrollDown = () => {
  //   if (typeof window !== 'undefined') {
  //     window.scrollTo({
  //       top: window.innerHeight,
  //       behavior: "smooth",
  //     });
  //   }
  // };
  

  return (
    <div
      style={{
        top: 0,
        backgroundImage: `url('${IMAGE[currentIndex]}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative border-b-2 max-container padding-container flex flex-col-reverse gap-5 pb-32 md:gap-28 lg:py-20 py-0 xl:flex-row"
    >
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="text-4xl sm:text-start text-center">
          <TypewriterEffect words={words} />
        </h1>
        <p className="text-md mt-6 xl:max-w-[520px] my-11">
          At Farrasindo Perkasa, we have all the solutions for you, from heavy
          equipment rental, to precast concrete we have it all.
        </p>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <LocationSearchBar />
        </div>
      </div>

      <div className="relative flex flex-col items-center xl:w-1/2">
        <Carousel
          ref={carouselRef}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          selectedItem={currentIndex}
          onChange={index => setCurrentIndex(index)}
          infiniteLoop
          autoPlay
          interval={3000}
          className="hidden"
        >
          {IMAGE.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Slide ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full text-white"
        onClick={handlePrev}
      >
        <CaretDoubleLeft size={32} />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full text-white"
        onClick={handleNext}
      >
        <CaretDoubleRight size={32} />
      </button>
      {/* <button
        className="absolute animate-bounce bottom-2 left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 rounded-full text-white"
        onClick={handleScrollDown}
      >
        <CaretDown size={32} />
      </button> */}
    </div>
  );
};

export default Hero;
