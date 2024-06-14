import Features from "@/components/Features";
import Product from "@/components/Product";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import Testimonial from "@/components/Testimonial";
import PortfolioLayout from "@/components/Portfolio";
import Partners from "@/components/Partners";
import Location from "@/components/Location";

export const metadata: Metadata = {
  title: "Home - Farrasindo Perkasa",
  icons: {
    icon: "/FP GROUP.png",
  },
  description: "Farrasindo Perkasa homepage",
  keywords: "concrete pump, batching plant, mixer, readymix, Farrasindo",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Product />
      {/* <PortfolioLayout /> */}
      <Testimonial />
      <Location />
      <Partners />
      {/* <GetApp /> */}
    </>
  );
}
