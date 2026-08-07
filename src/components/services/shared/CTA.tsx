import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTA({
  title,
  description,
  buttonText,
  buttonHref,
}: CTAProps) {
  return (
   <Section
  className="
    relative
    overflow-hidden

    !py-8
    lg:!py-10

    bg-[#F8FBFF]
  "
>

      {/* ========================================= */}
      {/* Background */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Right Glow */}

        <div
          className="
            absolute
            -right-28
            -top-20

            h-[420px]
            w-[420px]

            rounded-full

            bg-[#3B82F6]/10

            blur-[130px]
          "
        />

        {/* Left Glow */}

        <div
          className="
            absolute
            -left-24
            bottom-0

            h-[340px]
            w-[340px]

            rounded-full

            bg-[#60A5FA]/10

            blur-[120px]
          "
        />

      </div>

      <Container>

        <div
          className="
            relative
            z-10


            px-5
            py-2

            text-center

            lg:px-5
            lg:py-1
          "
        >

          {/* ========================================= */}
          {/* Header */}
          {/* ========================================= */}

          <span
            className="
              text-[13px]
              font-semibold

              uppercase

              tracking-[0.32em]

              text-[#2563EB]
            "
          >
            LET'S BUILD SOMETHING VALUABLE
          </span>

          {/* ========================================= */}
          {/* Title */}
          {/* ========================================= */}

          <h2
            className="
              mx-auto
              mt-3

              max-w-[820px]

              text-[24px]
              font-bold

              leading-[1.12]

              tracking-[-0.04em]

              text-white

              lg:text-[30px]
            "
          >
            {title}
          </h2>

          {/* Accent */}

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#3B82F6]" />

          {/* ========================================= */}
          {/* Description */}
          {/* ========================================= */}

          <p
            className="
              mx-auto
              mt-3

              max-w-[860px]

              text-[17px]
              leading-7

              text-slate-200
            "
          >
            {description}
          </p>

          {/* ========================================= */}
          {/* Timeline */}
          {/* ========================================= */}

          <div className="mt-4">

            <div className="relative">

              {/* Connecting Line */}

              <div
                className="
                  absolute

                  left-[8%]
                  right-[8%]

                  top-5

                  hidden

                  h-[2px]

                  bg-gradient-to-r
                  from-transparent
                  via-[#A9C7F2]
                  to-transparent

                  lg:block
                "
              />

              <div
                className="
                  grid
                  gap-6

                  sm:grid-cols-2
                  lg:grid-cols-4
                "
              >

                {[
                  {
                    number: "01",
                    title: "Discover",
                  },
                  {
                    number: "02",
                    title: "Design",
                  },
                  {
                    number: "03",
                    title: "Deliver",
                  },
                  {
                    number: "04",
                    title: "Grow",
                  },
                ].map((step) => (

                  <div
                    key={step.number}
                    className="
                      group

                      relative

                      flex
                      flex-col

                      items-center

                      text-center
                    "
                  >

                    <div
                      className="
                        relative
                        z-10

                        flex
                        h-10
                        w-10

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#D6E5FB]


                        bg-white

                        text-[13px]
                        font-semibold

                        tracking-[0.15em]

                        text-[#2563EB]

                        backdrop-blur-sm

                        transition-all
                        duration-300

                        group-hover:scale-110
                        group-hover:border-[#60A5FA]
                        group-hover:bg-[#EEF5FF]
                      "
                    >
                      {step.number}
                    </div>

                    <span
                      className="
                        mt-3

                        text-[15px]
                        font-medium

                        tracking-[0.01em]

                        text-slate-600

                        transition-colors
                        duration-300

                        group-hover:text-white
                      "
                    >
                      {step.title}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* ========================================= */}
          {/* CTA */}
          {/* ========================================= */}

          <div className="mt-7 flex justify-center">

            <Link
  href={buttonHref}
  target="_blank"
  rel="noopener noreferrer"
  className="
                inline-flex
                items-center
                gap-3

                rounded-xl

                bg-[#123A63]

                px-8
                py-3

                text-[15px]
                font-semibold

                !text-white

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#0F3154]
                hover:shadow-[0_18px_40px_rgba(255,255,255,0.18)]
              "
            >
              {buttonText}

              <span>→</span>

            </Link>

          </div>

        </div>

      </Container>

    </Section>

  );
}