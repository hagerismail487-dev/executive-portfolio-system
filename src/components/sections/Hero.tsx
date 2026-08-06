import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Hero() {
  return (
    <Section
      className="relative overflow-hidden bg-[#FBFCFE] pt-24 lg:pt-28"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute right-[-220px] top-[-180px] h-[620px] w-[620px] rounded-full bg-[#2E63D3]/10 blur-[140px]" />

      <Container>

        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2 xl:gap-24">

          {/* ========================================= */}
          {/* Left Content */}
          {/* ========================================= */}

          <div className="max-w-[560px]">

            <Badge>
              Senior Data Analyst | MIS Specialist
            </Badge>

            <SectionTitle
              as="h1"
              className="mt-8"
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

            {/* Accent */}

            <div className="mt-6 h-1 w-36 rounded-full bg-[#2563EB]" />

            {/* Description */}

            <p className="mt-10 max-w-[520px] text-lg leading-9 text-slate-600">

              Transforming business data into executive clarity through
              strategic reporting, performance intelligence, and MIS
              frameworks that support confident decision-making.

            </p>

            {/* Actions */}

            <div className="mt-14 flex flex-wrap gap-5">

              <Button
                size="lg"
                href="#about"
                className="min-w-[220px]"
              >
                About Me
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="/resume.pdf"
                className="min-w-[220px]"
              >
                Download Resume
              </Button>

            </div>

          </div>

          {/* ========================================= */}
          {/* Portrait */}
          {/* ========================================= */}
                    <div className="relative flex justify-center">

            {/* Background Glow */}

            <div
              className="
                absolute
                h-[520px]
                w-[520px]
                rounded-full
                bg-[#2563EB]/10
                blur-[120px]
              "
            />

            {/* Portrait Card */}

            <div
              className="
                relative

                flex
                h-[560px]
                w-[440px]

                items-center
                justify-center

                overflow-hidden

                rounded-[42px]

                border
                border-[#E7EEF8]

                bg-white

                shadow-[0_40px_100px_rgba(18,58,99,0.10)]
              "
            >

              {/* Inner Border */}

              <div
                className="
                  absolute
                  inset-5

                  rounded-[34px]

                  border
                  border-[#EEF3FA]
                "
              />

              {/* Portrait Placeholder */}

              <div className="relative z-10 text-center">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="mx-auto mb-8 h-24 w-24 text-[#123A63]/50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0115 0"
                  />
                </svg>

                <p
                  className="
                    text-lg
                    font-medium
                    uppercase
                    tracking-[0.15em]
                    text-slate-500
                  "
                >
                  Professional Portrait
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </Section>
  );
}