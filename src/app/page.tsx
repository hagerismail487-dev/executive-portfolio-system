import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import CreatingBusinessValue from "../components/sections/CreatingBusinessValue";
import CoreExpertise from "../components/sections/CoreExpertise";
import CaseStudies from "../components/sections/CaseStudies";
import ProfessionalServices from "../components/sections/ProfessionalServices";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CreatingBusinessValue />
      <CoreExpertise />
     < CaseStudies />
     <ProfessionalServices />
    </>
  );
}
