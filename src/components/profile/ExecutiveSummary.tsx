import {
  BarChart3,
  Building2,
  Database,
  Settings2,
  UsersRound,
} from "lucide-react";

type SummaryStep = {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  featured?: boolean;
};

const summarySteps: SummaryStep[] = [
  {
    number: "01",
    title: "BUSINESS\nUNDERSTANDING",
    description: "Understand how the\nbusiness operates",
    icon: UsersRound,
  },
  {
    number: "02",
    title: "PROCESSES &\nSTRUCTURE",
    description: "Design and standardize\noperational processes",
    icon: Settings2,
  },
  {
    number: "03",
    title: "BUSINESS\nSYSTEMS",
    description: "Build reporting\nsystems & models",
    icon: Building2,
    featured: true,
  },
  {
    number: "04",
    title: "DATA &\nREPORTING",
    description: "Build consistent data\nand reporting environments",
    icon: Database,
  },
  {
    number: "05",
    title: "EXECUTIVE\nDECISIONS",
    description: "Enable confident,\nimpactful decisions",
    icon: BarChart3,
  },
];

function SummaryStepItem({
  step,
  isLast,
}: {
  step: SummaryStep;
  isLast: boolean;
}) {
  return (
    <div className="relative flex flex-1 items-start">
      <div className="flex w-full flex-col items-center text-center">
        {/* Icon */}
        <div
          className={`
            relative
            z-10
            flex
            items-center
            justify-center
            rounded-full
            transition-all
            duration-300
            ${
              step.featured
                ? `
                  h-[84px]
                  w-[84px]
                  border
                  border-[#c8d9f4]
                  bg-[#f7faff]
                  shadow-[0_12px_35px_rgba(20,74,145,0.12)]
                `
                : `
                  h-[48px]
                  w-[48px]
                  border
                  border-[#dbe7f7]
                  bg-[#f8fbff]
                `
            }
          `}
        >
          {step.featured ? (
            <div
              className="
                flex
                h-[64px]
                w-[64px]
                items-center
                justify-center
                rounded-full
                bg-[radial-gradient(circle_at_35%_30%,#ffffff_0%,#edf4ff_100%)]
                shadow-[inset_0_0_0_1px_rgba(45,105,190,0.08)]
              "
            >
              <Building2
                className="h-[25px] w-[25px] text-[#083f96]"
                strokeWidth={1.8}
              />
            </div>
          ) : (
            <step.icon
              className="h-[21px] w-[21px] text-[#075bd8]"
              strokeWidth={2}
            />
          )}
        </div>

        {/* Number */}
        <span
          className={`
            mt-3
            text-[8px]
            font-bold
            tracking-[0.08em]
            ${
              step.featured
                ? "text-[#075bd8]"
                : "text-[#075bd8]"
            }
          `}
        >
          {step.number}
        </span>

        {/* Title */}
        <span
          className="
            mt-1.5
            whitespace-pre-line
            text-center
            text-[8px]
            font-bold
            leading-[1.2]
            tracking-[-0.01em]
            text-[#0b2553]
          "
        >
          {step.title}
        </span>

        {/* Description */}
        <p
          className="
            mt-2
            whitespace-pre-line
            text-center
            text-[8px]
            font-medium
            leading-[1.45]
            text-[#526783]
          "
        >
          {step.description}
        </p>
      </div>

      {/* Connector */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="
            absolute
            left-[calc(50%+28px)]
            right-[calc(-50%+28px)]
            top-[24px]
            h-px
            border-t
            border-dashed
            border-[#8bb7f4]
          "
        >
          <span
            className="
              absolute
              left-1/2
              top-1/2
              h-[5px]
              w-[5px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#176ee4]
            "
          />
        </div>
      )}
    </div>
  );
}

function BusinessSystemsFlow() {
  return (
    <div
      className="
        relative
        w-full
        rounded-[18px]
        bg-white
        px-4
        py-5
      "
    >
      <div className="flex items-start">
        {summarySteps.map((step, index) => (
          <SummaryStepItem
            key={step.number}
            step={step}
            isLast={index === summarySteps.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default function ExecutiveSummary() {
  return (
    <section
      aria-labelledby="executive-summary-title"
      className="
        relative
        mt-8
        w-full
        overflow-hidden
        rounded-[6px]
        bg-white
        px-6
        py-10
        shadow-[0_4px_25px_rgba(12,45,90,0.035)]
        sm:px-8
        lg:mt-10
        lg:px-[48px]
        lg:py-[46px]
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1180px]
        "
      >
        {/* Main content */}
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-8
            lg:grid-cols-[0.88fr_1.45fr]
            lg:gap-10
          "
        >
          {/* Left */}
          <div className="relative z-10 pl-5 sm:pl-8 lg:pl-[66px]">
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-[20px] bg-[#0867e8]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#075bd8]
                "
              >
                Executive Summary
              </span>
            </div>

            {/* Headline */}
            <h2
              id="executive-summary-title"
              className="
                max-w-[470px]
                text-[25px]
                font-bold
                leading-[1.18]
                tracking-[-0.025em]
                text-[#102653]
                sm:text-[28px]
                lg:text-[29px]
              "
            >
              Most professionals use reporting
              <br />
              to explain what happened.
              <br />

              <span className="text-[#075bd8]">
                I use business systems to improve
                what happens next.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[430px]
                text-[11px]
                font-medium
                leading-[1.7]
                text-[#536782]
                sm:text-[12px]
              "
            >
              I design structured business systems that
              connect operations, standardize reporting,
              and support confident executive decisions.
            </p>
          </div>

          {/* Right flow */}
          <div className="relative">
            <BusinessSystemsFlow />
          </div>
        </div>
      </div>
    </section>
  );
}