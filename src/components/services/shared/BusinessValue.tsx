import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";
import Container from "@/components/ui/Container";


interface BusinessValueProps {
  title?: string;
  description: string;
  benefits: string[];
}

export default function BusinessValue({
  title = "Business Value",
  description,
  benefits,
}: BusinessValueProps) {
  return (
    <Section
      background="white"
      className="relative"
    >
  <Container>

    <div className="mx-auto max-w-[1180px]">
        {/* ========================================= */}
        {/* Section Intro */}
        {/* ========================================= */}

        <SectionIntro
          eyebrow="Value"
          title={title}
          description="Discover the strategic business value delivered through this service."
          align="center"
          className="mx-auto mb-10 max-w-[720px]"
        />

        {/* ========================================= */}
        {/* Content */}
        {/* ========================================= */}

        <div className="
            grid
            items-start

            gap-10

            lg:grid-cols-[1.2fr_0.95fr]
            lg:gap-12
          "
        >

          {/* ========================================= */}
          {/* Description */}
          {/* ========================================= */}

          <div>

            <p
              className="
                text-[16px]
                leading-8

                text-slate-600
              "
            >
              {description}
            </p>

          </div>

          {/* ========================================= */}
          {/* Benefits */}
          {/* ========================================= */}

        
                      {/* ========================================= */}
          {/* Executive Benefits */}
          {/* ========================================= */}

          <div className="grid gap-4 sm:grid-cols-2">

            {benefits.map((benefit, index) => (

              <div
                key={benefit}
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
                  hover:shadow-[0_14px_34px_rgba(18,58,99,0.08)]
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

                {/* Benefit */}

                <p
                  className="
                    mt-4

                    text-[15px]
                    font-medium
                    leading-7

                    tracking-[-0.01em]

                    text-[#102A56]
                  "
                >
                  {benefit}
                </p>

              </div>

            ))}

          </div>

        </div>
  </div> 
      </Container>

    </Section>
  );
}