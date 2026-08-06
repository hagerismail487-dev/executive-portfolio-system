import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/about-preview/AboutPreview";
import CreatingBusinessValue from "@/components/sections/CreatingBusinessValue";
import CoreExpertise from "@/components/sections/CoreExpertise";
import FeaturedCaseStudies from "@/components/sections/FeaturedCaseStudies";
import ProfessionalServices from "@/components/sections/ProfessionalServices";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />

      <AboutPreview />

      <CreatingBusinessValue />

      <CoreExpertise />

      <FeaturedCaseStudies />

      <ProfessionalServices />

      <Contact />
    </>
  );
}