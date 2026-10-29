import Container from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

const series = [
  { number: "01", title: "Executive MIS" },
  { number: "02", title: "Executive Lens" },
  { number: "03", title: "The Decision Room" },
  { number: "04", title: "Business Thinking" },
  { number: "05", title: "Behind the Dashboard" },
  { number: "06", title: "Dashboard Design" },
  { number: "07", title: "The Analyst's Mind" },
  { number: "08", title: "Career Beyond Dashboards" },
];

export default function KnowledgeHub() {
  return (
    <div className="min-h-screen bg-[#FAFBFD] pt-16">
      <section className="overflow-hidden rounded-t-[28px] bg-[#102A56] text-white sm:rounded-t-[40px]">
        <Container className="relative pt-16 pb-[13px] sm:pt-20 lg:pt-24">
          <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#D6A84F]/10 blur-3xl" />
          <div className="relative mr-auto max-w-3xl text-left">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C9A56A]"
              style={{ color: "#C9A56A" }}
            >
              THE INSIGHT GIRL
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Knowledge Hub
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/75 sm:text-lg">
              Ideas, insights, and practical thinking at the intersection of business and intelligence.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <Container>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B18A3A]">
            EXPLORE BY SERIES
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7">
            {series.map(({ number, title }) => (
              <article
                key={number}
                tabIndex={0}
                className="group flex min-h-[184px] cursor-pointer flex-col justify-between rounded-2xl border border-[#DCE2EA] bg-white p-6 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A25A] hover:shadow-[0_18px_40px_rgba(16,42,86,0.08)] focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4 sm:min-h-[220px] sm:p-8"
                aria-label={`Series ${number} - ${title}`}
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-[20px] font-semibold tracking-[-0.05em] text-[#C6A25A]">
                    {`Series  ${number}`}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-[#B8C1CE] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#102A56]"
                  />
                </div>
                <h2 className="mt-8 text-[24px] font-semibold tracking-[-0.025em] text-[#102A56]">
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
