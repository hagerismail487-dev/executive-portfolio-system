import {
  BarChart3,
  Database,
  Network,
  Target,
  LineChart,
  ShieldCheck,
} from "lucide-react";

import Section from "../ui/Section";

const expertise = [
  {
    icon: BarChart3,
    title: "Executive Reporting Systems",
    description:
      "Design and build executive reporting systems that transform complex business performance into concise, decision-ready insights.",
  },
  {
    icon: Database,
    title: "Business Intelligence",
    description:
      "Transform raw business data into meaningful intelligence through advanced modeling, analytics, and interactive dashboards.",
  },
  {
    icon: Network,
    title: "MIS Strategy & Frameworks",
    description:
      "Develop scalable MIS frameworks and reporting processes that align business operations with strategic objectives.",
  },
  {
    icon: Target,
    title: "KPI & Performance Management",
    description:
      "Build KPI architectures and performance frameworks that improve visibility, accountability, and execution.",
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description:
      "Apply analytical thinking and data exploration techniques to uncover trends, risks, and growth opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "Data Governance",
    description:
      "Ensure data quality, consistency, and governance standards that establish trust across reporting systems.",
  },
];

export default function CoreExpertise() {
  return (
    <Section
      id="expertise"
      className="bg-white py-24"
    >
      {/* Header */}

      <div className="mx-auto mb-16 max-w-3xl text-center">

        <span className="text-[14px] font-semibold uppercase tracking-[0.35em] text-[#2E63D3]">
          Expertise
        </span>

        <h2 className="mt-5 text-[46px] md:text-[54px] font-bold tracking-[-0.04em] text-[#102A56]">
          Core Expertise
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-[20px] leading-9 text-slate-500">
          A blend of analytical thinking, technical expertise,
          and business understanding to deliver data solutions
          that drive strategic impact.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-8 lg:grid-cols-3">

        {expertise.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                rounded-[26px]
                border
                border-[#E8EDF5]
                bg-white
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#D7E3F6]
                hover:shadow-[0_20px_50px_rgba(15,23,42,0.06)]
              "
            >

              <Icon
                size={34}
                strokeWidth={1.8}
                className="text-[#123A67]"
              />

              <h3 className="mt-8 text-[28px] leading-tight font-semibold tracking-[-0.03em] text-[#102A56]">
                {item.title}
              </h3>

              <div className="mt-6 mb-7 h-px w-full bg-[#E8EDF5]" />

              <p className="text-[17px] leading-[1.95] text-slate-600">
                {item.description}
              </p>

            </div>

          );

        })}

      </div>

      {/* Quote */}

      <div className="mt-24 text-center">

        <p className="text-[22px] font-medium tracking-[-0.02em] text-[#102A56]">
          Turning data into strategic advantage.
        </p>

        <div className="mx-auto mt-6 h-[3px] w-20 rounded-full bg-[#2E63D3]" />

      </div>

    </Section>
  );
}