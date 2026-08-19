"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  Database,
  ExternalLink,
  Layers3,
  Lightbulb,
  Target,
  UsersRound,
} from "lucide-react";
import { type ReactNode } from "react";

import { workforceTalentIntelligenceProject as project } from "@/data/workforce-talent-intelligence-dashboard";

const toneClasses: Record<string, string> = {
  green:
    "border-emerald-400/40 bg-emerald-500/10 text-emerald-100",
  blue:
    "border-blue-400/40 bg-blue-500/10 text-blue-100",
  amber:
    "border-amber-400/40 bg-amber-500/10 text-amber-100",
  danger:
    "border-red-400/40 bg-red-500/10 text-red-100",
  purple:
    "border-purple-400/40 bg-purple-500/10 text-purple-100",
};
const insights = [
  {
    label: "WORKFORCE STABILITY",
    value: "79%",
    secondary: "Employees Under 3 Years",
    detail:
      "79% of employees have less than three years of tenure, while average tenure is 1.61 years and 82 resigned employees are identified in the workforce analysis.",
    decision:
      "Prioritize retention, onboarding, and workforce-stability monitoring.",
    tone: "danger",
  },
  {
    label: "RECRUITMENT FUNNEL",
    value: "11%",
    secondary: "Hiring Conversion",
    detail:
      "The funnel contains 489 collected CVs and 115 hired employees. The largest candidate drop occurs between the First Interview and Second Interview.",
    decision:
      "Review the First-to-Second Interview stage and improve funnel progression.",
    tone: "amber",
  },
  {
    label: "LEARNING DELIVERY",
    value: "79%",
    secondary: "Courses Pending",
    detail:
      "10 employees are covered by training, while 79% of courses remain pending and 99.6% of the training budget has been utilized.",
    decision:
      "Accelerate course scheduling and broaden participation instead of focusing only on budget utilization.",
    tone: "blue",
  },
  {
    label: "CONTRACT COMPLIANCE",
    value: "32",
    secondary: "Contracts at Risk",
    detail:
      "The dashboard identifies 32 contracts at risk and 43 employees with no contract date. 64% of employee files require documentation.",
    decision:
      "Prioritize contract follow-up and documentation completion for high-risk employee records.",
    tone: "danger",
  },
  {
    label: "INSURANCE COMPLIANCE",
    value: "30%",
    secondary: "Social Insurance Registered",
    detail:
      "Only 30% of employees are registered for social insurance in the documented case-study analysis.",
    decision:
      "Strengthen insurance registration monitoring and compliance follow-up.",
    tone: "amber",
  },
];
export default function WorkforceTalentIntelligenceDashboard() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030a16] text-white">

      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_70%_10%,rgba(18,96,180,.18),transparent_30%),radial-gradient(circle_at_10%_50%,rgba(0,62,130,.12),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 pb-8 pt-6 sm:px-6 lg:px-8">

        <div className="mb-5 flex items-center justify-between">

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#76bfff] transition hover:text-white"
          >
            <ArrowLeft size={13} />
            Back to Projects
          </Link>

          <span className="hidden text-[10px] uppercase tracking-[0.22em] text-white/30 md:block">
            Executive Portfolio System
          </span>

        </div>

        <section className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">

          <div className="flex flex-col justify-center rounded-[14px] border border-[#174574] bg-[#061426]/80 p-6 shadow-[0_30px_100px_rgba(0,60,130,.14)] sm:p-8 lg:border-transparent lg:bg-transparent lg:p-4 lg:pr-8 lg:shadow-none">

            <div className="flex flex-wrap gap-2">

              {[
                project.category,
                project.secondaryCategory,
                project.tertiaryCategory,
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-[#173e68] bg-[#0a2441] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wide text-[#d8eaff]"
                >
                  {tag}
                </span>
              ))}

            </div>

            <h1 className="mt-6 max-w-xl text-[38px] font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-[48px] lg:text-[58px]">
              {project.title}
            </h1>

            <p className="mt-5 text-sm font-semibold text-[#45a9ff] sm:text-base">
              {project.positioning}
            </p>

            <p className="mt-4 max-w-xl text-[13px] leading-6 text-[#b7c7d9] sm:text-[14px]">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <Link
                href="/case-studies/workforce-talent-intelligence-dashboard/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#0969ed] px-4 py-2.5 text-[12px] font-semibold text-white shadow-[0_8px_28px_rgba(9,105,237,.24)] transition hover:bg-[#1777f5]"
              >
                View Dashboard
                <ExternalLink size={13} />
              </Link>

              <a
                href="#insights"
                className="inline-flex items-center gap-2 rounded-md border border-[#31506f] bg-[#071a2f] px-4 py-2.5 text-[12px] font-semibold text-white transition hover:border-[#4b78a4]"
              >
                Explore Case Study
                <ArrowRight size={13} />
              </a>

            </div>

          </div>

          <div className="relative overflow-hidden rounded-[14px] border border-[#1c4a79] bg-[#061426] p-3 shadow-[0_30px_90px_rgba(0,65,140,.24)]">

            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#1685ff] to-transparent opacity-70" />

            <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg border border-[#173d64] bg-[#081a2d] p-5 sm:p-7 lg:p-9">

              <div className="relative h-full w-full overflow-hidden rounded-md border border-[#214a72] bg-[#061321] shadow-[0_15px_50px_rgba(0,0,0,.35)]">

                <Image
                  src={project.dashboards[0].image}
                  alt={project.dashboards[0].title}
                  fill
                  priority
                  className="object-contain p-2 sm:p-3"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />

              </div>

            </div>

          </div>

        </section>

        <section className="mt-6 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-5 sm:p-6">

          <SectionLabel>
            PROJECT SNAPSHOT
          </SectionLabel>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {project.snapshot.map((item, index) => {

              const Icon = [
                BriefcaseBusiness,
                Layers3,
                BarChart3,
                Database,
              ][index % 4];

              return (
                <div
                  key={item.label}
                  className="flex min-h-[70px] items-start gap-3 border-[#143b62] lg:border-r lg:last:border-0 lg:pr-5"
                >

                  <div className="mt-0.5 rounded-lg border border-[#1d5a92] bg-[#0a2340] p-2.5 text-[#64b8ff]">
                    <Icon size={16} />
                  </div>

                  <div className="min-w-0">

                    <p className="text-[12px] font-semibold text-[#d7e6f5] sm:text-[12px]">
                      {item.label}
                    </p>

                    <p className="mt-1.5 whitespace-pre-line text-[12px] leading-6 text-[#91a8bf] sm:text-[12px]">
                      {item.value}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </section>

        <section className="mt-4 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-5 sm:p-6">

          <SectionLabel>
            PROJECT OVERVIEW
          </SectionLabel>

          <div className="mt-5 grid gap-5 lg:grid-cols-3">

            <Narrative
              icon={<UsersRound size={15} />}
              title="Business Challenge"
            >
              {project.overview.challenge}
            </Narrative>

            <Narrative
              icon={<Target size={15} />}
              title="Business Objective"
            >
              {project.overview.objective}
            </Narrative>

            <Narrative
              icon={<Lightbulb size={15} />}
              title="Our Solution"
            >
              {project.overview.solution}
            </Narrative>

          </div>

        </section>

        <section className="mt-4 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-4 sm:p-5">

          <div className="flex flex-wrap items-start justify-between gap-4">

            <div>
              <SectionLabel>
                Dashboard Experience
              </SectionLabel>

              <p className="mt-2 text-[13px] leading-6 text-[#8fa7bf]">
                Explore the full reporting journey across the workforce and talent intelligence dashboard.
              </p>
            </div>

            <Link
              href="/case-studies/workforce-talent-intelligence-dashboard/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-md border border-[#31577d] bg-[#071525] px-4 py-2 text-[10px] font-semibold uppercase tracking-wide text-white transition hover:border-[#4d8bc2] hover:bg-[#0a2138]"
            >
              Open Dashboard
              <ArrowRight size={13} />
            </Link>

          </div>

          <div className="mt-5 overflow-visible">

            <div className="flex gap-4 overflow-x-auto px-2 pb-6 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

              {project.dashboards.map((dashboard, index) => (

                <Link
                  key={dashboard.title}
                  href={`/case-studies/workforce-talent-intelligence-dashboard/dashboard?slide=${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-[250px] shrink-0 text-left"
                >

                  <div className="relative z-0 h-[150px] w-full overflow-visible rounded-lg">

                    <div className="relative h-full w-full overflow-hidden rounded-lg border border-[#173b61] bg-[#07192b] transition-all duration-300 ease-out group-hover:z-50 group-hover:scale-[1.08] group-hover:border-[#1987ff] group-hover:shadow-[0_18px_45px_rgba(0,96,190,.35)]">

                      <Image
                        src={dashboard.image}
                        alt={dashboard.title}
                        fill
                        className="object-contain object-top transition-transform duration-300 ease-out"
                        sizes="260px"
                      />

                      <span className="absolute bottom-2 left-2 rounded bg-[#0873ef] px-2 py-1 text-[9px] font-bold shadow-[0_4px_12px_rgba(0,0,0,.3)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                  </div>

                  <div className="relative z-10">

                    <h3 className="mt-3 text-[13px] font-semibold text-white transition-colors duration-200 group-hover:text-[#67bbff]">
                      {dashboard.title}
                    </h3>

                    <p className="mt-1 line-clamp-3 text-[12px] leading-6 text-[#7890aa]">
                      {dashboard.description}
                    </p>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>
        <section
          id="insights"
          className="mt-4 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-4 sm:p-5"
        >
          <SectionLabel>
            Key Business Insights
          </SectionLabel>

          <p className="mt-2 text-[13px] leading-6 text-[#8fa7bf]">
            Executive insights derived from the documented Workforce & Talent
            Intelligence dashboard analysis.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {insights.map((insight) => (
              <article
                key={insight.label}
                className={`rounded-lg border p-4 ${toneClasses[insight.tone]}`}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.12em]">
                  {insight.label}
                </p>

                <p className="mt-5 text-[34px] font-bold tracking-[-0.04em]">
                  {insight.value}
                </p>

                <p className="mt-2 text-[12px] font-semibold text-white/90">
                  {insight.secondary}
                </p>

                <p className="mt-4 min-h-[52px] text-[12px] font-medium leading-6 text-[#b8c8d9]">
                  {insight.detail}
                </p>

                <div className="mt-4 border-t border-white/10 pt-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-white/70">
                    Decision support
                  </p>

                  <p className="mt-2 text-[12px] font-medium leading-6 text-[#d1dce8]">
                    {insight.decision}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">

          <InfoPanel
            title="Capabilities Demonstrated"
            items={project.capabilities}
            icon={<Check size={15} />}
            columns
          />

          <div className="rounded-[12px] border border-[#174574] bg-[#061426]/85 p-5">

            <SectionLabel>
              Project Positioning
            </SectionLabel>

            <p className="mt-4 text-[12px] leading-6 text-[#a9bdd2]">
              A workforce intelligence case study demonstrating how fragmented HR operational data can be structured into an executive reporting environment connecting workforce visibility, resignations, talent acquisition, and contract compliance.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">

              {[
                "Business Intelligence",
                "Executive Reporting",
                "MIS Reporting",
                "Workforce Intelligence",
                "Talent Analytics",
                "HR Reporting",
                "Contract Compliance",
              ].map((tag) => (

                <span
                  key={tag}
                  className="rounded-full border border-[#204a73] bg-[#0a2038] px-3 py-1.5 text-[10px] font-medium text-[#aac0d5]"
                >
                  {tag}
                </span>

              ))}

            </div>

          </div>

        </section>

        <section className="mt-4 overflow-hidden rounded-[12px] border border-[#174574] bg-gradient-to-r from-[#08214a] to-[#063171] px-5 py-3 text-center shadow-[0_20px_70px_rgba(0,72,170,.18)] sm:px-8 sm:py-4">

          <div className="flex flex-col items-center justify-center gap-5">

            <div>

              <p className="text-[24px] font-semibold leading-tight text-white sm:text-[26px]">
                Ready to build a reporting solution
                <br className="hidden sm:block" />
                that drives real business impact?
              </p>

              <p className="mt-3 text-[14px] font-medium leading-6 text-[#a8bed5]">
                Let&apos;s create a structured intelligence solution around your business decisions.
              </p>

            </div>

            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#0b75f4] px-6 py-3 text-[12px] font-semibold text-white shadow-[0_10px_30px_rgba(11,117,244,.28)] transition hover:bg-[#1782ff]"
            >
              Let&apos;s Talk About Your Project
              <ArrowRight size={14} />
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}

function SectionLabel({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <h2 className="text-[15px] font-semibold uppercase tracking-[0.14em] text-[#5cb5ff] sm:text-[16px]">
      {children}
    </h2>
  );
}

function Narrative({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: string;
}) {
  return (
    <article className="border-[#153b60] lg:border-r lg:pr-5 lg:last:border-r-0">

      <div className="flex items-center gap-2 text-[#5eb9ff]">

        <span className="rounded-md border border-[#1b5b91] bg-[#0a2440] p-1.5">
          {icon}
        </span>

        <h3 className="text-[13px] font-semibold">
          {title}
        </h3>

      </div>

      <p className="mt-3 text-[12px] leading-6 text-[#8fa7bf]">
        {children}
      </p>

    </article>
  );
}

function ArchitectureCard({
  icon,
  title,
  items,
}: {
  icon: ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="min-h-[190px] rounded-lg border border-[#174574] bg-[#071b30] p-5">

      <div className="flex items-center gap-2 text-[#5bb8ff]">

        <span>{icon}</span>

        <h3 className="text-[12px] font-semibold">
          {title}
        </h3>

      </div>

      <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">

        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-[12px] leading-6 text-[#8ca4bc]"
          >
            <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-[#2389ee]" />
            <span>{item}</span>
          </li>
        ))}

      </ul>

    </div>
  );
}

function InfoPanel({
  title,
  items,
  icon,
  columns = false,
}: {
  title: string;
  items: string[];
  icon: ReactNode;
  columns?: boolean;
}) {
  return (
    <div className="rounded-[12px] border border-[#174574] bg-[#061426]/85 p-5">

      <div className="flex items-center gap-2 text-[#5db8ff]">

        <span>{icon}</span>

        <SectionLabel>
          {title}
        </SectionLabel>

      </div>

      <ul
        className={`mt-4 grid gap-x-5 gap-y-2 ${
          columns ? "sm:grid-cols-2" : "grid-cols-2"
        }`}
      >

        {items.map((item) => (

          <li
            key={item}
            className="flex items-start gap-2 text-[12px] font-medium leading-6 text-[#aebfd0]"
          >

            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#2389ee]" />

            {item}

          </li>

        ))}

      </ul>

    </div>
  );
}





