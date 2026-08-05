import Hero from "@/components/sections/Hero";
import CreatingBusinessValue from "@/components/sections/CreatingBusinessValue";
import CoreExpertise from "@/components/sections/CoreExpertise";
import ProfessionalServices from "@/components/sections/ProfessionalServices";
import CaseStudies from "@/components/sections/FeaturedCaseStudies";
import FeaturedCaseStudies from "@/components/sections/FeaturedCaseStudies";
import Contact from "@/components/sections/Contact";


export default function Home() {
  return (
    <>
      <Hero />
      <CreatingBusinessValue />
      <CoreExpertise />
      <CaseStudies />
      <ProfessionalServices />
      <FeaturedCaseStudies />
      <Contact />
    </>
  );
}