
import Link from "next/link";

import Container from "@/components/ui/Container";

import type { HeroSection } from "@/types/service";

interface ServiceHeroProps {
  hero: HeroSection;
}

export default function ServiceHero({
  hero,
}: ServiceHeroProps) {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[#FBFCFE]

        pt-12
        pb-14

        lg:pt-16
        lg:pb-20
      "
    >
      {/* ========================================= */}
      {/* Background */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            -right-28
            -top-28

            h-[420px]
            w-[420px]

            rounded-full

            bg-[#EEF5FF]

            opacity-70

            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -left-24
            bottom-0

            h-[320px]
            w-[320px]

            rounded-full

            bg-[#F4F8FF]

            opacity-80

            blur-[110px]
          "
        />

      </div>

      <Container>

        <div
          className="
            relative
            z-10

            grid
            items-center

            gap-10

            lg:grid-cols-2
            lg:gap-12
          "
        >

          {/* ========================================= */}
          {/* Left */}
          {/* ========================================= */}

          <div
  className="
    mt-4

    max-w-[560px]

    lg:mt-6
  "
>

            {/* Label */}

            <div className="flex items-center gap-4">

              <div className="h-px w-14 bg-[#2563EB]" />

              <span
                className="
                  text-[11px]
                  font-semibold

                  uppercase

                  tracking-[0.32em]

                  text-[#2563EB]
                "
              >
                Professional Service
              </span>

            </div>

            {/* Service Name */}

            <p
              className="
                mt-6

                text-[15px]
                font-semibold

                text-[#2563EB]
              "
            >
              {hero.title}
            </p>

            {/* Headline */}

            <h1
              className="
                mt-4

                max-w-[620px]

                text-[34px]
                font-bold

                leading-[1.08]

                tracking-[-0.04em]

                text-[#102A56]

                md:text-[35px]
                lg:text-[40px]
              "
            >
              {hero.headline}
            </h1>

            {/* Accent */}

            <div
              className="
                mt-5

                h-1
                w-20

                rounded-full

                bg-[#2563EB]
              "
            />

            {/* Description */}

            <p
              className="
                mt-6

                max-w-[560px]

                text-[17px]
                leading-8

                text-slate-600
              "
            >
              {hero.description}
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-3">



              <Link
                href="/case-studies"
                className="
                  inline-flex
                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-[#D7E5FB]

                  bg-white

                  px-7
                  py-4

                  font-semibold

                  text-[#123A63]

                  transition-all
                  duration-300

                  hover:border-[#2563EB]
                  hover:bg-[#F9FBFF]
                "
              >
                Explore Projects
              </Link>

            </div>

          </div>
                    {/* ========================================= */}
          {/* Right Side */}
          {/* ========================================= */}

          <div className="relative flex justify-center lg:justify-end">

            {/* Glow */}

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

            {/* Executive Card */}

            <div
              className="
                relative

                w-full
                max-w-[500px]

                overflow-hidden

                rounded-[26px]

                border
                border-[#E7EEF8]

                bg-white

                shadow-[0_24px_60px_rgba(18,58,99,0.10)]

                transition-all
                duration-500

                hover:-translate-y-1
                hover:shadow-[0_34px_70px_rgba(18,58,99,0.14)]
              "
            >

              {/* Header */}

              <div className="border-b border-[#EEF3FA] px-6 py-5">

                <span
                  className="
                    text-[11px]
                    font-semibold

                    uppercase

                    tracking-[0.22em]

                    text-[#2563EB]
                  "
                >
                  Executive Focus
                </span>

                <h3
                  className="
                    mt-2

                    text-[24px]
                    font-bold

                    tracking-[-0.03em]

                    text-[#102A56]
                  "
                >
                  {hero.executiveTitle}
                </h3>

                <p
                  className="
                    mt-3

                    text-[15px]
                    leading-7

                    text-slate-600
                  "
                >
                  {hero.executiveDescription}
                </p>

              </div>

              {/* Highlights */}

              <div className="px-6 py-5 space-y-3">

                {hero.highlights.map((item, index) => (

                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-4

                      rounded-xl

                      border
                      border-[#EEF3FA]

                      bg-[#FBFCFF]

                      px-4
                      py-3

                      transition-all
                      duration-300

                      hover:border-[#DCE8FB]
                      hover:bg-[#F8FBFF]
                    "
                  >

                    <span
                      className="
                        text-[13px]
                        font-semibold

                        tracking-[0.15em]

                        text-[#2563EB]
                      "
                    >
                      {(index + 1).toString().padStart(2, "0")}
                    </span>

                    <span
                      className="
                        text-[15px]
                        font-medium

                        text-[#102A56]
                      "
                    >
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              {/* Footer */}

              <div
                className="
                  border-t
                  border-[#EEF3FA]

                  bg-[#FBFCFE]

                  px-6
                  py-5
                "
              >

                <div className="flex items-center justify-between">

                  <span
                    className="
                      text-[13px]
                      text-slate-500
                    "
                  >
                    Designed for executive leadership
                  </span>

                  <div
                    className="
                      h-2
                      w-2

                      rounded-full

                      bg-[#2563EB]
                    "
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>

  );
}