import {
  BarChart3,
  Database,
  LineChart,
  Network,
  ShieldCheck,
  Target,
} from "lucide-react";

import ExecutiveCard from "@/components/design-system/ExecutiveCard";
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
        className="mx-auto mb-6 max-w-[680px]"
      />

      <div className="grid gap-5 lg:grid-cols-3">

        {expertise.map((item, index) => {


          return (

           <ExecutiveCard
  key={item.title}
  padding="sm"
  className="rounded-[22px]"
>
                   {/* ========================================= */}
{/* Header */}
{/* ========================================= */}

<div className="flex items-center gap-4">
<span
  className="
    flex
    h-8
    w-8
    shrink-0
    items-center
    justify-center

    rounded-lg

    border
    border-[#DCEBFF]

    bg-[#EEF5FF]

    text-[13px]
    font-bold

    text-[#2563EB]
  "
>
  {(index + 1).toString().padStart(2, "0")}
</span>
  <h3
    className="
      text-[20px]
      font-semibold
      leading-tight
      tracking-[-0.02em]
      text-[#102A56]
    "
  >
    {item.title}
  </h3>

</div>

              {/* ========================================= */}
              {/* Divider */}
              {/* ========================================= */}

              <div
  className="
    mt-3
    mb-2

    h-px
    w-full

    bg-gradient-to-r
    from-[#2563EB]
    to-transparent
  "
/>

              {/* ========================================= */}
              {/* Description */}
              {/* ========================================= */}

              <p
                className="
                  text-[14px]
                  leading-6
                  text-[#123A63]/35
                "
              >
                {item.description}
              </p>
                          </ExecutiveCard>

          );

        })}

      </div>

      {/* ========================================= */}
      {/* Closing Statement */}
      {/* ========================================= */}

      <div className="mt-12 text-center">

        <p
          className="
            text-[17px]
            font-medium
            tracking-[-0.02em]
            text-[#102A56]
          "
        >
          Turning data into strategic advantage.
        </p>

        <div
          className="
            mx-auto
            mt-3

            h-[3px]
            w-14

            rounded-full

            bg-[#2E63D3]
          "
        />

      </div>

    </Section>
  );
}