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

            rounded-[30px]

            border
            border-[#E8EEF7]

            bg-white

            shadow-[0_24px_60px_rgba(18,58,99,0.08)]
          "
        >

          {/* ========================================= */}
          {/* Background */}
          {/* ========================================= */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            {/* Top Left Dots */}

            <div className="absolute left-6 top-6 opacity-15">

              <div className="grid grid-cols-7 gap-3">

                {Array.from({ length: 49 }).map((_, i) => (

                  <div
                    key={i}
                    className="h-1 w-1 rounded-full bg-[#C8DBFF]"
                  />

                ))}

              </div>

            </div>

            {/* Top Right Glow */}

            <div className="absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full bg-[#EEF5FF] opacity-40 blur-3xl" />

            {/* Bottom Left Glow */}

            <div className="absolute -bottom-12 -left-12 h-60 w-60 rounded-full bg-[#F4F8FF] opacity-80 blur-3xl" />

          </div>

          {/* ========================================= */}
          {/* Content */}
          {/* ========================================= */}

          <div className="relative z-10 px-6 py-10 sm:px-8 lg:px-14 lg:py-14">

            <SectionIntro
              eyebrow="Services"
              title="Professional Services"
              description="Professional services that help organizations transform business data into executive insights, strategic reporting, and confident business decisions."
              align="center"
              className="mx-auto mb-14 max-w-[760px]"
            />

            <div className="grid gap-6 md:grid-cols-2">
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