import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";

interface DeliverablesProps {
  title?: string;
  items: string[];
}

export default function Deliverables({
  title = "Deliverables",
  items,
}: DeliverablesProps) {
  return (
    <Section
      className="bg-[#FBFCFE]"
    >
      <Container>

        <div className="mx-auto max-w-[1200px]">

          <SectionIntro
            eyebrow="Deliverables"
            title={title}
            description="A complete set of executive reporting assets, documentation, and analytical deliverables designed to support business decision-making."
            align="center"
            className="mx-auto mb-10 max-w-[720px]"
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {items.map((item, index) => (

              <div
                key={item}
                className="
                  group

                  rounded-[20px]

                  border
                  border-[#E8EEF7]

                  bg-white

                  px-5
                  py-4

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#D6E5FB]
                  hover:shadow-[0_14px_34px_rgba(18,58,99,0.08)]
                "
              >

                {/* ========================================= */}
                {/* Header */}
                {/* ========================================= */}

                <div className="flex items-center gap-3">

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

                  <div className="h-px flex-1 bg-[#E8EEF7]" />

                </div>

                {/* ========================================= */}
                {/* Deliverable */}
                {/* ========================================= */}

                <p
                  className="
                    mt-1

                    text-[15px]
                    font-medium
                    leading-6

                    tracking-[-0.01em]

                    text-[#102A56]
                  "
                >
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </Container>

    </Section>
  );
}