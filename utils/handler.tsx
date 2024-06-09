import React, { useState } from 'react'
import { PRODUCT } from "@/constants";


const COLORS = ["#f8d7da", "#d4edda", "#d1ecf1"]; // Array warna latar belakang
const [currentIndex, setCurrentIndex] = useState(0);
const [animationClass, setAnimationClass] = useState("");
const [bgColor, setBgColor] = useState(COLORS[0]); // State untuk warna latar belakang
const [rotation, setRotation] = useState(0); // State untuk rotasi latar belakang

export const handlePrev = () => {
    setAnimationClass("fade-out-left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex === 0 ? PRODUCT.length - 1 : prevIndex - 1;
        setBgColor(COLORS[newIndex % COLORS.length]); // Ubah warna latar belakang
        setRotation(rotation - 45); // Ubah rotasi latar belakang
        return newIndex;
      });
      setAnimationClass("fade-in-left");
    }, 500);
  };

export const handleNext = () => {
    setAnimationClass("fade-out-right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex === PRODUCT.length - 1 ? 0 : prevIndex + 1;
        setBgColor(COLORS[newIndex % COLORS.length]); // Ubah warna latar belakang
        setRotation(rotation + 45); // Ubah rotasi latar belakang
        return newIndex;
      });
      setAnimationClass("fade-in-right");
    }, 500);
  };