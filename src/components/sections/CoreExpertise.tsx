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
          description="A blend of analytical thinking, technical expertise, and business understanding to deliver data solutions that drive strategic impact."
          align="center"
          className="mx-auto mb-10 max-w-[720px]"
        />
      </div>

      {/* ========================================= */}
      {/* Expertise Grid */}
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
        {expertise.map((item, index) => {
          const Icon = item.icon;

          return (
            <ExecutiveCard
              key={item.title}
              padding="sm"
              className="
                group
                min-h-[190px]
                rounded-[22px]
                border
                border-[#DCE8F7]
                bg-white
                shadow-[0_10px_30px_rgba(16,42,86,0.04)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#BFD5F5]
                hover:shadow-[0_18px_40px_rgba(16,42,86,0.08)]
              "
            >
              {/* ========================================= */}
              {/* Header */}
              {/* ========================================= */}

              <div className="flex items-start gap-4">
                {/* Number */}

                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#D7E6FF]
                    bg-[#F3F7FF]
                    text-[12px]
                    font-bold
                    tracking-[0.02em]
                    text-[#2563EB]
                    transition-colors
                    duration-300
                    group-hover:border-[#BFD5FF]
                    group-hover:bg-[#EAF2FF]
                  "
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                {/* Icon */}

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#F7FAFF]
                    text-[#2563EB]
                  "
                >
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}

                <h3
                  className="
                    pt-1
                    text-[18px]
                    font-semibold
                    leading-[1.15]
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
                  mt-4
                  h-px
                  w-full
                  bg-gradient-to-r
                  from-[#2563EB]
                  via-[#DCE8F7]
                  to-transparent
                "
              />

              {/* ========================================= */}
              {/* Description */}
              {/* ========================================= */}

              <p
                className="
                  mt-4
                  text-[14px]
                  leading-6
                  text-[#385274]
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
          Turning data into strategic advantage.
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