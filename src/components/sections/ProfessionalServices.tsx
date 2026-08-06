import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";
import ServiceCard from "@/components/ui/ServiceCard";

import { services } from "@/data/services";

export default function ProfessionalServices() {
  return (
    <Section
      id="services"
      className="relative overflow-hidden bg-[#FBFCFE]"
    >
      <Container>

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-[#E8EEF7]
            bg-white
            shadow-[0_40px_100px_rgba(18,58,99,0.10)]
          "
        >

          {/* ========================================= */}
          {/* Background */}
          {/* ========================================= */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            {/* Top Left Dots */}

            <div className="absolute left-8 top-8 opacity-20">

              <div className="grid grid-cols-7 gap-4">

                {Array.from({ length: 49 }).map((_, i) => (

                  <div
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-[#C8DBFF]"
                  />

                ))}

              </div>

            </div>

            {/* Top Right Glow */}

            <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#EEF5FF] opacity-40 blur-3xl" />

            {/* Bottom Left Glow */}

            <div className="absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-[#F4F8FF] opacity-80 blur-3xl" />

          </div>

          {/* ========================================= */}
          {/* Content */}
          {/* ========================================= */}

          <div className="relative z-10 px-8 py-16 sm:px-10 lg:px-20 lg:py-20">

            <SectionIntro
              eyebrow="Services"
              title="Professional Services"
              description="Professional services that help organizations transform business data into executive insights, strategic reporting, and confident business decisions."
              align="center"
              className="mx-auto mb-20 max-w-3xl"
            />

            {/* ========================================= */}
            {/* Services Grid */}
            {/* ========================================= */}

            <div className="grid gap-8 md:grid-cols-2">
                          {services.map((service) => (

              <div
                key={service.slug}
                className="group"
              >

                <ServiceCard
                  {...service}
                />

              </div>

            ))}

          </div>

        </div>

        </div>

      </Container>

    </Section>
  );
}