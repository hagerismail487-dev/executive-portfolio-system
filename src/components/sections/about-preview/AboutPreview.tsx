import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import data from "./data";

export default function AboutPreview() {
  return (
    <Section
      id="about"
      className="relative overflow-hidden bg-white"
    >
      {/* ========================================= */}
      {/* Background */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Left Glow */}

        <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-[#EEF5FF] blur-[170px]" />

        {/* Right Glow */}

        <div className="absolute -right-44 top-20 h-[560px] w-[560px] rounded-full bg-[#F5F9FF] blur-[180px]" />

        {/* Dot Pattern */}

        <div
          className="
            absolute
            right-10
            top-8
            h-44
            w-44
            opacity-[0.16]
            [background-image:radial-gradient(#2563EB_1.6px,transparent_1.6px)]
            [background-size:18px_18px]
          "
        />

      </div>

      <Container>

        <div className="relative z-10">

          {/* ========================================= */}
          {/* Section Header */}
          {/* ========================================= */}

          <SectionHeader className="mb-20">
            {data.hero.label}
          </SectionHeader>

          {/* ========================================= */}
          {/* Main Layout */}
          {/* ========================================= */}

          <div className="grid items-center gap-24 lg:grid-cols-2">
                        {/* ========================================= */}
            {/* Left Side */}
            {/* ========================================= */}

            <div className="max-w-[620px]">

              {/* Heading */}

              <h2
                className="
                  max-w-[700px]
                  text-[48px]
                  font-bold
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#102A56]
                  md:text-[56px]
                  lg:text-[64px]
                "
              >
                {data.hero.headline}
              </h2>

              {/* Accent */}

              <div className="mt-8 h-1 w-24 rounded-full bg-[#2563EB]" />

              {/* Quote */}

              <blockquote className="mt-10 border-l-[3px] border-[#2563EB] pl-6">

                <p
                  className="
                    text-[26px]
                    italic
                    leading-[1.7]
                    text-slate-600
                    lg:text-[28px]
                  "
                >
                  "{data.quote.text}"
                </p>

                <footer
                  className="
                    mt-4
                    text-lg
                    font-semibold
                    text-[#102A56]
                  "
                >
                  — {data.quote.author}
                </footer>

              </blockquote>

              {/* Story */}

              <div className="mt-12 space-y-8">

                {data.hero.story.map((paragraph) => (

                  <p
                    key={paragraph}
                    className="
                      text-[19px]
                      leading-9
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
                  mt-10
                  text-[26px]
                  font-semibold
                  leading-10
                  text-[#123A63]
                "
              >
                {data.hero.closingLine}
              </p>

              {/* CTA */}

              <div className="mt-14">

                <Button
                  href={data.cta.href}
                  size="lg"
                  className="min-w-[220px]"
                >
                  {data.cta.text}
                </Button>

              </div>

            </div>

            {/* ========================================= */}
            {/* Right Side */}
            {/* ========================================= */}
                        <div className="relative flex justify-center lg:justify-end">

              {/* ========================================= */}
              {/* Soft Glow */}
              {/* ========================================= */}

              <div
                className="
                  absolute
                  top-1/2
                  h-[520px]
                  w-[520px]
                  -translate-y-1/2
                  rounded-full
                  bg-[#2563EB]/8
                  blur-[120px]
                "
              />

              {/* Secondary Glow */}

              <div
                className="
                  absolute
                  bottom-8
                  left-8
                  h-48
                  w-48
                  rounded-full
                  bg-[#DCEBFF]
                  opacity-70
                  blur-[90px]
                "
              />

              {/* ========================================= */}
              {/* Portrait */}
              {/* ========================================= */}

              <div
                className="
                  relative
                  h-[620px]
                  w-[430px]
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-[#D8E5FA]
                  bg-gradient-to-b
                  from-[#FDFEFF]
                  to-[#F7FAFF]
                  shadow-[0_30px_80px_rgba(18,58,99,0.08)]
                  transition-all
                  duration-500
                  hover:shadow-[0_40px_90px_rgba(18,58,99,0.12)]
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
                    scale-[1.06]
                    transition-transform
                    duration-500
                    hover:scale-[1.04]
                  "
                />

              </div>

              {/* ========================================= */}
              {/* Top Decoration */}
              {/* ========================================= */}

              <div
                className="
                  absolute
                  -right-6
                  top-2
                  h-32
                  w-32
                  opacity-25
                  [background-image:radial-gradient(#2563EB_1.6px,transparent_1.6px)]
                  [background-size:16px_16px]
                "
              />

              {/* ========================================= */}
              {/* Bottom Decoration */}
              {/* ========================================= */}

              <div
                className="
                  absolute
                  -left-4
                  bottom-8
                  h-36
                  w-36
                  opacity-20
                  [background-image:radial-gradient(#2563EB_1.6px,transparent_1.6px)]
                  [background-size:16px_16px]
                "
              />

            </div>
                      </div>

        </div>

      </Container>

    </Section>
  );
}