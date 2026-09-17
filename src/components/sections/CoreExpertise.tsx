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

const capabilities = [
  {
    category: "Reporting & Intelligence",
    icon: BarChart3,
    title: "Executive Reporting Systems",
    description:
      "Design and build reporting systems that turn complex business performance into concise, decision-ready insights.",
  },
  {
    category: "Reporting & Intelligence",
    icon: Database,
    title: "Business Intelligence",
    description:
      "Transform raw business data into meaningful intelligence through structured modeling, analytics, and interactive dashboards.",
  },
  {
    category: "Reporting & Intelligence",
    icon: Network,
    title: "MIS Strategy & Frameworks",
    description:
      "Develop structured MIS frameworks and reporting processes that create consistency, clarity, and reliable management information.",
  },
  {
    category: "Performance & Analytics",
    icon: Target,
    title: "KPI & Performance Management",
    description:
      "Build KPI frameworks that improve performance visibility, accountability, and alignment with business objectives.",
  },
  {
    category: "Performance & Analytics",
    icon: LineChart,
    title: "Data Analytics",
    description:
      "Analyze business data to uncover trends, performance gaps, risks, and opportunities that support better decisions.",
  },
  {
    category: "Data Trust",
    icon: ShieldCheck,
    title: "Data Governance",
    description:
      "Establish data quality, consistency, and governance standards that strengthen trust in reporting and decision-making.",
  },
];

export default function CoreExpertise() {
  return (
    <Section
      id="expertise"
      background="white"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        lg:py-20
      "
    >
      {/* ========================================= */}
      {/* Subtle Background */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[120px]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#EEF5FF]
          opacity-50
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-160px]
          bottom-[-120px]
          h-[340px]
          w-[340px]
          rounded-full
          bg-[#F4F8FF]
          opacity-70
          blur-[120px]
        "
      />

      {/* ========================================= */}
      {/* Section Header */}
      {/* ========================================= */}

      <div className="relative z-10">
        <SectionIntro
          eyebrow="Expertise"
          title="Core Expertise"
          description="Structured expertise across reporting, intelligence, performance, and data governance—designed to turn business information into reliable management insight."
          align="center"
          className="mx-auto mb-10 max-w-[720px]"
        />
      </div>

      {/* ========================================= */}
      {/* Capability Grid */}
      {/* ========================================= */}

      <div
        className="
          relative
          z-10
          grid
          gap-5
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {capabilities.map((capability) => {
          const CapabilityIcon = capability.icon;

          return (
            <ExecutiveCard
              key={capability.title}
              padding="sm"
              className="
                group
                relative
                flex
                min-h-[250px]
                flex-col
                overflow-hidden
                rounded-[22px]
                border
                border-[#DCE8F7]
                bg-white
                p-6
                shadow-[0_10px_30px_rgba(16,42,86,0.04)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#BFD5F5]
                hover:shadow-[0_18px_40px_rgba(16,42,86,0.08)]
              "
            >
              {/* Category */}

              <div className="relative z-10">
                <span
                  className="
                    text-[11px]
                    font-bold
                    tracking-[0.06em]
                    text-[#2563EB]
                  "
                >
                  {capability.category}
                </span>

                <div
                  className="
                    mt-3
                    h-[2px]
                    w-10
                    bg-[#2563EB]
                  "
                />
              </div>

              {/* Capability */}

              <div
                className="
                  relative
                  z-10
                  mt-6
                  flex
                  items-start
                  gap-4
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#F8FBFF]
                    text-[#2563EB]
                    shadow-[0_4px_12px_rgba(16,42,86,0.05)]
                  "
                >
                  <CapabilityIcon size={19} strokeWidth={1.8} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      text-[16px]
                      font-semibold
                      leading-5
                      tracking-[-0.015em]
                      text-[#102A56]
                    "
                  >
                    {capability.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[13px]
                      leading-5
                      text-[#526985]
                    "
                  >
                    {capability.description}
                  </p>
                </div>

                <span
                  className="
                    shrink-0
                    pt-1
                    text-[22px]
                    leading-none
                    text-[#123A63]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </div>
            </ExecutiveCard>
          );
        })}
      </div>

      {/* ========================================= */}
      {/* Closing Statement */}
      {/* ========================================= */}

      <div
        className="
          relative
          z-10
          mt-12
          text-center
        "
      >
        <p
          className="
            text-[17px]
            font-medium
            tracking-[-0.02em]
            text-[#102A56]
          "
        >
          Turning analytical capability into business confidence.
        </p>

        <div
          className="
            mx-auto
            mt-3
            h-[3px]
            w-14
            rounded-full
            bg-[#2563EB]
          "
        />
      </div>
    </Section>
  );
}
