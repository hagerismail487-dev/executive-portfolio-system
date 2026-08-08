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
      className="
        relative
        overflow-hidden
        bg-white
        py-6
        lg:py-8
      "
    >
      {/* ========================================= */}
      {/* Background */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Left Glow */}
        <div
          className="
            absolute
            -left-28
            top-8
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#EEF5FF]
            blur-[130px]
          "
        />

        {/* Right Glow */}
        <div
          className="
            absolute
            -right-28
            top-10
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#F5F9FF]
            blur-[140px]
          "
        />

        {/* Blueprint Dots */}
        <div
          className="
            absolute
            right-8
            top-6
            h-28
            w-28
            opacity-[0.12]
            [background-image:radial-gradient(#2563EB_1.4px,transparent_1.4px)]
            [background-size:16px_16px]
          "
        />

      </div>

      <Container>

        <div className="relative z-10">

          {/* ========================================= */}
          {/* Section Header */}
          {/* ========================================= */}

          <SectionHeader className="mb-6">
            {data.hero.label}
          </SectionHeader>

          {/* ========================================= */}
          {/* Main Layout */}
          {/* ========================================= */}

          <div
            className="
              grid
              items-center
              gap-8
              lg:grid-cols-2
              lg:gap-10
            "
          >

            {/* ========================================= */}
            {/* Left Side */}
            {/* ========================================= */}

            <div className="max-w-[540px]">

              {/* Heading */}

              <h2
                className="
                  max-w-[540px]
                  text-[32px]
                  font-bold
                  leading-[1.06]
                  tracking-[-0.04em]
                  text-[#102A56]
                  md:text-[37px]
                  lg:text-[42px]
                "
              >
                {data.hero.headline.map((line, index) => (
                  <span
                    key={index}
                    className="block"
                  >
                    {line}
                  </span>
                ))}
              </h2>

              {/* Accent */}

              <div
                className="
                  mt-4
                  h-[3px]
                  w-[62px]
                  rounded-full
                  bg-[#2563EB]
                "
              />

              {/* ========================================= */}
              {/* Quote */}
              {/* ========================================= */}

              <blockquote
                className="
                  mt-5
                  border-l-[3px]
                  border-[#2563EB]
                  pl-4
                "
              >

                <p
                  className="
                    max-w-[490px]
                    text-[18px]
                    italic
                    leading-[1.45]
                    text-slate-600
                    lg:text-[20px]
                  "
                >
                  &quot;{data.quote.text}&quot;
                </p>

                {/* Signature */}

                <footer
                  className="
                    mt-0
                    flex
                    w-full
                    justify-end
                  "
                >
                  <Image
                    src="/identity/signature.png"
                    alt="Hager Ismail Signature"
                    width={180}
                    height={65}
                    className="
                      h-auto
                      w-[175px]
                      translate-x-2
                      object-contain
                    "
                  />
                </footer>

              </blockquote>

              {/* ========================================= */}
              {/* Story */}
              {/* ========================================= */}

              <div
                className="
                  mt-3
                  space-y-2.5
                "
              >

                {data.hero.story.map((paragraph) => (

                  <p
                    key={paragraph}
                    className="
                      max-w-[530px]
                      text-[14px]
                      leading-[1.65]
                      text-slate-600
                    "
                  >
                    {paragraph}
                  </p>

                ))}

              </div>

              {/* ========================================= */}
              {/* Closing */}
              {/* ========================================= */}

              <p
                className="
                  mt-5
                  max-w-[500px]
                  text-[18px]
                  font-semibold
                  leading-[1.5]
                  text-[#123A63]
                "
              >
                {data.hero.closingLine}
              </p>

              {/* ========================================= */}
              {/* CTA */}
              {/* ========================================= */}

              <div className="mt-5">

                <Button
                  href={data.cta.href}
                  size="lg"
                  className="min-w-[170px]"
                >
                  {data.cta.text}
                </Button>

              </div>

            </div>

            {/* ========================================= */}
            {/* Right Side */}
            {/* ========================================= */}

            <div
              className="
                relative
                flex
                justify-center
                lg:justify-end
              "
            >

              {/* Soft Glow */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[330px]
                  w-[330px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#2563EB]/[0.07]
                  blur-[85px]
                "
              />

              {/* Secondary Glow */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  h-28
                  w-28
                  rounded-full
                  bg-[#DCEBFF]
                  opacity-60
                  blur-[65px]
                "
              />

              {/* ========================================= */}
              {/* Portrait */}
              {/* ========================================= */}

              <div
                className="
                  relative
                  h-[440px]
                  w-[310px]
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#D8E5FA]
                  bg-gradient-to-b
                  from-[#FDFEFF]
                  to-[#F7FAFF]
                  shadow-[0_20px_50px_rgba(18,58,99,0.08)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_28px_60px_rgba(18,58,99,0.12)]
                  lg:h-[455px]
                  lg:w-[320px]
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

              {/* ========================================= */}
              {/* Top Decoration */}
              {/* ========================================= */}

              <div
                className="
                  absolute
                  -right-4
                  top-1
                  h-20
                  w-20
                  opacity-20
                  [background-image:radial-gradient(#2563EB_1.4px,transparent_1.4px)]
                  [background-size:13px_13px]
                "
              />

              {/* ========================================= */}
              {/* Bottom Decoration */}
              {/* ========================================= */}

              <div
                className="
                  absolute
                  -left-3
                  bottom-4
                  h-24
                  w-24
                  opacity-15
                  [background-image:radial-gradient(#2563EB_1.4px,transparent_1.4px)]
                  [background-size:13px_13px]
                "
              />

            </div>

          </div>

        </div>

      </Container>

    </Section>
  );
}