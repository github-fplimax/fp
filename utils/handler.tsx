"use client"

import { Dispatch, SetStateAction } from "react";
import { PRODUCT } from "@/constants";

export const COLORS = ["Ed8936", "#Ed8936", "#F56565"] // Array warna latar belakang

export const handlePrev = (
  setCurrentIndex: Dispatch<SetStateAction<number>>,
  setAnimationClass: Dispatch<SetStateAction<string>>,
  setBgColor: Dispatch<SetStateAction<string>>,
  setRotation: Dispatch<SetStateAction<number>>,
  rotation: number
) => {
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

export const handleNext = (
  setCurrentIndex: Dispatch<SetStateAction<number>>,
  setAnimationClass: Dispatch<SetStateAction<string>>,
  setBgColor: Dispatch<SetStateAction<string>>,
  setRotation: Dispatch<SetStateAction<number>>,
  rotation: number
) => {
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
