import Image from "next/image";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Hero() {
  return (
    <Section
      className="relative overflow-hidden bg-[#FBFCFE] pt-10 lg:pt-14"
    >
      {/* ========================================= */}
      {/* Background */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute right-[-140px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#2E63D3]/8 blur-[100px]" />

      <div className="pointer-events-none absolute -left-24 bottom-0 h-[300px] w-[300px] rounded-full bg-[#EEF5FF] blur-[100px]" />

      <Container>

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* ========================================= */}
          {/* Left Content */}
          {/* ========================================= */}

          <div className="max-w-[470px]">

            <Badge>
              Senior Data Analyst | MIS Specialist
            </Badge>

            <SectionTitle
              as="h1"
              className="mt-4"
            >
              <>
                Transforming
                <br />
                Business Data
                <br />
                into Executive
                <br />
                Decisions.
              </>
            </SectionTitle>

            <div className="mt-4 h-1 w-20 rounded-full bg-[#2563EB]" />

            <p
              className="
                mt-6
                max-w-[470px]
                text-[16px]
                leading-7
                text-slate-600
              "
            >
              Transforming business data into executive clarity through
              strategic reporting, performance intelligence, and MIS
              frameworks that support confident decision-making.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
                            <Button
                href="#about"
                size="lg"
                className="min-w-[185px]"
              >
                About Me
              </Button>

              <Button
                variant="secondary"
                href="/resume.pdf"
                size="lg"
                className="min-w-[185px]"
              >
                Download Resume
              </Button>

            </div>

          </div>

          {/* ========================================= */}
          {/* Right Side */}
          {/* ========================================= */}

          <div className="relative flex justify-center lg:justify-end">

            {/* Background Glow */}

            <div
              className="
                absolute
                h-[360px]
                w-[360px]
                rounded-full
                bg-[#2563EB]/8
                blur-[90px]
              "
            />

            {/* Dashboard Card */}

            <div
              className="
                relative

                overflow-hidden

                rounded-[26px]

                border
                border-[#E7EEF8]

                bg-white

                shadow-[0_24px_60px_rgba(18,58,99,0.10)]

                transition-all
                duration-500

                hover:-translate-y-2
                hover:shadow-[0_34px_70px_rgba(18,58,99,0.14)]
              "
            >
                            {/* Dashboard Image */}

              <Image
                src="/images/hero/executive-dashboard-preview.webp"
                alt="Executive Dashboard Preview"
                width={500}
                height={320}
                priority
                className="
                  block
                  w-full
                  max-w-[500px]
                  h-auto
                  object-cover
                "
              />

              {/* Bottom Caption */}

              <div
                className="
                  border-t
                  border-[#EEF3FA]

                  bg-white

                  px-5
                  py-4
                "
              >

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#2563EB]
                  "
                >
                  Featured Dashboard
                </span>

                <h3
                  className="
                    mt-2
                    text-[19px]
                    font-bold
                    tracking-[-0.02em]
                    text-[#102A56]
                  "
                >
                  Executive Performance Dashboard
                </h3>

                <p
                  className="
                    mt-2
                    text-[14px]
                    leading-6
                    text-slate-600
                  "
                >
                  Interactive executive reporting designed to transform
                  operational data into strategic business decisions.
                </p>

              </div>

            </div>

          </div>
                  </div>

      </Container>

    </Section>
  );
}