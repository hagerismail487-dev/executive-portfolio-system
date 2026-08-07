import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";

interface WhyWorkWithMeProps {
  title?: string;
  description: string;
  strengths: {
    title: string;
    description: string;
  }[];
}

export default function WhyWorkWithMe({
  title = "Why Partner With Me",
  description,
  strengths,
}: WhyWorkWithMeProps) {
  return (
    <Section background="white">

      <Container>

        <div className="mx-auto max-w-[1180px]">

          <SectionIntro
            eyebrow="Partnership"
            title={title}
            description={description}
            align="center"
            className="mx-auto mb-12 max-w-[760px]"
          />

          <div className="grid gap-5 md:grid-cols-2">

            {strengths.map((item, index) => (

              <div
                key={item.title}
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

                {/* Header */}

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

                {/* Title */}

                <h3
                  className="
                    mt-5

                    text-[22px]
                    font-semibold

                    leading-tight

                    tracking-[-0.02em]

                    text-[#102A56]
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-3

                    text-[15px]
                    leading-7

                    text-slate-600
                  "
                >
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </Container>

    </Section>
  );
}