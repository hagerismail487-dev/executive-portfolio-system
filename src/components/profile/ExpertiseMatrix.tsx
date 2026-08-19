import {
  BarChart3,
  FileBarChart,
  LayoutDashboard,
  Network,
  type LucideIcon,
} from "lucide-react";

type Expertise = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
};

const expertise: Expertise[] = [
  {
    number: "01",
    title: "Executive Dashboards",
    description:
      "Transforming complex business data into clear executive views that support faster and more confident decisions.",
    icon: LayoutDashboard,
    capabilities: [
      "Executive KPI Views",
      "Performance Monitoring",
      "Interactive Reporting",
    ],
  },
  {
    number: "02",
    title: "MIS Reporting Systems",
    description:
      "Creating structured reporting environments that improve consistency, visibility, and management communication.",
    icon: FileBarChart,
    capabilities: [
      "Reporting Frameworks",
      "Standardized Reports",
      "Management Reporting",
    ],
  },
  {
    number: "03",
    title: "Business Intelligence",
    description:
      "Connecting business objectives, data, KPIs, and analytical reporting into a structured intelligence environment.",
    icon: Network,
    capabilities: [
      "KPI Frameworks",
      "Business Analysis",
      "Data Modeling",
    ],
  },
  {
    number: "04",
    title: "Performance Analytics",
    description:
      "Measuring what matters through meaningful KPIs, trend analysis, and performance-focused reporting.",
    icon: BarChart3,
    capabilities: [
      "KPI Tracking",
      "Trend & Variance Analysis",
      "Performance Insights",
    ],
  },
];

function ExpertiseRow({
  item,
}: {
  item: Expertise;
}) {
  const Icon = item.icon;

  return (
    <article
      className="
        grid
        min-h-[78px]
        grid-cols-[36px_minmax(0,1fr)]
        items-center
        gap-3
        border-b
        border-[#e4ebf4] py-2
        last:border-b-0
        lg:grid-cols-[40px_minmax(0,1fr)_320px]
        lg:gap-4
      "
    >
      {/* Number */}
      <div
        className="
          flex
          h-[32px]
          w-[32px]
          items-center
          justify-center
          rounded-full
          border
          border-[#dce8f7]
          bg-[#f5f9ff]
        "
      >
        <span
          className="
            text-[8px]
            font-bold
            tracking-[0.08em]
            text-[#075bd8]
          "
        >
          {item.number}
        </span>
      </div>

      {/* Main content */}
      <div className="min-w-0">
        <div className="flex items-center gap-2.5">
          <div
            className="
              flex
              h-[27px]
              w-[27px]
              shrink-0
              items-center
              justify-center
              rounded-[6px]
              bg-[#edf5ff]
            "
          >
            <Icon
              className="h-[14px] w-[14px] text-[#075bd8]"
              strokeWidth={1.9}
            />
          </div>

          <h3
            className="
              whitespace-nowrap
              text-[11px]
              font-bold
              leading-[1.2]
              tracking-[-0.01em]
              text-[#102653]
            "
          >
            {item.title}
          </h3>
        </div>

        <p
          className="
            mt-1.5
            max-w-[680px]
            text-[9px]
            font-medium
            leading-[1.4]
            text-[#566b85]
            sm:text-[10px]
          "
        >
          {item.description}
        </p>
      </div>

      {/* Capabilities */}
      <div
        className="
          col-start-2 flex flex-wrap
          items-center
          justify-start
          gap-1.5
          lg:col-start-auto
          lg:justify-end
        "
      >
        {item.capabilities.map((capability) => (
          <span
            key={capability}
            className="
              inline-flex
              shrink-0
              whitespace-nowrap
              items-center
              justify-center
              rounded-full
              border
              border-[#dce7f5] bg-[#f8fbff] px-2.5 py-1
              text-[9px]
              font-semibold
              leading-none
              text-[#49627f]
            "
          >
            {capability}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function ExpertiseMatrix() {
  return (
    <section
      aria-labelledby="expertise-matrix-title"
      className="
        relative
        mt-6
        w-full
        overflow-hidden
        rounded-[6px]
        bg-[#f8fafc]
        px-5
        py-5
        sm:px-6
        lg:mt-7
        lg:px-[36px]
        lg:py-[22px]
      "
    >
      {/* Subtle blueprint grid */}
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

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1180px]
        "
      >
        {/* Centered heading */}
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
            id="expertise-matrix-title"
            className="
              whitespace-nowrap
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#075bd8]
            "
          >
            Expertise Matrix
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

        {/* Matrix */}
        <div
          className="
            overflow-hidden
            rounded-[10px]
            border
            border-[#e1e9f3]
            bg-white
            px-4
            shadow-[0_4px_18px_rgba(15,54,105,0.035)]
            sm:px-5
          "
        >
          {expertise.map((item) => (
            <ExpertiseRow
              key={item.number}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

