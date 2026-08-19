import {
  BarChart3,
  Database,
  LayoutDashboard,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

type FocusArea = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const focusAreas: FocusArea[] = [
  {
    icon: LayoutDashboard,
    title: "Executive Dashboards",
    description:
      "Creating clear executive views that turn complex business data into actionable performance insight.",
  },
  {
    icon: Database,
    title: "MIS Reporting Systems",
    description:
      "Building structured reporting environments that improve consistency, visibility, and management communication.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Connecting business objectives, KPIs, data, and reporting into a structured intelligence environment.",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description:
      "Measuring business performance through meaningful KPIs, trends, and performance-focused reporting.",
  },
];

function FocusCard({
  area,
  index,
}: {
  area: FocusArea;
  index: number;
}) {
  const Icon = area.icon;

  return (
    <article
      className="
        relative
        flex
        min-h-[105px]
        flex-row
        items-start
        gap-3
        rounded-[10px]
        border
        border-[#dfe8f3]
        bg-white
        px-4
        py-3
        shadow-[0_5px_20px_rgba(15,54,105,0.04)]
        lg:min-h-[0px]
        lg:flex-col
        lg:gap-0
        lg:px-5
        lg:py-4
      "
    >
      {/* Number */}
      <span
        className="
          absolute
          right-4
          top-4
          text-[9px]
          font-bold
          tracking-[0.08em]
          text-[#b7cbe5]
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div
        className="
          flex
          h-[38px]
          w-[38px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#edf5ff]
          ring-1
          ring-[#dceaff]
          lg:h-[42px]
          lg:w-[42px]
        "
      >
        <Icon
          className="h-[18px] w-[18px] text-[#075bd8] lg:h-[20px] lg:w-[20px]"
          strokeWidth={1.9}
        />
      </div>

      {/* Content */}
      <div className="min-w-0 lg:w-full">
        {/* Title */}
        <h3
          className="
            mt-0.5
            text-[11px]
            font-bold
            leading-[1.3]
            text-[#102653]
            lg:mt-3.5
          "
        >
          {area.title}
        </h3>

        {/* Accent */}
        <div className="mt-2 h-[2px] w-[22px] bg-[#0867e8]" />

        {/* Description */}
        <p
          className="
            mt-2
            text-[9px]
            font-medium
            leading-[1.55]
            text-[#586d87]
          "
        >
          {area.description}
        </p>
      </div>
    </article>
  );
}
export default function CurrentFocus() {
  return (
    <section
      aria-labelledby="current-focus-title"
      className="
        relative
        mt-3 w-full
        overflow-hidden
        rounded-[6px]
        bg-[#f7f9fc]
        px-5
        py-7
        sm:px-7
        lg:mt-8
        lg:px-[40px]
        lg:py-[30px]
      "
    >
      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-20
          [background-image:linear-gradient(rgba(25,93,170,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(25,93,170,0.05)_1px,transparent_1px)]
          [background-size:38px_38px]
        "
      />

      {/* Soft glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[-100px]
          h-[280px]
          w-[280px]
          rounded-full
          bg-[#2d83e8]/[0.04]
          blur-[80px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        {/* Centered section label */}
        <div
          className="
            mb-4
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span
            aria-hidden="true"
            className="
              h-[2px]
              w-[24px]
              bg-[#0867e8]
            "
          />

          <h2
            id="current-focus-title"
            className="
              whitespace-nowrap
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#075bd8]
            "
          >
            Current Focus
          </h2>

          <span
            aria-hidden="true"
            className="
              h-[2px]
              w-[24px]
              bg-[#0867e8]
            "
          />
        </div>

        {/* Strong positioning statement */}
        <p
          className="
            mx-auto
            mb-5
            w-full
            max-w-[900px]
            text-center
            text-[10px]
            font-medium
            leading-[1.55]
            text-[#536a86]
          "
        >
          Building structured business systems that turn data into
          clarity, performance insight, and confident executive decisions.
        </p>

        {/* Focus cards */}
        <div
          className="
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {focusAreas.map((area, index) => (
            <FocusCard
              key={area.title}
              area={area}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}







