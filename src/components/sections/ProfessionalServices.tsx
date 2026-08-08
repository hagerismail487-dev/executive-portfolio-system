import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";
import ServiceCard from "@/components/ui/ServiceCard";

import { services } from "@/data/services";

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

        {/* Subtle Grid */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.35]

            bg-[linear-gradient(to_right,#EAF1FA_1px,transparent_1px),linear-gradient(to_bottom,#EAF1FA_1px,transparent_1px)]

            bg-[size:48px_48px]
          "
        />

        {/* Top Right Glow */}

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

        {/* Bottom Left Glow */}

        <div
          className="
            absolute
            -bottom-32
            -left-32

            h-[360px]
            w-[360px]

            rounded-full

            bg-[#F4F8FF]

            opacity-80

            blur-[120px]
          "
        />

      </div>

      {/* ========================================= */}
      {/* Content */}
      {/* ========================================= */}

      <Container>

        <div className="relative z-10">

          {/* ========================================= */}
          {/* Section Intro */}
          {/* ========================================= */}

          <SectionIntro
            eyebrow="Services"
            title="Professional Services"
            description="Professional services that help organizations transform business data into executive insights, strategic reporting, and confident business decisions."
            align="center"
            className="
              mx-auto
              mb-10
              max-w-[720px]
            "
          />

          {/* ========================================= */}
          {/* Services Grid */}
          {/* ========================================= */}

          <div
            className="
              grid
              gap-5

              md:grid-cols-2

              lg:gap-6
            "
          >

            {services.map((service, index) => (

              <div
                key={service.slug}
                className="
                  group
                  relative
                "
              >

                <ServiceCard
                  {...service}
                />

              </div>

            ))}

          </div>

        </div>

      </Container>

    </Section>
  );
}