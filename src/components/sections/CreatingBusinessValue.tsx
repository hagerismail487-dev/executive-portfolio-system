import {
  Target,
  Monitor,
  Database,
  TrendingUp,
} from "lucide-react";

import Section from "../ui/Section";

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
      className="bg-white py-28"
    >
      {/* Header */}

      <div className="mx-auto mb-20 max-w-3xl text-center">

        <h2 className="text-[42px] md:text-[48px] font-bold tracking-[-0.03em] text-[#102A56]">
          Creating Business Value
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-[19px] leading-9 text-slate-500">
          Helping organizations transform business data into
          strategic value through executive reporting,
          business intelligence, and performance management.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2">

        {values.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                rounded-[22px]
                border
                border-slate-200
                bg-white
                p-8
                min-h-[235px]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#D8E4F5]
                hover:shadow-[0_15px_40px_rgba(15,23,42,0.05)]
              "
            >

              {/* Title */}

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F6F9FD]">

                  <Icon
                    size={22}
                    strokeWidth={2}
                    className="text-[#123A67]"
                  />

                </div>

                <h3 className="text-[26px] font-semibold tracking-[-0.025em] leading-none text-[#102A56]">
                  {item.title}
                </h3>

              </div>

              {/* Divider */}

              <div className="mt-6 mb-6 h-px w-full bg-slate-100" />

              {/* Description */}

              <p className="text-[17px] leading-[1.9] text-slate-600">
                {item.description}
              </p>

            </div>

          );

        })}

      </div>

    </Section>
  );
}
