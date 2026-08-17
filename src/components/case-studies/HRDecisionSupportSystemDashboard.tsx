"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  ExternalLink,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import type { ReactNode } from "react";

import { hrDecisionSupportSystem } from "@/data/hr-decision-support-system";

const healthAreas = [
  {
    label: "Workforce / Turnover",
    status: "Needs Immediate Attention",
    tone: "amber",
    icon: UsersRound,
  },
  {
    label: "Recruitment",
    status: "Needs Attention",
    tone: "orange",
    icon: Target,
  },
  {
    label: "Learning",
    status: "Healthy",
    tone: "green",
    icon: BookOpen,
  },
  {
    label: "Compliance",
    status: "Needs Immediate Attention",
    tone: "red",
    icon: ShieldCheck,
  },
];

const executiveInsights = [
  {
    number: "01",
    title: "Workforce Stability Requires Attention",
    description:
      "The workforce profile indicates a relatively young employee population, while turnover remains a major management indicator.",
    implication:
      "Retention, onboarding, and workforce stability should remain active management priorities.",
    tone: "amber",
  },
  {
    number: "02",
    title: "Recruitment Progression Needs Improvement",
    description:
      "The recruitment pipeline processes a large number of candidates, with the largest drop occurring between the First and Second Interview.",
    implication:
      "Candidate progression and selection efficiency require attention beyond candidate generation alone.",
    tone: "orange",
  },
  {
    number: "03",
    title: "Recruitment Demand Is Concentrated",
    description:
      "The dashboard identifies departments carrying the largest hiring demand.",
    implication:
      "Recruitment capacity should be aligned with the departments carrying the strongest workforce demand.",
    tone: "blue",
  },
  {
    number: "04",
    title: "Learning Scheduling Can Delay Impact",
    description:
      "The dashboard shows active training investment while some learning activity remains awaiting scheduling.",
    implication:
      "The challenge is converting planned learning into completed development activity.",
    tone: "green",
  },
  {
    number: "05",
    title: "Compliance Requires Proactive Monitoring",
    description:
      "The compliance view identifies documentation gaps, missing contract information, and contracts approaching expiry.",
    implication:
      "HR needs proactive compliance monitoring rather than relying on manual follow-up.",
    tone: "red",
  },
  {
    number: "06",
    title: "HR Reporting Can Become a Decision System",
    description:
      "Workforce, recruitment, learning, engagement, and compliance information are connected into one management view.",
    implication:
      "HR can move from periodic reporting toward continuous workforce decision support.",
    tone: "purple",
  },
];

const architectureSteps = [
  {
    title: "Multiple Excel Sources",
    description:
      "Operational HR datasets across employees, recruitment, contracts, resignations, learning, and training.",
    icon: Database,
  },
  {
    title: "Data Preparation",
    description:
      "Data is prepared and transformed using Power Query.",
    icon: Layers3,
  },
  {
    title: "Power BI Data Model",
    description:
      "HR datasets are structured for cross-functional analysis.",
    icon: BarChart3,
  },
  {
    title: "DAX & KPI Design",
    description:
      "Business measures support workforce, recruitment, training, contracts, and compliance analysis.",
    icon: Activity,
  },
  {
    title: "Executive Decision Support",
    description:
      "Health status becomes insight, risk, and management attention.",
    icon: Sparkles,
  },
];

const toneClasses: Record<string, string> = {
  amber:
    "border-[#b58b45]/30 bg-[#b58b45]/[0.07] text-[#e4c17a]",
  orange:
    "border-[#c87845]/30 bg-[#c87845]/[0.07] text-[#e5a47c]",
  green:
    "border-[#5d9c78]/30 bg-[#5d9c78]/[0.07] text-[#91d1ac]",
  red:
    "border-[#b85c61]/30 bg-[#b85c61]/[0.07] text-[#e49a9f]",
  blue:
    "border-[#7186a6]/30 bg-[#7186a6]/[0.07] text-[#aebed5]",
  purple:
    "border-[#8773a5]/30 bg-[#8773a5]/[0.07] text-[#bcaed0]",
};

export default function HRDecisionSupportSystemDashboard() {
  const dashboardScrollerRef = useRef<HTMLDivElement>(null);
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0d0d] text-[#f3f0e9]">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_78%_8%,rgba(120,111,78,.12),transparent_28%),radial-gradient(circle_at_8%_45%,rgba(74,91,82,.10),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 pb-8 pt-6 sm:px-6 lg:px-8">

        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#b7b09e] transition hover:text-white"
          >
            <ArrowLeft size={13} />
            Back to Projects
          </Link>

          <span className="hidden text-[10px] uppercase tracking-[0.22em] text-white/25 md:block">
            Executive Portfolio System
          </span>
        </div>

        <section className="grid gap-7 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="flex flex-col justify-center rounded-[16px] border border-[#302f29] bg-[#111313]/85 p-6 shadow-[0_30px_100px_rgba(0,0,0,.20)] sm:p-8 lg:border-transparent lg:bg-transparent lg:p-4 lg:pr-10 lg:shadow-none">

            <div className="flex flex-wrap gap-2">
              {[
                "Human Resources",
                "Workforce Intelligence",
                "Talent",
                "Compliance",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-[#35362f] bg-[#171a18] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wide text-[#d6d1c5]"
                >
                  {tag}
                </span>
              ))}
            </div>


            <h1 className="mt-4 max-w-xl text-[40px] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-[50px] lg:text-[60px]">
              HR Decision Support System
            </h1>

            <p className="mt-5 text-sm font-semibold text-[#b9ae89] sm:text-base">
              Transforming Workforce Data into Strategic HR Insights
            </p>

            <p className="mt-4 max-w-xl text-[13px] leading-6 text-[#a8aaa4] sm:text-[14px]">
              An executive Business Intelligence solution that transforms
              fragmented HR operational data into a centralized view of
              workforce health, talent acquisition, learning and development,
              employee engagement, and HR compliance.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/case-studies/hr-decision-support-system/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#817553] px-4 py-2.5 text-[11px] font-semibold text-white shadow-[0_8px_28px_rgba(129,117,83,.20)] transition hover:bg-[#95865e]"
              >
                View Dashboard
                <ExternalLink size={13} />
              </Link>

              <a
                href="#insights"
                className="inline-flex items-center gap-2 rounded-md border border-[#41423b] bg-[#151816] px-4 py-2.5 text-[11px] font-semibold text-[#ddd8cb] transition hover:border-[#686452] hover:text-white"
              >
                Explore Case Study
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[16px] border border-[#34362f] bg-[#111513] p-3 shadow-[0_30px_90px_rgba(0,0,0,.28)]">
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#a69a70] to-transparent opacity-70" />

            <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg border border-[#292d28] bg-[#0b0f0d] p-4 sm:p-6 lg:p-8">
              <div className="relative h-full w-full overflow-hidden rounded-md border border-[#343830] bg-[#0b0e0d] shadow-[0_15px_50px_rgba(0,0,0,.38)]">
                <Image
                  src={hrDecisionSupportSystem.dashboards[1].image}
                  alt="HR Decision Support System Executive Insights"
                  fill
                  priority
                  className="object-contain p-2 sm:p-3"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              </div>
            </div>

          </div>
        </section>

        <section className="mt-6 rounded-[14px] border border-[#30332e] bg-[#111513]/90 p-5 sm:p-6">
          <SectionLabel>PROJECT SNAPSHOT</SectionLabel>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <SnapshotItem
              icon={<BriefcaseBusiness size={16} />}
              label="Business Domain"
              value="Human Resources / Workforce Management"
            />

            <SnapshotItem
              icon={<UsersRound size={16} />}
              label="Primary Focus"
              value="Workforce · Talent · Learning · Engagement · Compliance"
            />

            <SnapshotItem
              icon={<Database size={16} />}
              label="Data Sources"
              value="Multiple operational Excel datasets"
            />

            <SnapshotItem
              icon={<BarChart3 size={16} />}
              label="Reporting Model"
              value="Interactive Executive Reporting"
            />
          </div>
        </section>

        <section className="mt-4 rounded-[14px] border border-[#30332e] bg-[#111513]/90 p-5 sm:p-6">
          <SectionLabel>PROJECT OVERVIEW</SectionLabel>

          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            <Narrative
              icon={<AlertTriangle size={15} />}
              title="Business Challenge"
            >
              HR data existed across multiple operational spreadsheets,
              creating difficult workforce visibility, manual consolidation,
              limited cross-functional analysis, and greater difficulty
              monitoring turnover, recruitment, learning, and compliance.
            </Narrative>

            <Narrative
              icon={<Target size={15} />}
              title="Business Objective"
            >
              Consolidate multiple HR data sources into one trusted reporting
              environment for workforce monitoring, recruitment analysis,
              employee development, compliance management, and strategic
              workforce decision-making.
            </Narrative>

            <Narrative
              icon={<Sparkles size={15} />}
              title="The Intelligence Solution"
            >
              A centralized Power BI HR Decision Support System connecting
              workforce, recruitment, learning, engagement, and compliance
              information through interactive reporting and executive
              decision-support analysis.
            </Narrative>
          </div>
        </section>

        <section className="mt-4 rounded-[14px] border border-[#30332e] bg-[#111513]/90 p-4 sm:p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <SectionLabel>Dashboard Experience</SectionLabel>

              <p className="mt-2 text-[12px] leading-5 text-[#8f948d]">
                Explore the reporting journey from executive health indicators
                to workforce, talent, learning, and compliance intelligence.
              </p>
            </div>

            <Link
              href="/case-studies/hr-decision-support-system/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-md border border-[#494a41] bg-[#171a18] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#bdb8aa] transition hover:border-[#9a8c68] hover:text-white"
            >
              <span>Open Dashboard</span>
              <ArrowRight size={13} className="text-[#b8a97d]" />
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
            className="absolute left-0 top-[100px] z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#494a41] bg-[#171a18]/95 text-[#b8a97d] shadow-[0_8px_24px_rgba(0,0,0,.45)] transition hover:border-[#9a8c68] hover:bg-[#20231f] hover:text-white md:flex"
          >
            <ArrowLeft size={17} />
          </button>
            <div ref={dashboardScrollerRef} className="flex gap-4 overflow-x-auto px-2 pb-6 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {hrDecisionSupportSystem.dashboards.map((dashboard, index) => (
                <Link
                  key={dashboard.title}
                  href={`/case-studies/hr-decision-support-system/dashboard?slide=${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-[320px] shrink-0 text-left"
                >
                  <div className="relative z-0 h-[235px] w-full overflow-visible rounded-lg">
                    <div className="relative h-full w-full overflow-hidden rounded-lg border border-[#30352f] bg-[#0d1110] transition-all duration-300 ease-out group-hover:z-50 group-hover:scale-[1.08] group-hover:border-[#9b8e68] group-hover:shadow-[0_18px_45px_rgba(0,0,0,.45)]">
                      <Image
                        src={dashboard.image}
                        alt={dashboard.title}
                        fill
                        className={`object-contain ${dashboard.title === "Data Model" ? "object-center" : "object-top"} transition-transform duration-300 ease-out`}
                        sizes="260px"
                      />

                      <span className="absolute bottom-2 left-2 rounded bg-[#817553] px-2 py-1 text-[9px] font-bold text-white shadow-[0_4px_12px_rgba(0,0,0,.3)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                  </div>

                  <div className="relative z-10">
                    <h3 className="mt-3 text-[13px] font-semibold text-white transition-colors duration-200 group-hover:text-[#c5b98f]">
                      {dashboard.title}
                    </h3>

                    <p className="mt-1 line-clamp-3 text-[11px] leading-5 text-[#777d76]">
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
              className="absolute right-0 top-[100px] z-[100] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#494a41] bg-[#171a18]/95 text-[#b8a97d] shadow-[0_8px_24px_rgba(0,0,0,.45)] transition hover:border-[#9a8c68] hover:bg-[#20231f] hover:text-white"
            >
              <ArrowRight size={17} />
            </button>
          </div>

        </section>

        <section className="mt-4 rounded-[14px] border border-[#30332e] bg-[#111513]/90 p-5 sm:p-6">
          <SectionLabel>INTELLIGENCE ARCHITECTURE</SectionLabel>

          <p className="mt-2 max-w-3xl text-[12px] leading-5 text-[#8f948d]">
            From fragmented operational HR data to executive decision support.
          </p>

          <div className="mt-6 grid gap-3 lg:grid-cols-5">
            {architectureSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="relative">
                  <div className="h-full rounded-lg border border-[#30352f] bg-[#0d1110] p-4">
                    <div className="flex items-center justify-between">
                      <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[#4a4a3e] bg-[#181b18] text-[#b8aa7b]">
                        <Icon size={15} />
                      </span>

                      <span className="text-[9px] font-bold tracking-[0.12em] text-[#5d625c]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-4 text-[12px] font-semibold text-[#e8e3d7]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[10px] leading-5 text-[#777d76]">
                      {step.description}
                    </p>
                  </div>

                  {index < architectureSteps.length - 1 && (
                    <ArrowRight
                      size={14}
                      className="absolute -right-2 top-1/2 z-20 hidden -translate-y-1/2 text-[#5f625a] lg:block"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-4 rounded-[14px] border border-[#30332e] bg-[#111513]/90 p-5 sm:p-6">
          <div className="flex items-end justify-between gap-5">
            <div>
              <SectionLabel>EXECUTIVE HEALTH</SectionLabel>

              <p className="mt-2 text-[12px] leading-5 text-[#8f948d]">
                Management attention translated from the dashboard health
                indicators.
              </p>
            </div>

            <Activity
              className="hidden text-[#8f8463] sm:block"
              size={20}
            />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {healthAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.label}
                  className={`rounded-lg border p-4 ${toneClasses[area.tone]}`}
                >
                  <div className="flex items-center justify-between">
                    <Icon size={17} />

                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] opacity-60">
                      Health
                    </span>
                  </div>

                  <h3 className="mt-6 text-[13px] font-semibold text-[#eee9df]">
                    {area.label}
                  </h3>

                  <p className="mt-3 text-[12px] font-semibold">
                    {area.status}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="insights"
          className="mt-4 rounded-[14px] border border-[#30332e] bg-[#111513]/90 p-5 sm:p-6"
        >
          <SectionLabel>KEY BUSINESS INSIGHTS</SectionLabel>

          <p className="mt-2 text-[12px] leading-5 text-[#8f948d]">
            Executive interpretation derived from the documented dashboard
            analysis.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {executiveInsights.map((insight) => (
              <article
                key={insight.number}
                className={`rounded-lg border p-6 ${toneClasses[insight.tone]}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.18em] opacity-70">
                    {insight.number}
                  </span>

                  <CheckCircle2 size={15} className="opacity-70" />
                </div>

                <h3 className="mt-5 text-[14px] font-semibold leading-5 text-[#f0ece3]">
                  {insight.title}
                </h3>

                <p className="mt-3 text-[12px] leading-6 text-[#a1a59e]">
                  {insight.description}
                </p>

                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#8d918a]">
                    Business Implication
                  </p>

                  <p className="mt-2 text-[12px] leading-6 text-[#c8c5bb]">
                    {insight.implication}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <InfoPanel
            title="Capabilities Demonstrated"
            items={hrDecisionSupportSystem.capabilities}
            icon={<CheckCircle2 size={15} />}
          />

          <div className="rounded-[14px] border border-[#30332e] bg-[#111513]/90 p-5">
            <SectionLabel>DECISION SUPPORT VALUE</SectionLabel>

            <p className="mt-4 text-[12px] leading-6 text-[#a1a59e]">
              The system connects workforce, recruitment, learning,
              engagement, and compliance information so HR leadership can
              identify priorities, risks, workforce trends, and management
              actions from one reporting environment.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Workforce Intelligence",
                "Talent Intelligence",
                "Learning Analytics",
                "Employee Engagement",
                "Compliance Reporting",
                "Executive Decision Support",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#3b3e37] bg-[#181b18] px-3 py-1.5 text-[10px] font-medium text-[#aaa99e]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-[#2c302b] pt-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#494a40] bg-[#181b18] text-[#b8aa7b]">
                <Sparkles size={15} />
              </span>

              <div>
                <p className="text-[13px] font-semibold leading-5 text-[#e1ddd2]">
                  Data → KPI → Health Indicator → Insight → Management Attention
                </p>

                <p className="mt-2 text-[11px] leading-5 text-[#777d76]">
                  Core decision-support competency demonstrated by the project.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4 overflow-hidden rounded-[14px] border border-[#514a37] bg-gradient-to-r from-[#28291f] to-[#151813] px-5 py-5 text-center shadow-[0_20px_70px_rgba(0,0,0,.22)] sm:px-8 sm:py-6">
          <div className="flex flex-col items-center justify-center gap-5">
            <div>
              <p className="text-[23px] font-semibold leading-tight text-white sm:text-[27px]">
                Ready to turn workforce data
                <br className="hidden sm:block" />
                into strategic HR decisions?
              </p>

              <p className="mt-3 text-[13px] font-medium leading-6 text-[#aaa99e]">
                Let&apos;s build an intelligence environment around the
                decisions your organization needs to make.
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#817553] px-6 py-3 text-[12px] font-semibold text-white shadow-[0_10px_30px_rgba(129,117,83,.20)] transition hover:bg-[#95865e]"
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

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[15px] font-semibold uppercase tracking-[0.14em] text-[#b4a778] sm:text-[16px]">
      {children}
    </h2>
  );
}

function SnapshotItem({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-h-[70px] items-start gap-3 border-[#2d312c] lg:border-r lg:last:border-0 lg:pr-5">
      <div className="mt-0.5 rounded-lg border border-[#45473d] bg-[#181b18] p-2.5 text-[#b5a776]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[11px] font-semibold text-[#ddd9ce] sm:text-[12px]">
          {label}
        </p>

        <p className="mt-1.5 whitespace-pre-line text-[11px] leading-5 text-[#858b83] sm:text-[12px]">
          {value}
        </p>
      </div>
    </div>
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
    <article className="border-[#2d312c] lg:border-r lg:pr-5 lg:last:border-r-0">
      <div className="flex items-center gap-2 text-[#b5a776]">
        <span className="rounded-md border border-[#45473d] bg-[#181b18] p-1.5">
          {icon}
        </span>

        <h3 className="text-[13px] font-semibold text-[#e6e2d8]">
          {title}
        </h3>
      </div>

      <p className="mt-3 text-[12px] leading-6 text-[#858b83]">
        {children}
      </p>
    </article>
  );
}

function InfoPanel({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: ReactNode;
}) {
  return (
    <div className="rounded-[14px] border border-[#30332e] bg-[#111513]/90 p-5">
      <div className="flex items-center gap-2 text-[#b5a776]">
        <span>{icon}</span>
        <SectionLabel>{title}</SectionLabel>
      </div>

      <ul className="mt-4 grid gap-x-5 gap-y-2 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-[12px] font-medium leading-6 text-[#a1a59e]"
          >
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#9d8d62]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}



















