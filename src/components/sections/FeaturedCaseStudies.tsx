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

        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#EEF5FF] opacity-60 blur-3xl" />

        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#F4F8FF] opacity-80 blur-3xl" />

      </div>

      <Container>

        <div className="relative z-10">

          <SectionIntro
            eyebrow="Case Studies"
            title="Featured Projects"
            description="A selection of executive dashboards and business intelligence solutions designed to transform data into strategic business decisions."
            align="center"
            className="mx-auto mb-20 max-w-3xl"
          />

          {/* ========================================= */}
          {/* Project Cards */}
          {/* ========================================= */}

          <div className="grid gap-8 lg:grid-cols-3">
                        {featuredProjects.map((project) => (

              <Link
                key={project.id}
                href={`/case-studies/${project.slug}`}
                className="group block"
              >

                <ExecutiveCard
                  className="rounded-[28px] h-full"
                >

                  {/* Preview */}

                  <div
                    className="
                      aspect-[16/10]
                      rounded-2xl
                      border-2
                      border-dashed
                      border-[#D7E5FB]
                      bg-[#F8FBFF]
                    "
                  />

                  {/* Category */}

                  <span
                    className="
                      mt-6
                      inline-flex
                      rounded-full
                      bg-[#EEF5FF]
                      px-4
                      py-1
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#123A63]
                    "
                  >
                    {project.category}
                  </span>

                  {/* Title */}

                  <h3
                    className="
                      mt-6
                      text-[28px]
                      font-bold
                      tracking-[-0.03em]
                      text-[#102A56]
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-5
                      text-[17px]
                      leading-8
                      text-slate-600
                    "
                  >
                    {project.excerpt}
                  </p>

                  {/* CTA */}

                  <span
                    className="
                      mt-8
                      inline-flex
                      items-center
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
                    <div className="mt-20 text-center">

            <Button
              href="/case-studies"
              variant="outline"
              size="lg"
            >
              View All Projects
            </Button>

          </div>

        </div>

      </Container>

    </Section>
  );
}
