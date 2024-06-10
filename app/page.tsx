import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Product from "@/components/Product";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: 'Home - Farrasindo Perkasa',
  icons : {
    icon: '/FP GROUP.png',
  },
  description: 'Farrasindo Perkasa homepage',
  keywords : 'concrete pump, batching plant, mixer, readymix, Farrasindo'
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Product/>
      {/* <Camp /> */}
      <Testimonial/>
      {/* <GetApp /> */}
    </>
  )
}
