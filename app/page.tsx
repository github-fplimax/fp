import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import { Metadata } from "next";

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
      {/* <Camp /> */}
      {/* <Guide /> */}
      <Features />
      {/* <GetApp /> */}
    </>
  )
}
