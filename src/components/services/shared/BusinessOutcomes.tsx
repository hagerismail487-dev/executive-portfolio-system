import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";

interface BusinessOutcomesProps {
  title?: string;
  outcomes: string[];
}

export default function BusinessOutcomes({
  title = "Business Outcomes",
  outcomes,
}: BusinessOutcomesProps) {
  return (
    <Section
      className="bg-[#FBFCFE]"
    >

      <Container>

        <div className="mx-auto max-w-[1200px]">

          <SectionIntro
            eyebrow="Business Impact"
            title={title}
            description="The measurable business outcomes organizations can expect from a structured reporting, analytics, and business intelligence solution."
            align="center"
            className="mx-auto mb-10 max-w-[720px]"
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {outcomes.map((outcome, index) => (

              <div
                key={outcome}
                className="
                  group

                  rounded-[22px]

                  border
                  border-[#E8EEF7]

                  bg-white

                  px-6
                  py-6

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#D6E5FB]
                  hover:shadow-[0_18px_40px_rgba(18,58,99,0.08)]
                "
              >

                {/* ========================================= */}
                {/* Header */}
                {/* ========================================= */}

                <div className="flex items-center justify-between">

                  <span
                    className="
                      text-[13px]
                      font-semibold

                      tracking-[0.18em]

                      text-[#2563EB]
                    "
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <div
                    className="
                      h-2
                      w-2

                      rounded-full

                      bg-[#2563EB]

                      transition-all
                      duration-300

                      group-hover:scale-125
                    "
                  />

                </div>

                {/* Divider */}

                <div className="my-4 h-px w-full bg-[#E8EEF7]" />

                {/* Outcome */}

                <h3
                  className="
                    text-[18px]
                    font-semibold

                    leading-8

                    tracking-[-0.02em]

                    text-[#102A56]
                  "
                >
                  {outcome}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </Container>

    </Section>
  );
}