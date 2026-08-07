import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";

import type { WorkflowStep } from "@/types/service";

interface WorkflowProps {
  title?: string;
  steps: WorkflowStep[];
}

export default function Workflow({
  title = "Workflow",
  steps,
}: WorkflowProps) {
  return (
    <Section className="bg-white">

      <Container>

        <div className="mx-auto max-w-[920px]">

          <SectionIntro
            eyebrow="Workflow"
            title={title}
            description="A structured methodology that transforms business requirements into reliable reporting solutions and measurable business outcomes."
            align="center"
            className="mx-auto mb-12 max-w-[720px]"
          />

          {/* ========================================= */}
          {/* Executive Timeline */}
          {/* ========================================= */}

          <div className="relative">

            {/* Vertical Line */}

            <div
              className="
                absolute

                left-[19px]
                top-2
                bottom-2

                w-px

                bg-[#E5EDF8]
              "
            />

            <div className="space-y-5">
                              {steps.map((step, index) => (

                <div
                  key={step.title}
                  className="
                    relative

                    flex
                    gap-6
                  "
                >

                  {/* ========================================= */}
                  {/* Timeline Number */}
                  {/* ========================================= */}

                  <div
                    className="
                      relative
                      z-10

                      flex
                      h-10
                      w-10

                      shrink-0

                      items-center
                      justify-center

                      rounded-full

                      border-2
                      border-[#2563EB]

                      bg-white

                      text-[13px]
                      font-semibold

                      tracking-[0.12em]

                      text-[#2563EB]
                    "
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </div>

                  {/* ========================================= */}
                  {/* Card */}
                  {/* ========================================= */}

                  <div
                    className="
                      group

                      flex-1

                      rounded-[22px]

                      border
                      border-[#E8EEF7]

                      bg-white

                      px-5
                      py-4

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-[#D6E5FB]
                      hover:shadow-[0_18px_40px_rgba(18,58,99,0.08)]
                    "
                  >

                    <h3
                      className="
                        text-[21px]
                        font-semibold

                        leading-tight

                        tracking-[-0.02em]

                        text-[#102A56]
                      "
                    >
                      {step.title}
                    </h3>

                    <div className="mt-2 h-px w-full bg-[#E8EEF7]" />

                    <p
                      className="
                        mt-2

                        text-[15px]
                        leading-7

                        text-slate-600
                      "
                    >
                      {step.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </Container>

    </Section>
  );
}