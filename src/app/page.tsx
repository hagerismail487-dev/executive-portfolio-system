import Hero from "@/components/sections/Hero";
import CreatingBusinessValue from "@/components/sections/CreatingBusinessValue";
import CoreExpertise from "@/components/sections/CoreExpertise";
import CaseStudies from "@/components/sections/CaseStudies";
import ProfessionalServices from "@/components/sections/ProfessionalServices";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CreatingBusinessValue />
      <CoreExpertise />
      <CaseStudies />
      <ProfessionalServices />
      <Contact />
    </>
  );
}