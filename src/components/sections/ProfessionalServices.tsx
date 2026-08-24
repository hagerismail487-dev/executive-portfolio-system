import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";
import ServiceCard from "@/components/ui/ServiceCard";

import { services } from "@/data/services";

const serviceCapabilities: Record<string, string[]> = {
  "executive-dashboards": [
    "Executive Reporting Dashboard",
    "KPI & Performance Views",
    "Management Reporting Pack",
  ],

  "mis-reporting-systems": [
    "MIS Reporting Structure",
    "Standard Reporting Templates",
    "Management Reports",
  ],

  "business-intelligence": [
    "BI Analysis Framework",
    "Data Modeling",
    "KPI & Analytical Models",
  ],

  "performance-analytics": [
    "KPI Framework",
    "Performance Reports",
    "Trend Analysis",
  ],
};

export default function ProfessionalServices() {
  return (
    <Section
      id="services"
      background="white"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        lg:py-20
      "
    >
      {/* ========================================= */}
      {/* Background */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -right-32
            -top-32
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#EEF5FF]
            opacity-60
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -bottom-32
            -left-32
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#F4F8FF]
            opacity-70
            blur-[120px]
          "
        />
      </div>

      {/* ========================================= */}
      {/* Content */}
      {/* ========================================= */}

      <Container>
        <div className="relative z-10">
          <SectionIntro
            eyebrow="Services"
            title="Professional Services"
            description="Practical data and reporting solutions that turn business information into clearer performance visibility and better decisions."
            align="center"
            className="
              mx-auto
              mb-10
              max-w-[700px]
            "
          />

          <div
            className="
              grid
              gap-[18px]
              md:grid-cols-2
            "
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                {...service}
                number={String(index + 1).padStart(2, "0")}
                capabilities={serviceCapabilities[service.slug] ?? []}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
