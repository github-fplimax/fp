import React from "react";

const images = [
  "/BPR.png",
  "/GUNUNG BUMI PERKASA.png",
  "/FRESH BETON INDONESIA-.png",
  "/CITI PUMP INDONESIA.png",
  "/FARRASINDO PERKASA.png",
  "/BPR.png",
  "/GUNUNG BUMI PERKASA.png",
  "/FRESH BETON INDONESIA-.png",
  "/CITI PUMP INDONESIA.png",
  "/FARRASINDO PERKASA.png",
  "/BPR.png",
  "/GUNUNG BUMI PERKASA.png",
  "/FRESH BETON INDONESIA-.png",
  "/CITI PUMP INDONESIA.png",
  "/FARRASINDO PERKASA.png",
  "/BPR.png",
  "/GUNUNG BUMI PERKASA.png",
  "/FRESH BETON INDONESIA-.png",
  "/CITI PUMP INDONESIA.png",
  "/FARRASINDO PERKASA.png",
];

const Partners = () => {
  return (
    <div className="marquee">
      <div className="marqueeContent">
        {images.map((src, index) => (
          <img
            className="image"
            key={index}
            src={src}
            alt={`Partner ${index + 1}`}
          />
        ))}
        {images.map((src, index) => (
          <img
            className="image"
            key={index + images.length}
            src={src}
            alt={`Partner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
