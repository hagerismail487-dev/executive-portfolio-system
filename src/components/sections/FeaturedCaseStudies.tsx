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
      className="relative overflow-hidden bg-[#FBFCFE]"
    >
      {/* ========================================= */}
      {/* Background */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-[#EEF5FF] opacity-60 blur-3xl" />

        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#F4F8FF] opacity-80 blur-3xl" />

      </div>

      <Container>

        <div className="relative z-10">

          <SectionIntro
            eyebrow="Case Studies"
            title="Featured Projects"
            description="A selection of executive dashboards and business intelligence solutions designed to transform data into strategic business decisions."
            align="center"
            className="mx-auto mb-8 max-w-[700px]"
          />

          <div className="grid gap-5 lg:grid-cols-3">
                      {featuredProjects.map((project) => (

            <Link
              key={project.id}
              href={`/case-studies/${project.slug}`}
              className="group block"
            >

             <ExecutiveCard
  padding="sm"
  className="
    h-full
    rounded-[22px]

    flex
    flex-col
  "
>

                {/* Preview */}

                <div
                  className="
                    aspect-[16/10]

                    rounded-lg

                    border
                    border-dashed
                    border-[#D7E5FB]

                    bg-[#F8FBFF]
                  "
                />

                {/* Category */}

                <span
                  className="
                    mt-4
                    inline-flex

                    rounded-full

                    bg-[#EEF5FF]

                    px-3
                    py-1

                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.20em]

                    text-[#123A63]
                  "
                >
                  {project.category}
                </span>

                {/* Title */}

                <h3
                  className="
                    mt-4

                    text-[20px]
                    font-semibold
                    leading-tight
                    tracking-[-0.02em]

                    text-[#102A56]
                  "
                >
                  {project.title}
                </h3>
                {/* Divider */}

<div
  className="
    mt-3
    mb-3

    h-px
    w-full

    bg-[#E8EDF5]
  "
/>
{/* Description */}
<p
  className="
    flex-1

    text-[14px]
    leading-6

    text-slate-600
  "
>
  {project.excerpt}
</p>

{/* CTA */}

<span
  className="
    mt-6

    inline-flex
    items-center
    gap-2

    text-[14px]
    font-semibold

    text-[#123A63]

    transition-all
    duration-300

    group-hover:gap-3
    group-hover:text-[#2563EB]
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
              className="min-w-[170px]"
            >
              View All Projects
            </Button>

          </div>

        </div>

      </Container>

    </Section>
  );
}
