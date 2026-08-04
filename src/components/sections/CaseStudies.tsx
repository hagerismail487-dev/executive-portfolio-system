import { ArrowRight, BarChart3 } from "lucide-react";
import Section from "../ui/Section";

const caseStudies = [
  {
    category: "REAL ESTATE",
    title: "Executive Sales Dashboard",
    description:
      "An executive reporting solution designed to monitor sales performance, revenue trends, reservations, and business KPIs across the organization.",
    tags: ["Power BI", "Executive Reporting", "MIS", "KPI"],
  },
  {
    category: "HR",
    title: "HR Analytics Dashboard",
    description:
      "A workforce analytics solution providing executive visibility into hiring, employee performance, turnover, and organizational health.",
    tags: ["HR Analytics", "Power BI", "Dashboard", "Analytics"],
  },
  {
    category: "PROCUREMENT",
    title: "Procurement Dashboard",
    description:
      "A procurement and inventory reporting solution that tracks purchasing performance, suppliers, stock movement, and operational efficiency.",
    tags: ["Procurement", "Inventory", "Power BI", "MIS"],
  },
];

export default function CaseStudies() {
  return (
    <Section
      id="projects"
      className="bg-[#FAFBFD] py-24"
    >
      {/* Header */}

      <div className="mx-auto mb-20 max-w-3xl text-center">

        <span className="text-[14px] font-semibold uppercase tracking-[0.35em] text-[#2E63D3]">
          Case Studies
        </span>

        <h2 className="mt-5 text-[46px] md:text-[54px] font-bold tracking-[-0.04em] text-[#102A56]">
          Featured Projects
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-[20px] leading-9 text-slate-500">
          Selected executive dashboards designed to transform
          business data into measurable business impact and
          strategic decision-making.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-8 lg:grid-cols-3">

        {caseStudies.map((project) => (

          <article
            key={project.title}
            className="
              group
              overflow-hidden
              rounded-[28px]
              border
              border-[#E7EDF5]
              bg-white
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-[#D8E5F7]
              hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)]
            "
          ></article>
                  ))}

      </div>

      {/* Bottom CTA */}

      <div className="mt-24 text-center">

        <p className="text-[22px] font-medium tracking-[-0.02em] text-[#102A56]">
          Every dashboard is designed to support executive decisions,
          not just visualize data.
        </p>

        <div className="mx-auto mt-6 h-[3px] w-20 rounded-full bg-[#2E63D3]" />

      </div>

    </Section>
  );
}