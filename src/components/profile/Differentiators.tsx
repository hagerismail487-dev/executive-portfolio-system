import {
  BarChart3,
  Puzzle,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";

type Differentiator = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const differentiators: Differentiator[] = [
  {
    icon: Target,
    title: "Business-Oriented Mindset",
    description:
      "I focus on business impact, not just technical output.",
  },
  {
    icon: Puzzle,
    title: "End-to-End Ownership",
    description:
      "From understanding the business to delivering executive insights.",
  },
  {
    icon: ShieldCheck,
    title: "Accuracy & Reliability",
    description:
      "I ensure data accuracy, consistency, and trust.",
  },
  {
    icon: BarChart3,
    title: "Continuous Improvement",
    description:
      "I build scalable systems that grow with your business.",
  },
];

function DifferentiatorCard({
  item,
}: {
  item: Differentiator;
}) {
  const Icon = item.icon;

  return (
    <article
      className="
        flex
        min-h-[90px] lg:min-h-[110px]
        flex-1
        items-start
        gap-4
        rounded-[10px]
        border
        border-[#e3ebf7]
        bg-white
        px-5 py-3
        shadow-[0_4px_18px_rgba(15,54,105,0.035)]
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-[48px]
          w-[48px]
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
          className="h-[23px] w-[23px] text-[#075bd8]"
          strokeWidth={1.9}
        />
      </div>

      {/* Content */}
      <div className="pt-0.5">
        <h3
          className="
            max-w-[150px]
            text-[11px]
            font-bold
            leading-[1.25]
            text-[#0d2d60]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-2.5
            max-w-[175px]
            text-[9px]
            font-medium
            leading-[1.55]
            text-[#586d87]
          "
        >
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function Differentiators() {
  return (
    <section
      aria-labelledby="differentiators-title"
      className="
        w-full
        bg-white
        px-6
        pb-4 pt-2
        sm:px-8
        lg:px-[48px]
        lg:pb-[46px]
        lg:pt-0
      "
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Heading */}
        <div className="mb-5 flex items-center justify-center gap-3">
          <span
            aria-hidden="true"
            className="h-[2px] w-[22px] bg-[#0867e8]"
          />

          <h2
            id="differentiators-title"
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#075bd8]
            "
          >
            What Makes Me Different
          </h2>

          <span
            aria-hidden="true"
            className="h-[2px] w-[22px] bg-[#0867e8]"
          />
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4
          "
        >
          {differentiators.map((item) => (
            <DifferentiatorCard
              key={item.title}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



