import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Database,
  Layers3,
  Lightbulb,
  Target,
  UsersRound,
} from "lucide-react";

import { caseStudies } from "@/data/case-studies";

const project = caseStudies.find(
  (item) => item.slug === "integrated-real-estate-management-dashboard"
) ?? (() => {
  throw new Error("Integrated real estate management dashboard data is missing.");
})();

export default function IntegratedRealEstateManagementDashboard() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030a16] text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_70%_10%,rgba(18,96,180,.18),transparent_30%),radial-gradient(circle_at_10%_50%,rgba(0,62,130,.12),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-between">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-xs font-medium text-[#76bfff] transition hover:text-white">
            <ArrowLeft size={13} />
            Back to Projects
          </Link>
          <span className="hidden text-[10px] uppercase tracking-[0.22em] text-white/30 md:block">Executive Portfolio System</span>
        </div>

        <section className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex flex-col justify-center rounded-[14px] border border-[#174574] bg-[#061426]/80 p-6 shadow-[0_30px_100px_rgba(0,60,130,.14)] sm:p-8 lg:border-transparent lg:bg-transparent lg:p-4 lg:pr-8 lg:shadow-none">
            <div className="flex flex-wrap gap-2">
              {[project.category, project.industry].map((tag) => (
                <span key={tag} className="rounded-md border border-[#173e68] bg-[#0a2441] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wide text-[#d8eaff]">{tag}</span>
              ))}
            </div>
            <h1 className="mt-6 max-w-xl text-[38px] font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-[48px] lg:text-[58px]">{project.title}</h1>
            <p className="mt-5 text-sm font-semibold text-[#45a9ff] sm:text-base">{project.role}</p>
            <p className="mt-4 max-w-xl text-[14px] leading-6 text-[#b7c7d9] sm:text-[14px]">{project.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#overview" className="inline-flex items-center gap-2 rounded-md bg-[#0969ed] px-4 py-2.5 text-[11px] font-semibold text-white shadow-[0_8px_28px_rgba(9,105,237,.24)] transition hover:bg-[#1777f5]">Explore Case Study <ArrowRight size={13} /></a>
            </div>
          </div>

          <div className="flex min-h-[260px] items-center justify-center rounded-[14px] border border-[#1c4a79] bg-[#061426] p-6 text-center shadow-[0_30px_90px_rgba(0,65,140,.24)] sm:p-10">
            <div className="max-w-md">
              <BarChart3 className="mx-auto size-10 text-[#5cb5ff]" />
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8DBBFF]">Dashboard Preview</p>
              <p className="mt-3 text-sm leading-6 text-[#8fa7bf]">Screenshots for this project have not been provided yet.</p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-5 sm:p-6">
          <SectionLabel>Project Snapshot</SectionLabel>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [BriefcaseBusiness, "Client", project.client],
              [Layers3, "Industry", project.industry],
              [BarChart3, "Year", project.year],
              [Database, "Tools", project.tools.join(", ")],
            ].map(([Icon, label, value]) => {
              const SnapshotIcon = Icon as typeof BriefcaseBusiness;
              return <div key={label as string} className="flex min-h-[70px] items-start gap-3 border-[#143b62] lg:border-r lg:last:border-0 lg:pr-5"><div className="mt-0.5 rounded-lg border border-[#1d5a92] bg-[#0a2340] p-2.5 text-[#64b8ff]"><SnapshotIcon size={16} /></div><div><p className="text-[13px] font-semibold text-[#d7e6f5]">{label as string}</p><p className="mt-1.5 text-[13px] leading-6 text-[#91a8bf]">{value as string}</p></div></div>;
            })}
          </div>
        </section>

        <section id="overview" className="mt-4 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-5 sm:p-6">
          <SectionLabel>Project Overview</SectionLabel>
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            <Narrative icon={<UsersRound size={15} />} title="Business Challenge">{project.content.challenge}</Narrative>
            <Narrative icon={<Target size={15} />} title="Business Objectives">{project.objectives.join(" ")}</Narrative>
            <Narrative icon={<Lightbulb size={15} />} title="Solution">{project.content.solution}</Narrative>
          </div>
        </section>

        <section className="mt-4 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-5 sm:p-6">
          <SectionLabel>Business Impact</SectionLabel>
          <p className="mt-4 max-w-4xl text-[14px] leading-7 text-[#a9bdd2]">{project.content.results}</p>
          <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5cb5ff]">No quantified results were provided for this project.</p>
        </section>

        <section className="mt-4 rounded-[12px] border border-[#174574] bg-gradient-to-r from-[#08214a] to-[#063171] px-5 py-6 text-center shadow-[0_20px_70px_rgba(0,72,170,.18)] sm:px-8">
          <p className="text-[24px] font-semibold leading-tight text-white sm:text-[26px]">Ready to build a reporting solution that supports better business decisions?</p>
          <p className="mt-3 text-[14px] font-medium leading-6 text-[#a8bed5]">Let&apos;s create a structured intelligence solution around your business decisions.</p>
          <Link href="/#contact" className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#0b75f4] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(11,117,244,.28)] transition hover:bg-[#1782ff]">Let&apos;s Talk About Your Project <ArrowRight size={14} /></Link>
        </section>
      </div>
    </main>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <h2 className="text-[15px] font-semibold uppercase tracking-[0.14em] text-[#5cb5ff] sm:text-[16px]">{children}</h2>;
}

function Narrative({ icon, title, children }: { icon: React.ReactNode; title: string; children: string }) {
  return <article className="border-[#153b60] lg:border-r lg:pr-5 lg:last:border-r-0"><div className="flex items-center gap-2 text-[#5eb9ff]"><span className="rounded-md border border-[#1b5b91] bg-[#0a2440] p-1.5">{icon}</span><h3 className="text-[13px] font-semibold">{title}</h3></div><p className="mt-3 text-[12px] leading-6 text-[#8fa7bf]">{children}</p></article>;
}
