import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { caseStudies } from "@/data/case-studies";

export default function FeaturedCaseStudies() {
  const featuredProjects = caseStudies.filter(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#FBFCFE] py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#EEF5FF] opacity-60 blur-3xl" />

        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#F4F8FF] opacity-80 blur-3xl" />

      </div>

      <Container>

        <div className="relative z-10">

          <SectionTitle
            eyebrow="Case Studies"
            title="Featured Projects"
            description="A selection of executive dashboards and business intelligence solutions designed to transform data into strategic business decisions."
          />

          {/* Cards */}

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {featuredProjects.map((project) => (

              <Link
                key={project.id}
                href={`/case-studies/${project.slug}`}
                className="
                  group
                  block
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#E7EEF8]
                  bg-white
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#D6E5FB]
                  hover:shadow-[0_25px_60px_rgba(18,58,99,0.08)]
                "
              >

                <div className="aspect-[16/10] rounded-2xl border-2 border-dashed border-[#D7E5FB] bg-[#F8FBFF]" />

                <span className="mt-6 inline-block rounded-full bg-[#EEF5FF] px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#123A63]">
                  {project.category}
                </span>

                <h3 className="mt-6 text-[28px] font-bold tracking-[-0.03em] text-[#102A56]">
                  {project.title}
                </h3>

                <p className="mt-5 text-[17px] leading-8 text-slate-600">
                  {project.excerpt}
                </p>

                <span className="mt-8 inline-flex items-center font-semibold text-[#123A63] transition-all duration-300 group-hover:text-[#2563EB]">
                  View Project →
                </span>

              </Link>

            ))}

          </div>

          {/* Bottom */}

          <div className="mt-20 text-center">

            <Link
              href="/case-studies"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                border-2
                border-[#123A63]
                px-8
                py-4
                font-semibold
                text-[#123A63]
                transition-all
                duration-300
                hover:bg-[#123A63]
                hover:text-white
              "
            >
              View All Projects
            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}