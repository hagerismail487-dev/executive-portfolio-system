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
import { useRef, type ReactNode } from "react";

import { crmSalesIntelligenceProject as project } from "@/data/crm-sales-intelligence";

const toneClasses: Record<string, string> = {
  danger:
    "text-[#ff666d] border-[#ff666d]/20 bg-[#ff666d]/[0.06]",
  blue:
    "text-[#53b6ff] border-[#53b6ff]/20 bg-[#53b6ff]/[0.06]",
  green:
    "text-[#67e8a5] border-[#67e8a5]/20 bg-[#67e8a5]/[0.06]",
  amber:
    "text-[#ffd35c] border-[#ffd35c]/20 bg-[#ffd35c]/[0.06]",
  purple:
    "text-[#d48cff] border-[#d48cff]/20 bg-[#d48cff]/[0.06]",
};

export default function CRMSalesIntelligenceDashboard() {
  const dashboardScrollerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen overflow-hidden bg-[#030a16] text-white">

      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_70%_10%,rgba(18,96,180,.18),transparent_30%),radial-gradient(circle_at_10%_50%,rgba(0,62,130,.12),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 pb-8 pt-6 sm:px-6 lg:px-8">

        {/* Navigation */}

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

        {/* Hero */}

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
                href="/case-studies/crm-sales-intelligence/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#0969ed] px-4 py-2.5 text-[11px] font-semibold text-white shadow-[0_8px_28px_rgba(9,105,237,.24)] transition hover:bg-[#1777f5]"
              >
                View Dashboard
                <ExternalLink size={13} />
              </Link>

              <a
                href="#insights"
                className="inline-flex items-center gap-2 rounded-md border border-[#31506f] bg-[#071a2f] px-4 py-2.5 text-[11px] font-semibold text-white transition hover:border-[#4b78a4]"
              >
                Explore Case Study
                <ArrowRight size={13} />
              </a>

            </div>

          </div>

          {/* Hero Dashboard */}

          <div className="relative overflow-hidden rounded-[14px] border border-[#1c4a79] bg-[#061426] p-3 shadow-[0_30px_90px_rgba(0,65,140,.24)]">

            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#1685ff] to-transparent opacity-70" />

            <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg border border-[#173d64] bg-[#081a2d] p-5 sm:p-7 lg:p-9">

              <div className="relative h-full w-full overflow-hidden rounded-md border border-[#214a72] bg-[#061321] shadow-[0_15px_50px_rgba(0,0,0,.35)]">

                <Image
                  src={project.dashboards[0].image}
                  alt={`${project.title} - ${project.dashboards[0].title}`}
                  fill
                  priority
                  className="object-contain p-2 sm:p-3"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />

              </div>

            </div>

          </div>

        </section>

        {/* Snapshot */}

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
              ][index];

              return (
                <div
                  key={item.label}
                  className="flex min-h-[70px] items-start gap-3 border-[#143b62] lg:border-r lg:last:border-0 lg:pr-5"
                >

                  <div className="mt-0.5 rounded-lg border border-[#1d5a92] bg-[#0a2340] p-2.5 text-[#64b8ff]">
                    <Icon size={16} />
                  </div>

                  <div className="min-w-0">

                    <p className="text-[11px] font-semibold text-[#d7e6f5] sm:text-[12px]">
                      {item.label}
                    </p>

                    <p className="mt-1.5 whitespace-pre-line text-[11px] leading-5 text-[#91a8bf] sm:text-[12px]">
                      {item.value}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </section>

        {/* Overview */}

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

        {/* Dashboard Experience */}

        <section className="mt-4 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-4 sm:p-5">

          <div className="flex items-center justify-between gap-4">
            <div>
              <SectionLabel>
                Dashboard Experience
              </SectionLabel>

              <p className="mt-2 text-[12px] leading-5 text-[#8fa7bf]">
                Explore the complete CRM sales intelligence reporting journey.
              </p>
            </div>

            <Link
              href="/case-studies/crm-sales-intelligence/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-md border border-[#31506f] bg-[#071a2f] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#a9bdd2] transition hover:border-[#4b78a4] hover:text-white"
            >
              <span>Open Dashboard</span>
              <ArrowRight size={13} className="text-[#5cb5ff]" />
            </Link>
          </div>

          <div className="relative mt-7 overflow-visible">

            <button
              type="button"
              aria-label="Previous dashboard"
              onClick={() =>
                dashboardScrollerRef.current?.scrollBy({
                  left: -266,
                  behavior: "smooth",
                })
              }
              className="absolute left-0 top-[100px] z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#31506f] bg-[#071a2f]/95 text-[#5cb5ff] shadow-[0_8px_24px_rgba(0,0,0,.45)] transition hover:border-[#4b78a4] hover:bg-[#0b2440] hover:text-white md:flex"
            >
              <ArrowLeft size={17} />
            </button>

            <div
              ref={dashboardScrollerRef}
              className="flex gap-4 overflow-x-auto px-2 pb-6 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >

              {project.dashboards.map((dashboard, index) => (

                <Link
                  key={dashboard.title}
                  href={`/case-studies/crm-sales-intelligence/dashboard?slide=${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative min-w-[190px] flex-1 text-left sm:min-w-[205px]"
                >

                  <div className="relative z-0 aspect-[16/10] overflow-visible rounded-lg">

                    <div
                      className="
                        relative
                        h-full
                        w-full
                        overflow-hidden
                        rounded-lg
                        border
                        border-[#173b61]
                        bg-[#07192b]
                        transition-all
                        duration-300
                        ease-out
                        group-hover:z-50
                        group-hover:scale-[1.08]
                        group-hover:border-[#1987ff]
                        group-hover:shadow-[0_18px_45px_rgba(0,96,190,.35)]
                      "
                    >

                      <Image
                        src={dashboard.image}
                        alt={dashboard.title}
                        fill
                        className="object-cover object-top transition-transform duration-300 ease-out"
                        sizes="260px"
                      />

                      <span
                        className="
                          absolute
                          bottom-2
                          left-2
                          rounded
                          bg-[#0873ef]
                          px-2
                          py-1
                          text-[9px]
                          font-bold
                          shadow-[0_4px_12px_rgba(0,0,0,.3)]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                  </div>

                  <div className="relative z-10">

                    <h3 className="mt-3 text-[13px] font-semibold text-white transition-colors duration-200 group-hover:text-[#67bbff]">
                      {dashboard.title}
                    </h3>

                    <p className="mt-1 line-clamp-3 text-[11px] leading-5 text-[#7890aa]">
                      {dashboard.description}
                    </p>

                  </div>

                </Link>

              ))}

            </div>

            <button
              type="button"
              aria-label="Next dashboard"
              onClick={() =>
                dashboardScrollerRef.current?.scrollBy({
                  left: 266,
                  behavior: "smooth",
                })
              }
              className="absolute right-0 top-[100px] z-[100] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#31506f] bg-[#071a2f]/95 text-[#5cb5ff] shadow-[0_8px_24px_rgba(0,0,0,.45)] transition hover:border-[#4b78a4] hover:bg-[#0b2440] hover:text-white"
            >
              <ArrowRight size={17} />
            </button>

          </div>

        </section>

        {/* Analytical Framework */}

        <section className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">

          <InfoPanel
            title="Analytical Framework"
            items={[
              "Revenue",
              "Sales Team",
              "Pipeline",
              "Product",
              "Customer",
            ]}
            icon={<Layers3 size={15} />}
            columns
          />

          <div className="rounded-[12px] border border-[#174574] bg-[#061426]/85 p-5">

            <SectionLabel>
              Decision Support
            </SectionLabel>

            <p className="mt-4 text-[12px] leading-6 text-[#a9bdd2]">
              The solution connects analytical perspectives to help management understand what is happening, diagnose performance drivers and risks, identify opportunities, and prioritize areas for action.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">

              {project.technologies.map((technology) => (

                <span
                  key={technology}
                  className="rounded-full border border-[#204a73] bg-[#0a2038] px-3 py-1.5 text-[10px] font-medium text-[#aac0d5]"
                >
                  {technology}
                </span>

              ))}

            </div>

          </div>

        </section>

        {/* Insights */}

        <section
          id="insights"
          className="mt-4 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-4 sm:p-5"
        >

          <SectionLabel>
            Key Business Insights
          </SectionLabel>

          <p className="mt-2 text-[12px] leading-5 text-[#8fa7bf]">
            Executive findings documented in the CRM sales intelligence analysis.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-5">

            {project.insights.map((insight) => (

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

                <p className="mt-2 text-[11px] font-semibold text-white/90">
                  {insight.secondary}
                </p>

                <p className="mt-4 min-h-[52px] text-[11px] font-medium leading-5 text-[#b8c8d9]">
                  {insight.detail}
                </p>

                <div className="mt-4 border-t border-white/10 pt-3">

                  <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-white/70">
                    Decision support
                  </p>

                  <p className="mt-2 text-[11px] font-medium leading-5 text-[#d1dce8]">
                    {insight.decision}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* Capabilities / Positioning */}

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
              CRM Sales Intelligence demonstrates how CRM opportunity data can be transformed into an integrated intelligence environment connecting revenue, pipeline efficiency, sales teams, products, customers, and regional performance.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">

              {[
                "Business Intelligence",
                "CRM Analytics",
                "Sales Performance",
                "Pipeline Analytics",
                "Customer Intelligence",
                "Product Intelligence",
                "Decision Support",
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

        {/* CTA */}

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
            className="flex items-start gap-2 text-[11px] font-medium leading-5 text-[#aebfd0]"
          >

            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#2389ee]" />

            {item}

          </li>

        ))}

      </ul>

    </div>
  );
}

