import Container from "@/components/ui/Container";
import ExecutiveButton from "@/components/ui/Button";
import type { CaseStudy } from "@/data/case-studies";

interface CaseStudyHeroProps {
  project: CaseStudy;
}

export default function CaseStudyHero({
  project,
}: CaseStudyHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#FBFCFE] py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#EEF5FF] blur-3xl opacity-60" />

        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#F4F8FF] blur-3xl opacity-80" />

      </div>

      <Container>

        <div className="relative z-10 grid items-center gap-20 lg:grid-cols-2">

          {/* ================================= */}
          {/* Left */}
          {/* ================================= */}

          <div>

            <span className="inline-block rounded-full bg-[#EEF5FF] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#123A63]">
              {project.category}
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight tracking-[-0.04em] text-[#102A56] lg:text-[64px]">
              {project.title}
            </h1>

            <div className="mt-7 h-1 w-24 rounded-full bg-[#2563EB]" />

            <p className="mt-10 max-w-xl text-xl leading-10 text-slate-600">
              {project.excerpt}
            </p>

            {/* Project Info */}

            <div className="mt-12 grid grid-cols-2 gap-8">

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Industry
                </p>

                <p className="mt-2 text-lg font-semibold text-[#102A56]">
                  {project.industry}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Year
                </p>

                <p className="mt-2 text-lg font-semibold text-[#102A56]">
                  {project.year}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Client
                </p>

                <p className="mt-2 text-lg font-semibold text-[#102A56]">
                  {project.client}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Role
                </p>

                <p className="mt-2 text-lg font-semibold text-[#102A56]">
                  {project.role}
                </p>
              </div>

            </div>

            <div className="mt-14">

              <ExecutiveButton
                href="#overview"
              >
                Explore Project
              </ExecutiveButton>

            </div>

          </div>

          {/* ================================= */}
          {/* Right */}
          {/* ================================= */}

          <div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] border border-[#E8EEF7] bg-white shadow-[0_30px_80px_rgba(18,58,99,0.08)]">

              {/* Placeholder */}

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="text-center">

                  <div className="mx-auto h-24 w-24 rounded-3xl border-2 border-dashed border-[#D7E5FB]" />

                  <p className="mt-6 text-lg font-medium text-slate-400">
                    Project Cover
                  </p>

                </div>

              </div>

              {/*
              بعدين هنستبدله بـ

              <Image
                src={project.images.cover}
                ...
              />
              */}

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}