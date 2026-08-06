import {
  BarChart3,
  Database,
  LineChart,
  Network,
  ShieldCheck,
  Target,
} from "lucide-react";

import ExecutiveCard from "@/components/ui/ExecutiveCard";
import IconContainer from "@/components/ui/IconContainer";
import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";

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
      className="bg-white"
    >
      <SectionIntro
        eyebrow="Expertise"
        title="Core Expertise"
        description="A blend of analytical thinking, technical expertise, and business understanding to deliver data solutions that drive strategic impact."
        align="center"
        className="mx-auto mb-16 max-w-3xl"
      />

      {/* ========================================= */}
      {/* Expertise Cards */}
      {/* ========================================= */}

      <div className="grid gap-8 lg:grid-cols-3">
                {expertise.map((item) => {

          const Icon = item.icon;

          return (

            <ExecutiveCard
              key={item.title}
              className="rounded-[26px]"
            >

              {/* Icon */}

              <IconContainer
                size="md"
                rounded="xl"
                className="bg-[#F6F9FD] text-[#123A67]"
              >
                <Icon
                  size={34}
                  strokeWidth={1.8}
                />
              </IconContainer>

              {/* Title */}

              <h3
                className="
                  mt-8
                  text-[28px]
                  font-semibold
                  leading-tight
                  tracking-[-0.03em]
                  text-[#102A56]
                "
              >
                {item.title}
              </h3>

              {/* Divider */}

              <div className="my-7 h-px w-full bg-[#E8EDF5]" />

              {/* Description */}

              <p
                className="
                  text-[17px]
                  leading-[1.95]
                  text-slate-600
                "
              >
                {item.description}
              </p>

            </ExecutiveCard>

          );

        })}

      </div>

      {/* ========================================= */}
      {/* Quote */}
      {/* ========================================= */}
            {/* ========================================= */}
      {/* Quote */}
      {/* ========================================= */}

      <div className="mt-24 text-center">

        <p
          className="
            text-[22px]
            font-medium
            tracking-[-0.02em]
            text-[#102A56]
          "
        >
          Turning data into strategic advantage.
        </p>

        <div className="mx-auto mt-6 h-[3px] w-20 rounded-full bg-[#2E63D3]" />

      </div>

    </Section>
  );
}
