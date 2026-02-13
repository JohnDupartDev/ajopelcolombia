"use client";

import CtaBanner from "../Home/CtaBanner";
import Differentiators from "../Home/Differentiators";
import FaqSection from "../Home/FaqSection";
import FeaturesBar from "../Home/FeaturesBar";
import FinalCTA from "../Home/FinalCTA";
import HeroSection from "../Home/HeroSection";
import ProcessSection from "../Home/ProcessSection";
import ProductGrid from "../Home/ProductGrid";
import PromiseSection from "../Home/PromiseSection";
import Testimonials from "../Home/Testimonials";




export default function PrivacyIndex() {
  return (
      <section className="w-full h-full pt-28">
        <HeroSection />
        <FeaturesBar />
        <PromiseSection/>
        <Differentiators/>
        <ProcessSection />
        <CtaBanner />
        <ProductGrid />
        <Testimonials/>
        <FaqSection/>
      <FinalCTA />
      </section>
  );
}
