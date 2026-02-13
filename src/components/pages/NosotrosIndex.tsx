"use client";

import AboutFooter from "../Nosotros/AboutFooter";
import AboutHero from "../Nosotros/AboutHero";
import ImpactMetrics from "../Nosotros/ImpactMetrics";
import InnovationGallery from "../Nosotros/InnovationGallery";
import MissionVision from "../Nosotros/MissionVision";
import QualityCommitment from "../Nosotros/QualityCommitment";
import TeamSection from "../Nosotros/TeamSection";
import TechProcess from "../Nosotros/TechProcess";
import WhyChoose from "../Nosotros/WhyChoose";


export default function PrivacyIndex() {
  return (
      <section className="w-full h-full pt-16">
        <AboutHero/>
        <MissionVision/>
        <WhyChoose />
        <TechProcess />
        <QualityCommitment />
        <ImpactMetrics/>
        <InnovationGallery/>
        <TeamSection/>
        <AboutFooter/>

      </section>
  );
}
