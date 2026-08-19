import {
  Network,
  Search,
  Target,
  type LucideIcon,
} from "lucide-react";

type Principle = {
  icon: LucideIcon;
  title: string;
  description: string;
  emphasis: string;
};

const principles: Principle[] = [
  {
    icon: Search,
    title: "BUSINESS FIRST",
    description:
      "I begin by understanding the business, its objectives, challenges, and the way departments work together.",
    emphasis: "Understanding comes before reporting.",
  },
  {
    icon: Network,
    title: "SYSTEMS THINKING",
    description:
      "Reports are the result, not the starting point. I build systems first, because consistent reporting starts with consistent operations.",
    emphasis: "Systems before dashboards.",
  },
  {
    icon: Target,
    title: "DECISION FOCUS",
    description:
      "Every KPI should answer a business question. Every report should support a business decision.",
    emphasis: "Data should drive decisions, not just describe them.",
  },
];

function PrincipleCard({
  principle,
}: {
  principle: Principle;
}) {
  const Icon = principle.icon;

  return (
    <article
      className="
        group
        relative
        flex
        min-h-[140px] lg:min-h-[190px]
        flex-1
        gap-3 lg:gap-5
        rounded-[12px]
        border
        border-[#e3ebf7]
        bg-white
        px-4 lg:px-6
        py-3 lg:py-6
        shadow-[0_5px_22px_rgba(15,54,105,0.045)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-[#cdddf3]
        hover:shadow-[0_12px_30px_rgba(15,54,105,0.08)]
      "
    >
      {/* Icon */}
      <div
        className="
          flex h-[48px] w-[48px] lg:h-[54px] lg:w-[54px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#edf5ff]
          ring-1
          ring-[#dceaff]
        "
      >
        <Icon
          className="h-[22px] w-[22px] text-[#075bd8] lg:h-[25px] lg:w-[25px]"
          strokeWidth={1.9}
        />
      </div>

      {/* Content */}
      <div className="min-w-0 pt-0.5">
        <h3
          className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.08em]
            text-[#073d94]
          "
        >
          {principle.title}
        </h3>

        {/* Accent line */}
        <div className="my-2 h-[2px] w-[24px] bg-[#0867e8] lg:my-3" />

        <p
          className="
            text-[11px]
            font-medium
            leading-[1.65]
            text-[#425873]
          "
        >
          {principle.description}
        </p>

        <p
          className="
            mt-2
            text-[11px]
            font-bold
            italic
            leading-[1.5]
            text-[#142b54]
          "
        >
          {principle.emphasis}
        </p>
      </div>
    </article>
  );
}

export default function Principles() {
  return (
    <section
      aria-labelledby="core-principles-title"
      className="
        w-full
        bg-white
        px-4 lg:px-6
        pb-0
        pt-2
        sm:px-8
        lg:px-[48px]
        lg:pb-[48px]
        lg:pt-0
      "
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Section heading */}
        <div className="mb-3 flex items-center justify-center gap-3 lg:mb-5">
          <span
            aria-hidden="true"
            className="h-[2px] w-[20px] bg-[#0867e8]"
          />

          <h2
            id="core-principles-title"
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#075bd8]
            "
          >
            My Core Principles
          </h2>

          <span
            aria-hidden="true"
            className="h-[2px] w-[20px] bg-[#0867e8]"
          />
        </div>

        {/* Cards */}
        <div
          className="
            flex
            flex-col
            gap-4
            lg:flex-row
            lg:gap-3
          "
        >
          {principles.map((principle) => (
            <PrincipleCard
              key={principle.title}
              principle={principle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}










