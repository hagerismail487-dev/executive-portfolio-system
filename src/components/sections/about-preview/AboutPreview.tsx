import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import data from "./data";

export default function ProfilePreview() {
  return (
    <Section
      id="profile"
      className="relative overflow-hidden bg-white"
    >
      {/* ========================================= */}
      {/* Background */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-28 top-8 h-[380px] w-[380px] rounded-full bg-[#EEF5FF] blur-[140px]" />

        <div className="absolute -right-32 top-12 h-[420px] w-[420px] rounded-full bg-[#F5F9FF] blur-[150px]" />

        <div
          className="
            absolute
            right-8
            top-6
            h-32
            w-32
            opacity-[0.14]
            [background-image:radial-gradient(#2563EB_1.4px,transparent_1.4px)]
            [background-size:16px_16px]
          "
        />

      </div>

      <Container>

        <div className="relative z-10">

          <SectionHeader className="mb-10">
            {data.hero.label}
          </SectionHeader>

          <div className="grid items-center gap-110 lg:gap-10 lg:grid-cols-2">
                        {/* ========================================= */}
            {/* Left Side */}
            {/* ========================================= */}

            <div className="max-w-[560px]">

              {/* Heading */}

             <h2
  className="
    max-w-[560px]
    text-[34px]
    font-bold
    leading-[1.08]
    tracking-[-0.04em]
    text-[#102A56]

    md:text-[40px]
    lg:text-[46px]
  "
>
  {data.hero.headline.map((line, index) => (
    <span key={index} className="block">
      {line}
    </span>
  ))}
</h2>
              {/* Accent */}

              <div className="mt-5 h-1 w-20 rounded-full bg-[#2563EB]" />

              {/* Quote */}

              <blockquote className="mt-8 border-l-[3px] border-[#2563EB] pl-5">

                <p
                  className="
                    text-[20px]
                    italic
                    leading-8
                    text-slate-600

                    lg:text-[22px]
                  "
                >
                  "{data.quote.text}"
                </p>

                <footer
                  className="
                    mt-3
                    text-[16px]
                    font-semibold
                    text-[#102A56]
                  "
                >
                  — {data.quote.author}
                </footer>

              </blockquote>

              {/* Story */}

             <div className="mt-8 space-y-5">

                {data.hero.story.map((paragraph) => (

                  <p
                    key={paragraph}
                    className="
                      text-[16px]
                      leading-8
                      text-slate-600
                    "
                  >
                    {paragraph}
                  </p>

                ))}

              </div>

              {/* Closing */}

              <p
                className="
                  mt-8
                  text-[21px]
                  font-semibold
                  leading-8
                  text-[#123A63]
                "
              >
                {data.hero.closingLine}
              </p>

              {/* CTA */}

              <div className="mt-8">

                <Button
                  href={data.cta.href}
                  size="lg"
                  className="min-w-[190px]"
                >
                  {data.cta.text}
                </Button>

              </div>

            </div>
                        {/* ========================================= */}
            {/* Right Side */}
            {/* ========================================= */}

            <div className="relative flex justify-center lg:justify-end">

              {/* Soft Glow */}

              <div
                className="
                  absolute
                  top-1/2
                  h-[400px]
                  w-[400px]
                  -translate-y-1/2
                  rounded-full
                  bg-[#2563EB]/8
                  blur-[100px]
                "
              />

              {/* Secondary Glow */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  h-36
                  w-36
                  rounded-full
                  bg-[#DCEBFF]
                  opacity-70
                  blur-[70px]
                "
              />

              {/* Portrait */}

              <div
                className="
                  relative
                  h-[520px]
                  w-[360px]

                  overflow-hidden

                  rounded-[26px]

                  border
                  border-[#D8E5FA]

                  bg-gradient-to-b
                  from-[#FDFEFF]
                  to-[#F7FAFF]

                  shadow-[0_24px_60px_rgba(18,58,99,0.08)]

                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:shadow-[0_34px_70px_rgba(18,58,99,0.12)]
                "
              >

                <Image
                  src="/images/about/hager-ismail-portrait.v2.png"
                  alt="Hager Ismail"
                  fill
                  priority
                  className="
                    object-contain
                    object-bottom

                    scale-[1.02]

                    transition-transform
                    duration-500

                    hover:scale-[1.01]
                  "
                />

              </div>

              {/* Top Decoration */}

              <div
                className="
                  absolute
                  -right-5
                  top-2

                  h-24
                  w-24

                  opacity-20

                  [background-image:radial-gradient(#2563EB_1.4px,transparent_1.4px)]
                  [background-size:14px_14px]
                "
              />

              {/* Bottom Decoration */}

              <div
                className="
                  absolute
                  -left-3
                  bottom-6

                  h-28
                  w-28

                  opacity-18

                  [background-image:radial-gradient(#2563EB_1.4px,transparent_1.4px)]
                  [background-size:14px_14px]
                "
              />

            </div>
                      </div>

        </div>

      </Container>

    </Section>
  );
}