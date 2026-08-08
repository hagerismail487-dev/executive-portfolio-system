import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ExecutiveCard from "@/components/ui/ExecutiveCard";
import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";

import { caseStudies } from "@/data/case-studies";

export default function FeaturedCaseStudies() {
  const featuredProjects = caseStudies.filter(
    (project) => project.featured
  );

  return (
    <Section
      id="projects"
      background="default"
      className="
        relative
        overflow-hidden

        !bg-[#061B3A]

        py-16
        lg:py-20
      "
    >
      {/* ========================================= */}
      {/* Background */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* ========================================= */}
        {/* Background Grid */}
        {/* ========================================= */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.07]

            bg-[linear-gradient(rgba(72,140,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(72,140,255,0.35)_1px,transparent_1px)]

            bg-[size:48px_48px]
          "
        />

        {/* ========================================= */}
        {/* Top Right Glow */}
        {/* ========================================= */}

        <div
          className="
            absolute

            -right-32
            -top-32

            h-[420px]
            w-[420px]

            rounded-full

            bg-[#1769FF]/15

            blur-[120px]
          "
        />

        {/* ========================================= */}
        {/* Bottom Left Glow */}
        {/* ========================================= */}

        <div
          className="
            absolute

            -bottom-40
            -left-40

            h-[420px]
            w-[420px]

            rounded-full

            bg-[#0D5BEF]/10

            blur-[130px]
          "
        />

        {/* ========================================= */}
        {/* Decorative Dots */}
        {/* ========================================= */}

        <div
          className="
            absolute

            right-10
            top-16

            h-[140px]
            w-[140px]

            opacity-30

            bg-[radial-gradient(circle,#3D8BFF_1px,transparent_1px)]

            bg-[size:12px_12px]
          "
        />
      </div>

      {/* ========================================= */}
      {/* Content */}
      {/* ========================================= */}

      <Container>
        <div className="relative z-10">

          {/* ========================================= */}
          {/* Section Intro */}
          {/* ========================================= */}

          <SectionIntro
            eyebrow="Case Studies"
            title="Featured Projects"
            description="A selection of executive dashboards and business intelligence solutions designed to transform data into strategic business decisions."
            align="center"
            variant="dark"
            className="
              mx-auto
              mb-10
              max-w-[720px]
            "
          />

          {/* ========================================= */}
          {/* Projects Grid */}
          {/* ========================================= */}

          <div
            className="
              grid
              gap-5

              md:grid-cols-2

              lg:grid-cols-3
            "
          >
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/case-studies/${project.slug}`}
                className="
                  group
                  block
                  h-full
                "
              >
                <ExecutiveCard
                  padding="sm"
                  className="
                    flex
                    h-full
                    flex-col
                    overflow-hidden

                    rounded-[22px]

                    !border-[#1F4E86]

                    !bg-[#0A2850]

                    shadow-[0_18px_45px_rgba(0,0,0,0.18)]

                    transition-all
                    duration-300

                    hover:-translate-y-1

                    hover:!border-[#3182FF]

                    hover:!bg-[#0C2E5D]

                    hover:shadow-[0_24px_55px_rgba(0,0,0,0.28)]
                  "
                >

                  {/* ========================================= */}
                  {/* Project Preview */}
                  {/* ========================================= */}

                  <div
                    className="
                      relative

                      aspect-[16/10]

                      overflow-hidden

                      rounded-[14px]

                      border
                      border-[#24558D]

                      bg-[#071F42]
                    "
                  >
                    {/* Preview Grid */}

                    <div
                      className="
                        absolute
                        inset-0

                        opacity-40

                        bg-[linear-gradient(rgba(61,139,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(61,139,255,0.18)_1px,transparent_1px)]

                        bg-[size:28px_28px]
                      "
                    />

                    {/* Center Indicator */}

                    <div
                      className="
                        absolute

                        left-1/2
                        top-1/2

                        flex

                        h-14
                        w-14

                        -translate-x-1/2
                        -translate-y-1/2

                        items-center
                        justify-center

                        rounded-2xl

                        border
                        border-[#3182FF]/40

                        bg-[#0D3470]/80

                        text-[#5FA0FF]

                        backdrop-blur-sm

                        transition-all
                        duration-300

                        group-hover:scale-110

                        group-hover:border-[#4A96FF]

                        group-hover:bg-[#12448B]
                      "
                    >
                      <span className="text-[22px]">
                        ↗
                      </span>
                    </div>

                    {/* Hover Glow */}

                    <div
                      className="
                        pointer-events-none

                        absolute
                        inset-0

                        bg-gradient-to-t
                        from-[#061B3A]/60
                        via-transparent
                        to-[#2E7FFF]/10

                        opacity-0

                        transition-opacity
                        duration-300

                        group-hover:opacity-100
                      "
                    />
                  </div>

                  {/* ========================================= */}
                  {/* Category */}
                  {/* ========================================= */}

                  <span
                    className="
                      mt-4

                      inline-flex
                      w-fit

                      rounded-full

                      border
                      border-[#2B5F9B]

                      bg-[#0D3470]

                      px-3
                      py-1

                      text-[10px]

                      font-semibold

                      uppercase

                      tracking-[0.20em]

                      text-[#8DBBFF]
                    "
                  >
                    {project.category}
                  </span>

                  {/* ========================================= */}
                  {/* Title */}
                  {/* ========================================= */}

                  <h3
                    className="
                      mt-4

                      text-[20px]

                      font-semibold

                      leading-tight

                      tracking-[-0.02em]

                      !text-white

                      transition-colors
                      duration-300

                      group-hover:!text-[#5FA0FF]
                    "
                  >
                    {project.title}
                  </h3>

                  {/* ========================================= */}
                  {/* Divider */}
                  {/* ========================================= */}

                  <div
                    className="
                      mt-3
                      mb-3

                      h-px
                      w-full

                      bg-gradient-to-r
                      from-[#3182FF]
                      via-[#28598F]
                      to-transparent
                    "
                  />

                  {/* ========================================= */}
                  {/* Description */}
                  {/* ========================================= */}

                  <p
                    className="
                      flex-1

                      text-[14px]

                      leading-6

                      !text-[#C5D7EE]
                    "
                  >
                    {project.excerpt}
                  </p>

                  {/* ========================================= */}
                  {/* CTA */}
                  {/* ========================================= */}

                  <span
                    className="
                      mt-6

                      inline-flex
                      items-center
                      gap-2

                      text-[14px]

                      font-semibold

                      !text-white

                      transition-all
                      duration-300

                      group-hover:gap-3

                      group-hover:!text-[#5FA0FF]
                    "
                  >
                    View Project

                    <span
                      className="
                        transition-transform
                        duration-300

                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </span>

                </ExecutiveCard>
              </Link>
            ))}
          </div>

          {/* ========================================= */}
          {/* Bottom CTA */}
          {/* ========================================= */}

          <div className="mt-10 text-center">
            <Button
              href="/case-studies"
              variant="outline"
              size="lg"
              className="
                min-w-[175px]

                !border-[#5A91D0]

                !bg-transparent

                !text-white

                hover:!border-[#3182FF]

                hover:!bg-[#3182FF]

                hover:!text-white
              "
            >
              View All Projects
            </Button>
          </div>

        </div>
      </Container>
    </Section>
  );
}