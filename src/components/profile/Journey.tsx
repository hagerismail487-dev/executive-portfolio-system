import {
  BarChart3,
  Database,
  FileText,
  Network,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

type JourneyStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const journeySteps: JourneyStep[] = [
  {
    number: "01",
    title: "Data",
    description: "Working with raw\nbusiness data",
    icon: Database,
  },
  {
    number: "02",
    title: "Reporting",
    description: "Creating structured\nreports & KPIs",
    icon: FileText,
  },
  {
    number: "03",
    title: "Systems",
    description: "Building reporting\nsystems & models",
    icon: Network,
  },
  {
    number: "04",
    title: "Insights",
    description: "Turning data into\nmeaningful insights",
    icon: BarChart3,
  },
  {
    number: "05",
    title: "Decisions",
    description: "Empowering leaders\nto take action",
    icon: UsersRound,
  },
];

function JourneyStep({
  step,
  isLast,
}: {
  step: JourneyStep;
  isLast: boolean;
}) {
  const Icon = step.icon;

  return (
    <div className="relative flex flex-1 flex-col items-center text-center">
      {/* Connector */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="
            absolute
            left-[calc(50%+24px)]
            right-[calc(-50%+24px)]
            top-[24px]
            h-px
            border-t
            border-dashed
            border-[#8bb8f3]
          "
        >
          <span
            className="
              absolute
              left-1/2
              top-1/2
              h-[6px]
              w-[6px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#176ee4]
            "
          />
        </div>
      )}

      {/* Icon circle */}
      <div
        className="
          relative
          z-10
          flex
          h-[48px]
          w-[48px]
          items-center
          justify-center
          rounded-full
          border
          border-[#d9e7f8]
          bg-[#f4f8ff]
          shadow-[0_4px_15px_rgba(18,77,145,0.04)]
        "
      >
        <Icon
          className="h-[21px] w-[21px] text-[#075bd8]"
          strokeWidth={1.9}
        />
      </div>

      {/* Number */}
      <span
        className="
          mt-3
          text-[8px]
          font-bold
          tracking-[0.08em]
          text-[#075bd8]
        "
      >
        {step.number}
      </span>

      {/* Title */}
      <h3
        className="
          mt-1
          text-[10px]
          font-bold
          text-[#0d2d60]
        "
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-1.5
          whitespace-pre-line
          text-[8px]
          font-medium
          leading-[1.45]
          text-[#5a6f89]
        "
      >
        {step.description}
      </p>
    </div>
  );
}

export default function Journey() {
  return (
    <section
      aria-labelledby="professional-journey-title"
      className="
        relative
        w-full
        bg-white
        px-6
        py-10
        sm:px-8
        lg:px-[48px]
        lg:py-[46px]
      "
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Heading */}
        <div className="mb-7 flex items-center justify-center gap-3">
          <span
            aria-hidden="true"
            className="h-[2px] w-[22px] bg-[#0867e8]"
          />

          <h2
            id="professional-journey-title"
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#075bd8]
            "
          >
            Professional Journey
          </h2>

          <span
            aria-hidden="true"
            className="h-[2px] w-[22px] bg-[#0867e8]"
          />
        </div>

        {/* Journey */}
        <div
          className="
            flex
            flex-col
            gap-8
            md:flex-row
            md:gap-0
          "
        >
          {journeySteps.map((step, index) => (
            <JourneyStep
              key={step.number}
              step={step}
              isLast={index === journeySteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}