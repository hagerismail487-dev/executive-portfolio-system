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

const capabilityGroups = [
  {
    number: "01",
    icon: BarChart3,
    title: "Reporting & Intelligence",
    description:
      "Turning complex business data into clear, decision-ready information.",
    capabilities: [
      {
        icon: BarChart3,
        title: "Executive Reporting Systems",
        description:
          "Design and build reporting systems that turn complex business performance into concise, decision-ready insights.",
      },
      {
        icon: Database,
        title: "Business Intelligence",
        description:
          "Transform raw business data into meaningful intelligence through structured modeling, analytics, and interactive dashboards.",
      },
    ],
  },
  {
    number: "02",
    icon: Target,
    title: "Performance & Analytics",
    description:
      "Making performance visible, measurable, and actionable.",
    capabilities: [
      {
        icon: Target,
        title: "KPI & Performance Management",
        description:
          "Build KPI frameworks that improve performance visibility, accountability, and alignment with business objectives.",
      },
      {
        icon: LineChart,
        title: "Data Analytics",
        description:
          "Analyze business data to uncover trends, performance gaps, risks, and opportunities that support better decisions.",
      },
    ],
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Data Trust",
    description:
      "Building the structure and governance behind reliable management information.",
    capabilities: [
      {
        icon: Network,
        title: "MIS Strategy & Frameworks",
        description:
          "Develop structured MIS frameworks and reporting processes that create consistency, clarity, and reliable management information.",
      },
      {
        icon: ShieldCheck,
        title: "Data Governance",
        description:
          "Establish data quality, consistency, and governance standards that strengthen trust in reporting and decision-making.",
      },
    ],
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
      {/* Capability Groups */}
      {/* ========================================= */}

      <div className="relative z-10 grid gap-6 lg:grid-cols-3">
        {capabilityGroups.map((group) => {
          const GroupIcon = group.icon;

          return (
            <ExecutiveCard
              key={group.title}
              padding="sm"
              className="
                group
                relative
                overflow-hidden
                rounded-[24px]
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

              {/* Group Header */}

              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <span
                    className="
                      shrink-0
                      text-[40px]
                      font-semibold
                      leading-none
                      tracking-[-0.05em]
                      text-[#2563EB]
                    "
                  >
                    {group.number}
                  </span>

                  <h3
                    className="
                      max-w-[210px]
                      text-[22px]
                      font-semibold
                      leading-[1.05]
                      tracking-[-0.025em]
                      text-[#102A56]
                    "
                  >
                    {group.title}
                  </h3>
                </div>

                <div
                  className="
                    mt-5
                    h-[2px]
                    w-16
                    bg-[#2563EB]
                  "
                />

                <p
                  className="
                    mt-4
                    text-[14px]
                    leading-6
                    text-[#385274]
                  "
                >
                  {group.description}
                </p>
              </div>

              {/* Capabilities */}

              <div className="relative z-10 mt-7 space-y-5">
                {group.capabilities.map((capability, index) => {
                  const CapabilityIcon = capability.icon;

                  return (
                    <div
                      key={capability.title}
                      className="
                        rounded-[18px]
                        border
                        border-[#DCE8F7]
                        bg-[#F8FBFF]
                        p-4 sm:p-5 lg:p-6
                        shadow-[0_12px_28px_rgba(16,42,86,0.07)]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-[#C8DCF5]
                        hover:bg-[#F4F8FF]
                        hover:shadow-[0_16px_32px_rgba(16,42,86,0.09)]
                      "
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-white
                            text-[#2563EB]
                            shadow-[0_4px_12px_rgba(16,42,86,0.05)]
                          "
                        >
                          <CapabilityIcon size={18} strokeWidth={1.8} />
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h4
                              className="
                                text-[14px]
                                font-semibold
                                leading-5
                                tracking-[-0.01em]
                                text-[#102A56]
                              "
                            >
                              {capability.title}
                            </h4>
                          </div>

                          <p
                            className="
                              mt-2
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
                            ml-auto
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
                          ›
                        </span>
                      </div>
                    </div>
                  );
                })}
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