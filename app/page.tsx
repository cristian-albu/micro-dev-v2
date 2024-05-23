import ContactFormSection from "@/components/sections/contact-form-section";
import HeroSection from "@/components/sections/hero-section";
import ModulesSection from "@/components/sections/modules-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ValuesSection from "@/components/sections/values-section";
import React from "react";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <ModulesSection />
      <ValuesSection />
      <TestimonialsSection />
      <ContactFormSection />
    </>
  );
};

export default Homepage;
