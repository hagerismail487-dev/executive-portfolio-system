import {
  Database,
  Monitor,
  Target,
  TrendingUp,
} from "lucide-react";

import ExecutiveCard from "@/components/ui/ExecutiveCard";
import IconContainer from "@/components/ui/IconContainer";
import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";

const values = [
  {
    icon: Target,
    title: "Strategic Thinking",
    description:
      "Business-first thinking that aligns data, operations, and business goals to support better decision-making.",
  },
  {
    icon: Monitor,
    title: "Executive Reporting",
    description:
      "Designing executive reporting systems that simplify complex business performance into clear, actionable insights.",
  },
  {
    icon: Database,
    title: "Business Intelligence",
    description:
      "Transforming business data into meaningful intelligence that supports sustainable business growth.",
  },
  {
    icon: TrendingUp,
    title: "Performance Intelligence",
    description:
      "Building KPI frameworks and performance reporting that improve visibility and strategic execution.",
  },
];

export default function CreatingBusinessValue() {
  return (
    <Section
      id="business-value"
      className="bg-white"
    >
      <SectionIntro
        eyebrow="Business Value"
        title="Creating Business Value"
        description="Helping organizations transform business data into strategic value through executive reporting, business intelligence, and performance management."
        align="center"
        className="mx-auto mb-20 max-w-3xl"
      />

      <div className="grid gap-8 md:grid-cols-2">

        {values.map((item) => {

          const Icon = item.icon;

          return (

            <ExecutiveCard
              key={item.title}
              className="min-h-[235px]"
            >

              {/* Header */}

              <div className="flex items-center gap-4">

                <IconContainer
                  size="sm"
                  rounded="xl"
                  className="bg-[#F6F9FD] text-[#123A67]"
                >
                  <Icon
                    strokeWidth={2}
                  />
                </IconContainer>

                <h3 className="text-[26px] font-semibold tracking-[-0.025em] leading-none text-[#102A56]">
                  {item.title}
                </h3>

              </div>

              {/* Divider */}

              <div className="my-6 h-px w-full bg-slate-100" />

              {/* Description */}

              <p className="text-[17px] leading-[1.9] text-slate-600">
                {item.description}
              </p>

            </ExecutiveCard>

          );

        })}

      </div>

    </Section>
  );
}