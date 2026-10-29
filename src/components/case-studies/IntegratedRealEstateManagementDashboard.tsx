import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, BarChart3, BriefcaseBusiness, Database, Layers3, Lightbulb, Target, UsersRound } from "lucide-react";

import { caseStudies } from "@/data/case-studies";

const project = caseStudies.find((item) => item.slug === "integrated-real-estate-management-dashboard") ?? (() => {
  throw new Error("Integrated real estate management dashboard data is missing.");
})();

const dashboardPages = [
  { number: "01", title: "Executive Overview", subtitle: "Company-wide performance", description: "Brings together Human Resources highlights, the sales funnel, sales and financial performance, sales achievement, and project performance in a single management view." },
  { number: "02", title: "Sales Performance", subtitle: "Leads, contracts & cancellations", description: "Presents lead and meeting trends, meeting source distribution, contract sales versus cancellations, project sales performance, and related indicators." },
  { number: "03", title: "Human Resources", subtitle: "Workforce & employee lifecycle", description: "Covers employee headcount, probation, resignations, contracts requiring attention, missing contract dates, medical coverage, social insurance, training, and recruitment." },
  { number: "04", title: "Customer Experience", subtitle: "Customer cases & collections", description: "Tracks legal cases, amounts due for collection, collection status, outstanding balances, installment-related trends, and handover indicators." },
  { number: "05", title: "Procurement", subtitle: "Purchasing & payment performance", description: "Displays purchase order counts and values, purchase payments, payment rates, goods receipt status, and monthly purchasing versus payment trends." },
];

const indicators = [
  ["Employee Headcount", "122"],
  ["Total Leads", "59"],
  ["Contract Sales Value", "462M"],
  ["Cancellation Value", "295M"],
  ["Net Sales Value", "166.46M"],
  ["Cancellation Rate", "39.00%"],
  ["Total Purchase Orders", "79"],
  ["Total Purchase Value", "4.12M"],
  ["Total Purchase Payments", "3.50M"],
  ["Purchase Payment Rate", "84.99%"],
];

export default function IntegratedRealEstateManagementDashboard() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030a16] text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_70%_10%,rgba(18,96,180,.18),transparent_30%),radial-gradient(circle_at_10%_50%,rgba(0,62,130,.12),transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-[1500px] px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-between">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-xs font-medium text-[#76bfff] transition hover:text-white"><ArrowLeft size={13} /> Back to Projects</Link>
          <span className="hidden text-[10px] uppercase tracking-[0.22em] text-white/30 md:block">Executive Portfolio System</span>
        </div>

        <section className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex flex-col justify-center rounded-[14px] border border-[#174574] bg-[#061426]/80 p-6 sm:p-8 lg:border-transparent lg:bg-transparent lg:p-4 lg:pr-8">
            <div className="flex flex-wrap gap-2"><span className="rounded-md border border-[#173e68] bg-[#0a2441] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wide text-[#d8eaff]">{project.category}</span><span className="rounded-md border border-[#173e68] bg-[#0a2441] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wide text-[#d8eaff]">{project.industry}</span></div>
            <h1 className="mt-6 max-w-xl text-[38px] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-[48px] lg:text-[58px]">{project.title}</h1>
            <p className="mt-5 text-sm font-semibold text-[#45a9ff] sm:text-base">{project.role}</p>
            <p className="mt-4 max-w-xl text-[14px] leading-6 text-[#b7c7d9]">{project.excerpt}</p>
            <a href="#overview" className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-[#0969ed] px-4 py-2.5 text-[11px] font-semibold text-white shadow-[0_8px_28px_rgba(9,105,237,.24)] transition hover:bg-[#1777f5]">Explore Case Study <ArrowRight size={13} /></a>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[14px] border border-[#1c4a79] bg-[#061426] shadow-[0_30px_90px_rgba(0,65,140,.24)]"><Image src={project.images.cover} alt="Integrated Real Estate Management Dashboard landing page" fill priority className="object-contain object-top" sizes="(max-width: 1024px) 100vw, 60vw" /></div>
        </section>

        <section className="mt-6 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-5 sm:p-6"><SectionLabel>Project Snapshot</SectionLabel><div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{[[BriefcaseBusiness, "Client", project.client], [Layers3, "Industry", project.industry], [BarChart3, "Year", project.year], [Database, "Tools", project.tools.join(", ")]].map(([Icon, label, value]) => { const SnapshotIcon = Icon as typeof BriefcaseBusiness; return <div key={label as string} className="flex min-h-[70px] items-start gap-3 border-[#143b62] lg:border-r lg:last:border-0 lg:pr-5"><div className="mt-0.5 rounded-lg border border-[#1d5a92] bg-[#0a2340] p-2.5 text-[#64b8ff]"><SnapshotIcon size={16} /></div><div><p className="text-[13px] font-semibold text-[#d7e6f5]">{label as string}</p><p className="mt-1.5 text-[13px] leading-6 text-[#91a8bf]">{value as string}</p></div></div>; })}</div></section>

        <section id="overview" className="mt-4 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-5 sm:p-6"><SectionLabel>Project Overview</SectionLabel><div className="mt-5 grid gap-5 lg:grid-cols-3"><Narrative icon={<UsersRound size={15} />} title="Business Challenge">{project.content.challenge}</Narrative><Narrative icon={<Target size={15} />} title="Business Objectives">{project.objectives.join(" ")}</Narrative><Narrative icon={<Lightbulb size={15} />} title="The Solution">{project.content.solution}</Narrative></div></section>

        <section className="mt-4 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-5 sm:p-6"><SectionLabel>Dashboard Pages</SectionLabel><p className="mt-3 max-w-3xl text-sm leading-7 text-[#a9bdd2]">The landing page acts as the main navigation screen connecting the dashboard&apos;s analytical areas.</p><div className="mt-6 grid gap-4 lg:grid-cols-2">{dashboardPages.map((page, index) => <article key={page.title} className="grid gap-4 rounded-xl border border-[#173e68] bg-[#071a30] p-4 sm:grid-cols-[180px_1fr]"><div className="relative aspect-video overflow-hidden rounded-lg border border-[#1c4a79] bg-[#061426]"><Image src={project.images.gallery[index + 1]} alt={`${page.title} dashboard screenshot`} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 180px" /></div><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5cb5ff]">{page.number} / {page.subtitle}</p><h3 className="mt-2 text-base font-semibold text-white">{page.title}</h3><p className="mt-2 text-[12px] leading-6 text-[#8fa7bf]">{page.description}</p></div></article>)}</div></section>

        <section className="mt-4 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-5 sm:p-6"><SectionLabel>Selected Dashboard Indicators</SectionLabel><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{indicators.map(([label, value]) => <div key={label} className="rounded-lg border border-[#173e68] bg-[#071a30] p-4"><p className="text-[10px] uppercase leading-4 tracking-wide text-[#8fa7bf]">{label}</p><p className="mt-2 text-xl font-semibold text-[#dff1ff]">{value}</p></div>)}</div><p className="mt-4 text-[11px] leading-5 text-[#718ba6]">These are selected figures displayed in the dashboard snapshot, not verified business improvements attributable to this project.</p></section>

        <section className="mt-4 grid gap-4 lg:grid-cols-2"><InfoSection title="Business Impact" icon={<BarChart3 size={15} />}><p>A unified reporting view across key business functions helps management explore operational and financial indicators within one connected environment.</p><ul><li>Improved visibility across multiple departments.</li><li>Connected performance analysis for operational and financial information.</li><li>Structured monitoring through dedicated analytical pages.</li><li>Trend exploration and management decision support.</li></ul><p>The dashboard demonstrates how business intelligence can organize fragmented information into a structured management reporting experience.</p></InfoSection><InfoSection title="Project Highlights" icon={<Target size={15} />}><ul><li>Integrated executive reporting across multiple business functions.</li><li>Dedicated analytical pages for sales, HR, customer experience, and procurement.</li><li>KPI cards, trend charts, funnel analysis, and project-level tables.</li><li>Monthly and departmental filtering where available in the dashboard.</li><li>Centralized navigation through a dedicated landing page.</li></ul></InfoSection></section>

        <section className="mt-4 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-5 sm:p-6"><SectionLabel>Tools &amp; Technologies</SectionLabel><div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["Microsoft Power BI", "Interactive dashboards and business performance reporting."], ["DAX", "Measures and calculations for analytical indicators."], ["Power Query", "Data preparation and transformation."], ["Microsoft Excel", "Spreadsheet-based business data sources."]].map(([title, description]) => <div key={title} className="rounded-lg border border-[#173e68] bg-[#071a30] p-4"><h3 className="text-sm font-semibold text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-[#8fa7bf]">{description}</p></div>)}</div><p className="mt-4 text-[11px] leading-5 text-[#718ba6]">The supplied dashboard documentation identifies online Excel sheets, offline Excel sheets, and a system as data sources. Complete technical architecture and detailed integration specifications were not supplied.</p></section>

        <section className="mt-4 rounded-[12px] border border-[#174574] bg-gradient-to-r from-[#08214a] to-[#063171] px-5 py-7 text-center shadow-[0_20px_70px_rgba(0,72,170,.18)] sm:px-8"><p className="text-[24px] font-semibold leading-tight text-white sm:text-[30px]">Turning Business Data Into Executive Insight</p><p className="mx-auto mt-3 max-w-2xl text-[14px] leading-6 text-[#a8bed5]">{project.contactCTA.description}</p><div className="mt-5 flex flex-wrap justify-center gap-3"><Link href="/#contact" className="inline-flex items-center gap-2 rounded-md bg-[#0b75f4] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(11,117,244,.28)] transition hover:bg-[#1782ff]">Get in Touch <ArrowRight size={14} /></Link><Link href="/case-studies" className="inline-flex items-center gap-2 rounded-md border border-[#5a91d0] px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-white/10">Explore More Projects <ArrowRight size={14} /></Link></div></section>
      </div>
    </main>
  );
}

function SectionLabel({ children }: { children: ReactNode }) { return <h2 className="text-[15px] font-semibold uppercase tracking-[0.14em] text-[#5cb5ff] sm:text-[16px]">{children}</h2>; }
function Narrative({ icon, title, children }: { icon: ReactNode; title: string; children: string }) { return <article className="border-[#153b60] lg:border-r lg:pr-5 lg:last:border-r-0"><div className="flex items-center gap-2 text-[#5eb9ff]"><span className="rounded-md border border-[#1b5b91] bg-[#0a2440] p-1.5">{icon}</span><h3 className="text-[13px] font-semibold">{title}</h3></div><p className="mt-3 text-[12px] leading-6 text-[#8fa7bf]">{children}</p></article>; }
function InfoSection({ title, icon, children }: { title: string; icon: ReactNode; children: ReactNode }) { return <section className="rounded-[12px] border border-[#174574] bg-[#061426]/85 p-5 sm:p-6"><div className="flex items-center gap-2 text-[#5eb9ff]"><span className="rounded-md border border-[#1b5b91] bg-[#0a2440] p-1.5">{icon}</span><SectionLabel>{title}</SectionLabel></div><div className="mt-4 space-y-3 text-[13px] leading-7 text-[#a9bdd2] [&_li]:ml-5 [&_li]:list-disc">{children}</div></section>; }
