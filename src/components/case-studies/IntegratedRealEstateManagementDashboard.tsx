"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, BarChart3, BriefcaseBusiness, Database, Layers3, Lightbulb, Target, UsersRound, X } from "lucide-react";
import { useEffect, useState } from "react";

import { caseStudies } from "@/data/case-studies";

const project = caseStudies.find((item) => item.slug === "integrated-real-estate-management-dashboard") ?? (() => {
  throw new Error("Integrated real estate management dashboard data is missing.");
})();

const dashboardPages = [
  { number: "01", title: "Landing Page", subtitle: "Dashboard navigation", description: "Provides the main navigation screen connecting the dashboard's analytical areas.", image: "/projects/integrated-real-estate-management-dashboard/01-landing-page.png" },
  { number: "02", title: "Executive Overview", subtitle: "Company-wide performance", description: "Brings together Human Resources highlights, the sales funnel, sales and financial performance, sales achievement, and project performance in a single management view.", image: "/projects/integrated-real-estate-management-dashboard/02-executive-overview.png" },
  { number: "03", title: "Sales Performance", subtitle: "Leads, contracts & cancellations", description: "Presents lead and meeting trends, meeting source distribution, contract sales versus cancellations, project sales performance, and related indicators.", image: "/projects/integrated-real-estate-management-dashboard/03-sales-performance.png" },
  { number: "04", title: "Human Resources", subtitle: "Workforce & employee lifecycle", description: "Covers employee headcount, probation, resignations, contracts requiring attention, missing contract dates, medical coverage, social insurance, training, and recruitment.", image: "/projects/integrated-real-estate-management-dashboard/04-human-resources.png" },
  { number: "05", title: "Customer Experience", subtitle: "Customer cases & collections", description: "Tracks legal cases, amounts due for collection, collection status, outstanding balances, installment-related trends, and handover indicators.", image: "/projects/integrated-real-estate-management-dashboard/05-customer-experience.png" },
  { number: "06", title: "Procurement", subtitle: "Purchasing & payment performance", description: "Displays purchase order counts and values, purchase payments, payment rates, goods receipt status, and monthly purchasing versus payment trends.", image: "/projects/integrated-real-estate-management-dashboard/06-procurement.png" },
];

export default function IntegratedRealEstateManagementDashboard() {
  const [activeDashboard, setActiveDashboard] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activeDashboard === null) return;
      if (event.key === "Escape") setActiveDashboard(null);
      if (event.key === "ArrowRight") setActiveDashboard((active) => active === null ? 0 : (active + 1) % dashboardPages.length);
      if (event.key === "ArrowLeft") setActiveDashboard((active) => active === null ? dashboardPages.length - 1 : (active - 1 + dashboardPages.length) % dashboardPages.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeDashboard]);

  const activePage = activeDashboard === null ? null : dashboardPages[activeDashboard];

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
          <div className="relative overflow-hidden rounded-[14px] border border-[#1c4a79] bg-[#061426] p-3 shadow-[0_30px_90px_rgba(0,65,140,.24)]">
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#1685ff] to-transparent opacity-70" />
            <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg border border-[#173d64] bg-[#081a2d] p-5 sm:p-7 lg:p-9">
              <div className="relative h-full w-full overflow-hidden rounded-md border border-[#214a72] bg-[#061321] shadow-[0_15px_50px_rgba(0,0,0,.35)]">
                <Image
                  src={project.images.cover}
                  alt="Integrated Real Estate Management Dashboard landing page"
                  fill
                  priority
                  className="object-contain p-2 sm:p-3"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-5 sm:p-6"><SectionLabel>Project Snapshot</SectionLabel><div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{[[BriefcaseBusiness, "Domain", project.industry], [Layers3, "Primary Focus", project.category], [BarChart3, "Reporting Scope", "Executive management reporting"], [Database, "Data Sources", "Excel sheets and system data"]].map(([Icon, label, value]) => { const SnapshotIcon = Icon as typeof BriefcaseBusiness; return <div key={label as string} className="flex min-h-[70px] items-start gap-3 border-[#143b62] lg:border-r lg:last:border-0 lg:pr-5"><div className="mt-0.5 rounded-lg border border-[#1d5a92] bg-[#0a2340] p-2.5 text-[#64b8ff]"><SnapshotIcon size={16} /></div><div className="min-w-0"><p className="text-[11px] font-semibold text-[#d7e6f5] sm:text-[12px]">{label as string}</p><p className="mt-1.5 text-[11px] leading-5 text-[#91a8bf] sm:text-[12px]">{value as string}</p></div></div>; })}</div></section>

        <section id="overview" className="mt-4 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-5 sm:p-6"><SectionLabel>Project Overview</SectionLabel><div className="mt-5 grid gap-5 lg:grid-cols-2"><Narrative icon={<UsersRound size={15} />} title="Business Challenge">{project.content.challenge}</Narrative><Narrative icon={<Target size={15} />} title="Business Objective">{project.objectives.join(" ")}</Narrative><Narrative icon={<Lightbulb size={15} />} title="Solution">{project.content.solution}</Narrative><Narrative icon={<BarChart3 size={15} />} title="Dashboard Experience">The dashboard presents executive, sales, human resources, customer experience, and procurement reporting through dedicated analytical pages connected from a central landing page.</Narrative></div></section>

        <section className="mt-4 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-4 sm:p-5"><SectionLabel>Data &amp; Reporting Architecture</SectionLabel><p className="mt-2 text-[12px] leading-5 text-[#8fa7bf]">How operational business data is organized into one connected management reporting experience.</p><div className="mt-5 grid gap-3 md:grid-cols-3"><ArchitectureCard icon={<Database size={18} />} title="Data Sources" items={["Online Excel sheets", "Offline Excel sheets", "System data"]} /><ArchitectureCard icon={<Layers3 size={18} />} title="Core Data Areas" items={["Sales", "Human resources", "Customer experience", "Procurement", "Projects", "Collections", "Handover", "Payments"]} /><ArchitectureCard icon={<BarChart3 size={18} />} title="Analytical Layer" items={["KPI cards", "Charts", "Funnels", "Tables", "Filters", "Management views"]} /></div></section>

        <section className="mt-4 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-4 sm:p-5"><div className="flex flex-wrap items-start justify-between gap-4"><div><SectionLabel>Dashboard Experience</SectionLabel><p className="mt-2 text-[12px] leading-5 text-[#8fa7bf]">Explore the full reporting journey across the project dashboard views.</p></div><button type="button" onClick={() => setActiveDashboard(0)} className="inline-flex shrink-0 items-center gap-2 rounded-md border border-[#31577d] bg-[#071525] px-4 py-2 text-[10px] font-semibold uppercase tracking-wide text-white transition hover:border-[#4d8bc2] hover:bg-[#0a2138]">View Landing Page <ArrowRight size={13} /></button></div><div className="mt-5 overflow-visible"><div className="flex gap-4 overflow-x-auto px-2 pb-6 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{dashboardPages.map((page, index) => <button key={page.title} type="button" onClick={() => setActiveDashboard(index)} className="group relative min-w-[190px] flex-1 text-left sm:min-w-[205px]"><div className="relative z-0 aspect-[16/10] overflow-visible rounded-lg"><div className="relative h-full w-full overflow-hidden rounded-lg border border-[#173b61] bg-[#07192b] transition-all duration-300 ease-out group-hover:z-50 group-hover:scale-[1.08] group-hover:border-[#1987ff] group-hover:shadow-[0_18px_45px_rgba(0,96,190,.35)]"><Image src={page.image} alt={page.title} fill className="object-cover object-top transition-transform duration-300 ease-out" sizes="260px" /><span className="absolute bottom-2 left-2 rounded bg-[#0873ef] px-2 py-1 text-[9px] font-bold shadow-[0_4px_12px_rgba(0,0,0,.3)]">{page.number}</span></div></div><div className="relative z-10"><h3 className="mt-3 text-[13px] font-semibold text-white transition-colors duration-200 group-hover:text-[#67bbff]">{page.title}</h3><p className="mt-1 line-clamp-3 text-[11px] leading-5 text-[#7890aa]">{page.description}</p></div></button>)}</div></div></section>

        <section id="insights" className="mt-4 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-4 sm:p-5"><div className="flex flex-wrap items-end justify-between gap-3"><div><SectionLabel>Key Business Insights</SectionLabel><p className="mt-2 max-w-3xl text-[12px] leading-5 text-[#8fa7bf]">A compact view of the dashboard&apos;s reported indicators across sales, funnel activity, workforce planning, and procurement.</p></div><span className="rounded-md border border-[#214b73] bg-[#071a2d] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7da6c9]">Source: supplied dashboard pages</span></div><div className="mt-5 grid gap-3 lg:grid-cols-2"><InsightGroup tone="blue" title="Sales Performance & Cancellation Exposure" metrics={[["Contract Sales Value", "462M"], ["Cancellation Value", "295M"], ["Net Sales Value", "166.46M"], ["Displayed Cancellation Rate", "39.00%"]]}><p>Review contract sales, cancellations, and net sales together to understand the reported sales position.</p></InsightGroup><InsightGroup tone="green" title="Lead Generation & Sales Funnel" metrics={[["Total Leads", "59"], ["Total Meetings", "86"], ["Total Orientations", "2.35K"], ["Sales Target", "2bn"], ["Sales Achievement", "19.83%"]]}><p>These dashboard indicators frame activity from lead generation through meetings, orientations, target setting, and reported achievement.</p></InsightGroup><InsightGroup tone="yellow" title="Workforce Overview" metrics={[["Employee Headcount", "122"], ["Employees on Probation", "22"], ["Annual Resignations", "94"], ["Contracts Requiring Attention", "49"], ["Medical Coverage", "98"], ["Social Insurance Registered", "84"]]}><p>Headcount and employee-lifecycle indicators provide a concise view of workforce status and areas requiring management attention.</p></InsightGroup><InsightGroup tone="purple" title="Procurement & Payment Performance" metrics={[["Total Purchase Orders", "79"], ["Total Purchase Value", "4.12M"], ["Total Purchase Payments", "3.50M"], ["Purchase Payment Rate", "84.99%"]]}><p>Purchase volume, value, payments, and payment rate can be reviewed together to monitor procurement activity and payment status.</p></InsightGroup></div></section>

        <section className="mt-4 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-5"><div className="flex items-center gap-2 text-[#5db8ff]"><span className="text-[#5db8ff]">✓</span><SectionLabel>Capabilities Demonstrated</SectionLabel></div><ul className="mt-4 grid gap-x-5 gap-y-2 sm:grid-cols-2">{["Executive reporting", "Cross-functional performance monitoring", "Sales and cancellation analysis", "Workforce reporting", "Customer collections and handover monitoring", "Procurement and payment analysis", "Data visualization", "Analytical reporting"].map((capability) => <li key={capability} className="flex items-start gap-2 text-[11px] font-medium leading-5 text-[#aebfd0]"><span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#2389ee]" />{capability}</li>)}</ul></section>

        <section className="mt-4 rounded-[12px] border border-[#174574] bg-[#061426]/85 p-5 sm:p-6"><SectionLabel>Project Positioning</SectionLabel><div className="mt-5 max-w-3xl space-y-3 text-[13px] leading-7 text-[#a9bdd2]"><p>This project positions the dashboard as an executive business intelligence reporting experience for real estate management.</p><p>It demonstrates how business data from multiple operational areas can be organized into a connected set of management views for exploration, monitoring, and decision support.</p></div></section>

        <section className="mt-4 rounded-[12px] border border-[#174574] bg-gradient-to-r from-[#08214a] to-[#063171] px-5 py-7 text-center shadow-[0_20px_70px_rgba(0,72,170,.18)] sm:px-8"><p className="text-[24px] font-semibold leading-tight text-white sm:text-[30px]">Turning Business Data Into Executive Insight</p><p className="mx-auto mt-3 max-w-2xl text-[14px] leading-6 text-[#a8bed5]">{project.contactCTA.description}</p><div className="mt-5 flex flex-wrap justify-center gap-3"><Link href="/#contact" className="inline-flex items-center gap-2 rounded-md bg-[#0b75f4] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(11,117,244,.28)] transition hover:bg-[#1782f5]">Get in Touch <ArrowRight size={14} /></Link><Link href="/case-studies" className="inline-flex items-center gap-2 rounded-md border border-[#5a91d0] px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-white/10">Explore More Projects <ArrowRight size={14} /></Link></div></section>
      </div>

      {activePage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020812]/95 p-3 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true" aria-label={`${activePage.title} dashboard screenshot`}>
          <button type="button" onClick={() => setActiveDashboard(null)} aria-label="Close image viewer" className="absolute right-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full border border-[#31597e] bg-[#07192b] text-[#c4d6e8] transition hover:border-[#65baff] hover:text-white"><X size={18} /></button>
          <button type="button" onClick={() => setActiveDashboard((active) => active === null ? dashboardPages.length - 1 : (active - 1 + dashboardPages.length) % dashboardPages.length)} aria-label="Previous dashboard screenshot" className="absolute left-3 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#31597e] bg-[#07192b]/90 text-[#75beff] transition hover:border-[#65baff] hover:text-white sm:inline-flex"><ArrowLeft size={18} /></button>
          <figure className="relative flex max-h-full w-full max-w-[1500px] flex-col items-center gap-3">
            <div className="relative h-[min(78vh,850px)] w-full overflow-hidden rounded-xl border border-[#31597e] bg-[#061426] p-2 shadow-[0_30px_100px_rgba(0,50,110,.45)] sm:p-4"><Image src={activePage.image} alt={`${activePage.title} dashboard screenshot`} fill className="object-contain" sizes="100vw" priority /></div>
            <figcaption className="rounded-full border border-[#31597e] bg-[#07192b] px-4 py-2 text-center text-xs text-[#c4d6e8]">{activePage.number} / {String(dashboardPages.length).padStart(2, "0")} · {activePage.title}</figcaption>
          </figure>
          <button type="button" onClick={() => setActiveDashboard((active) => active === null ? 0 : (active + 1) % dashboardPages.length)} aria-label="Next dashboard screenshot" className="absolute right-3 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#31597e] bg-[#07192b]/90 text-[#75beff] transition hover:border-[#65baff] hover:text-white sm:inline-flex"><ArrowRight size={18} /></button>
        </div>
      )}
    </main>
  );
}

 function InsightGroup({ tone, title, metrics, children }: { tone: "blue" | "green" | "yellow" | "purple"; title: string; metrics: [string, string][]; children: ReactNode }) { const tones = { blue: "border-[#53b6ff]/25 bg-[#53b6ff]/[0.06]", green: "border-[#67e8a5]/25 bg-[#67e8a5]/[0.06]", yellow: "border-[#ffd35c]/25 bg-[#ffd35c]/[0.06]", purple: "border-[#d48cff]/25 bg-[#d48cff]/[0.06]" }; return <article className={`rounded-lg border p-4 ${tones[tone]}`}><div className="flex items-center justify-between gap-3"><p className="text-[10px] font-bold uppercase leading-4 tracking-[0.1em] text-white">{title}</p><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-70" /></div><div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">{metrics.map(([label, value]) => <div key={label} className="rounded-md border border-white/10 bg-[#061426]/45 px-3 py-2.5"><p className="text-[9px] font-medium leading-4 text-[#aebfd0]">{label}</p><p className="mt-1 text-[20px] font-semibold leading-none tracking-[-0.03em] text-white">{value}</p></div>)}</div><div className="mt-4 text-[11px] font-medium leading-5 text-[#c2d0de]">{children}</div></article>; }

 function SectionLabel({ children }: { children: ReactNode }) { return <h2 className="text-[15px] font-semibold uppercase tracking-[0.14em] text-[#5cb5ff] sm:text-[16px]">{children}</h2>; }
function Narrative({ icon, title, children }: { icon: ReactNode; title: string; children: string }) { return <article className="border-[#153b60] lg:border-r lg:pr-5 lg:last:border-r-0"><div className="flex items-center gap-2 text-[#5eb9ff]"><span className="rounded-md border border-[#1b5b91] bg-[#0a2440] p-1.5">{icon}</span><h3 className="text-[13px] font-semibold">{title}</h3></div><p className="mt-3 text-[12px] leading-6 text-[#8fa7bf]">{children}</p></article>; }
function ArchitectureCard({ icon, title, items }: { icon: ReactNode; title: string; items: string[] }) { return <div className="min-h-[190px] rounded-lg border border-[#174574] bg-[#071b30] p-5"><div className="flex items-center gap-2 text-[#5bb8ff]"><span>{icon}</span><h3 className="text-[12px] font-semibold">{title}</h3></div><ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">{items.map((item) => <li key={item} className="flex items-start gap-2 text-[11px] leading-5 text-[#8ca4bc]"><span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-[#2389ee]" /><span>{item}</span></li>)}</ul></div>; }
