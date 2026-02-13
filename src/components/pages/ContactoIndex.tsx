"use client";

import ContactBenefits from "../Contacto/ContactBenefits";
import ContactHero from "../Contacto/ContactHero";
import ContactSuccess from "../Contacto/ContactSuccess";





export default function PrivacyIndex() {
  return (
      <section className="w-full h-full pt-16">
      <ContactHero/>
      <ContactBenefits />
      <ContactSuccess/>
      </section>
  );
}
