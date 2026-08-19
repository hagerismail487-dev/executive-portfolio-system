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

function JourneyStep({ step, isLast, index }: { step: JourneyStep; isLast: boolean; index: number }) {
  const Icon = step.icon;

  return (
    <div className={`relative flex flex-col items-center text-center md:flex-1 ${step.number === "03" ? "col-span-2" : ""}`}>
      {/* Connector */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-1/2 top-full
            h-8
            w-px
            -translate-x-1/2
            border-l
            border-dashed
            border-[#8bb8f3]

            md:left-[calc(50%+24px)]
            md:right-[calc(-50%+24px)]
            md:top-[24px]
            md:h-px
            md:w-auto
            md:translate-x-0
            md:border-l-0
            md:border-t"
        >
          <span
            className="
              absolute
              left-1/2 bottom-0 h-[6px] w-[6px] -translate-x-1/2 translate-y-1/2 md:top-1/2 md:bottom-auto md:-translate-y-1/2
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
        py-4
        sm:px-8
        lg:px-[48px]
        lg:py-[46px]
      "
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Heading */}
        <div className="mb-4 flex items-center justify-center gap-3 lg:mb-7">
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
          className="grid grid-cols-2 gap-x-4 gap-y-3 md:flex md:flex-row md:gap-0"
        >
          {journeySteps.map((step, index) => (
            <JourneyStep key={step.number} step={step} index={index} isLast={index === journeySteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}






