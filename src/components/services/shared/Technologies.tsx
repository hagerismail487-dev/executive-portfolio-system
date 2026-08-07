import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";

interface TechnologiesProps {
  title?: string;
  technologies: string[];
}

export default function Technologies({
  title = "Technologies",
  technologies,
}: TechnologiesProps) {
  return (
    <Section className="bg-[#FBFCFE]">

      <Container>

        <div className="mx-auto max-w-[1200px]">

          <SectionIntro
            eyebrow="Technology"
            title={title}
            description="Modern business intelligence technologies and reporting tools used to build reliable, scalable, and executive-ready analytical solutions."
            align="center"
            className="mx-auto mb-10 max-w-[720px]"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {technologies.map((technology, index) => (

              <div
                key={technology}
                className="
                  group

                  rounded-[20px]

                  border
                  border-[#E8EEF7]

                  bg-white

                  px-5
                  py-5

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#D6E5FB]
                  hover:shadow-[0_16px_36px_rgba(18,58,99,0.08)]
                "
              >

                {/* ========================================= */}
                {/* Header */}
                {/* ========================================= */}
<div className="flex items-center gap-4">

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

  <h3
    className="
      text-[17px]
      font-semibold

      tracking-[-0.01em]

      text-[#102A56]
    "
  >
    {technology}
  </h3>

</div>
              </div>

            ))}

          </div>

        </div>

      </Container>

    </Section>
  );
}