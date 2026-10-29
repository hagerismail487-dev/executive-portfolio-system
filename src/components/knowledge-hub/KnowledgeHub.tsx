import Container from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

const series = [
  "Series 1 - Executive MIS",
  "Series 2 - Executive Lens",
  "Series 3 - The Decision Room",
  "Series 4 - Business Thinking",
  "Series 5 - Behind the Dashboard",
  "Series 6 - Dashboard Design",
  "Series 7 - The Analyst's Mind",
  "Series 8 - Career Beyond Dashboards",
];

export default function KnowledgeHub() {
  return (
    <div className="min-h-screen bg-[#FAFBFD] pt-16">
      <section className="overflow-hidden rounded-t-[28px] bg-[#102A56] text-white sm:rounded-t-[40px]">
        <Container className="relative py-28 sm:py-36 lg:py-44">
          <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#D6A84F]/10 blur-3xl" />
          <div className="relative ml-auto max-w-3xl text-right">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#D6A84F]">
              THE INSIGHT GIRL
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Knowledge Hub
            </h1>
            <p className="mt-6 ml-auto max-w-2xl text-base leading-8 text-blue-100/75 sm:text-lg">
              Ideas, insights, and practical thinking at the intersection of business and intelligence.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24 lg:py-28">
        <Container>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B18A3A]">
            EXPLORE BY SERIES
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-7 lg:gap-8">
            {series.map((title, index) => (
              <article
                key={title}
                tabIndex={0}
                className="group flex min-h-[220px] cursor-pointer flex-col justify-between rounded-2xl border border-[#DCE2EA] bg-white p-8 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A25A] hover:shadow-[0_18px_40px_rgba(16,42,86,0.08)] focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4 sm:min-h-[240px] sm:p-10"
                aria-label={title}
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-3xl font-semibold tracking-[-0.05em] text-[#C6A25A]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-[#B8C1CE] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#102A56]"
                  />
                </div>
                <h2 className="mt-8 text-lg font-semibold tracking-[-0.025em] text-[#102A56] sm:text-xl">
                  {title}
                </h2>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
