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
            className="mx-auto mb-14 max-w-[760px]"
          />

          <div className="grid gap-6 lg:grid-cols-3">
                      {featuredProjects.map((project) => (

            <Link
              key={project.id}
              href={`/case-studies/${project.slug}`}
              className="group block"
            >

             <ExecutiveCard
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

                    rounded-xl

                    border
                    border-dashed
                    border-[#D7E5FB]

                    bg-[#F8FBFF]
                  "
                />

                {/* Category */}

                <span
                  className="
                    mt-5
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
                    mt-5

                    text-[22px]
                    font-bold
                    leading-tight
                    tracking-[-0.02em]

                    text-[#102A56]
                  "
                >
                  {project.title}
                </h3>
{/* Description */}

<p
  className="
    mt-4
    flex-1

    text-[15px]
    leading-7

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

    text-[15px]
    font-semibold

    text-[#123A63]

    transition-colors
    duration-300

    group-hover:text-[#2563EB]
  "
>
  View Project →
</span>

              </ExecutiveCard>

            </Link>

          ))}

        </div>
                  {/* ========================================= */}
          {/* Bottom CTA */}
          {/* ========================================= */}

          <div className="mt-14 text-center">

            <Button
              href="/case-studies"
              variant="outline"
              size="lg"
              className="min-w-[190px]"
            >
              View All Projects
            </Button>

          </div>

        </div>

      </Container>

    </Section>
  );
}
