import Link from "next/link";
import Container from "@/components/ui/Container";
import type { HeroSection } from "@/types/service";

interface ServiceHeroProps {
  hero: HeroSection;
}

export default function ServiceHero({
  hero,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#FBFCFE] py-20 lg:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full bg-[#EEF5FF] opacity-60 blur-3xl" />

        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#F4F8FF] opacity-80 blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="flex items-center gap-5">
              <div className="h-px w-16 bg-[#123A63]" />

              <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#123A63]">
                Professional Service
              </span>
            </div>

            <p className="mt-8 text-base font-semibold text-[#2563EB]">
              {hero.title}
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-[-0.04em] text-[#102A56] lg:text-6xl">
              {hero.headline}
            </h1>

            <div className="mt-6 h-1 w-20 rounded-full bg-[#2563EB]" />

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-[#123A63] px-7 py-4 font-semibold text-white transition hover:bg-[#0f3154]"
              >
                Let's Talk
              </Link>

              <Link
                href="/case-studies"
                className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-[#123A63] transition hover:border-[#123A63]"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
              Executive Focus
            </span>

            <h3 className="mt-4 text-3xl font-bold text-[#102A56]">
              Decision Support
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Every dashboard is designed to help leadership monitor
              performance, evaluate KPIs, and make faster business decisions.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Executive KPI Monitoring",
                "Interactive Power BI Dashboards",
                "Business Performance Visibility",
                "Strategic Decision Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#123A63] text-xs font-bold text-white">
                    ✓
                  </div>

                  <span className="text-sm font-medium text-[#102A56]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}