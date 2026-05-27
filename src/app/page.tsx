"use client";

import Hero from "@/components/home/Hero";
import Marquee from "@/components/ui/marquee";
import FeaturedWork from "@/components/home/FeaturedWork";
import Services from "@/components/home/Services";
import PricingSection from "@/components/home/Pricing";
import Process from "@/components/home/Process";
import AboutPreview from "@/components/home/AboutPreview";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/layout/Footer";
import { useState, useEffect } from "react";

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);
  return (
    <main style={{ backgroundColor: "#030303", minHeight: "100vh", width: "100%", overflowX: "hidden" }}>
      

      <Hero />

      <Marquee />

      <FeaturedWork />

      <Services />

      <PricingSection />

      <Process />

      <AboutPreview />

      <FAQ />

      <Footer />


      
    </main>
  );
}