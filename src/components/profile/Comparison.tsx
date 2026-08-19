import {
  BarChart3,
  CheckCircle2,
  CircleDot,
  Database,
  Gauge,
  Target,
  Workflow,
} from "lucide-react";

type ComparisonStep = {
  number: string;
  title: string;
  icon: React.ElementType;
};

const typicalApproach: ComparisonStep[] = [
  {
    number: "01",
    title: "Collect Data",
    icon: Database,
  },
  {
    number: "02",
    title: "Build Reports",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Create KPIs",
    icon: Gauge,
  },
  {
    number: "04",
    title: "Publish Dashboard",
    icon: Workflow,
  },
];

const businessSystemsApproach: ComparisonStep[] = [
  {
    number: "01",
    title: "Understand Business",
    icon: Target,
  },
  {
    number: "02",
    title: "Standardize Processes",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Build Systems & Data Model",
    icon: Database,
  },
  {
    number: "04",
    title: "Enable Executive Decisions",
    icon: Target,
  },
];

function ComparisonSteps({
  steps,
  variant,
}: {
  steps: ComparisonStep[];
  variant: "typical" | "systems";
}) {
  const isSystems = variant === "systems";

  return (
    <div className="relative flex items-start">
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div
            key={step.number}
            className="relative flex flex-1 flex-col items-center text-center"
          >
            {/* Connector */}
            {index < steps.length - 1 && (
              <div
                aria-hidden="true"
                className={`
                  absolute
                  left-[calc(50%+17px)]
                  right-[calc(-50%+17px)]
                  top-[17px]
                  h-px
                  border-t
                  border-dashed
                  ${
                    isSystems
                      ? "border-[#72c79b]"
                      : "border-[#9bbef0]"
                  }
                `}
              >
                <span
                  className={`
                    absolute
                    left-1/2
                    top-1/2
                    h-[5px]
                    w-[5px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    ${
                      isSystems
                        ? "bg-[#21a45b]"
                        : "bg-[#176ee4]"
                    }
                  `}
                />
              </div>
            )}

            {/* Step circle */}
            <div
              className={`
                relative
                z-10
                flex
                h-[35px]
                w-[35px]
                items-center
                justify-center
                rounded-full
                border
                ${
                  isSystems
                    ? "border-[#d8f0e2] bg-[#f0faf4]"
                    : "border-[#d9e7f8] bg-[#f2f7ff]"
                }
              `}
            >
              <span
                className={`
                  text-[9px]
                  font-bold
                  ${
                    isSystems
                      ? "text-[#16874b]"
                      : "text-[#1765cf]"
                  }
                `}
              >
                {step.number}
              </span>
            </div>

            {/* Icon */}
            <div
              className={`
                mt-2
                flex
                h-[20px]
                w-[20px]
                items-center
                justify-center
                rounded-full
                ${
                  isSystems
                    ? "text-[#169451]"
                    : "text-[#1765cf]"
                }
              `}
            >
              <Icon
                className="h-[14px] w-[14px]"
                strokeWidth={2}
              />
            </div>

            {/* Title */}
            <p
              className={`
                mt-1
                max-w-[115px]
                text-[8px]
                font-bold
                leading-[1.3]
                ${
                  isSystems
                    ? "text-[#174d35]"
                    : "text-[#163b75]"
                }
              `}
            >
              {step.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function ApproachPanel({
  title,
  variant,
  steps,
}: {
  title: string;
  variant: "typical" | "systems";
  steps: ComparisonStep[];
}) {
  const isSystems = variant === "systems";

  return (
    <div className="flex-1">
      {/* Panel heading */}
      <div className="mb-5 flex items-center gap-3">
        <div
          className={`
            flex
            h-[34px]
            w-[34px]
            shrink-0
            items-center
            justify-center
            rounded-full
            ${
              isSystems
                ? "bg-[#eefaf3] text-[#15914c]"
                : "bg-[#edf5ff] text-[#1765cf]"
            }
          `}
        >
          {isSystems ? (
            <CheckCircle2
              className="h-[18px] w-[18px]"
              strokeWidth={2}
            />
          ) : (
            <BarChart3
              className="h-[18px] w-[18px]"
              strokeWidth={2}
            />
          )}
        </div>

        <h3
          className={`
            text-[10px]
            font-bold
            uppercase
            tracking-[0.08em]
            ${
              isSystems
                ? "text-[#16874b]"
                : "text-[#1765cf]"
            }
          `}
        >
          {title}
        </h3>
      </div>

      {/* Steps */}
      <ComparisonSteps
        steps={steps}
        variant={variant}
      />

      {/* Bottom focus bar */}
      <div
        className={`
          mt-5
          flex
          items-center
          justify-center
          gap-2
          rounded-[6px]
          px-4
          py-2.5
          ${
            isSystems
              ? "bg-[#effaf4]"
              : "bg-[#edf5ff]"
          }
        `}
      >
        {isSystems ? (
          <CheckCircle2
            className="h-[13px] w-[13px] text-[#15914c]"
            strokeWidth={2}
          />
        ) : (
          <CircleDot
            className="h-[13px] w-[13px] text-[#1765cf]"
            strokeWidth={2}
          />
        )}

        <span
          className={`
            text-[8px]
            font-semibold
            ${
              isSystems
                ? "text-[#28734c]"
                : "text-[#315b91]"
            }
          `}
        >
          {isSystems
            ? "Focus on business impact"
            : "Focus on reporting output"}
        </span>
      </div>
    </div>
  );
}

export default function Comparison() {
  return (
    <section
      aria-labelledby="comparison-title"
      className="
        relative
        mt-3
        w-full
        overflow-hidden
        rounded-[6px]
        bg-white
        px-6
        py-6
        shadow-[0_4px_25px_rgba(12,45,90,0.035)]
        sm:px-8
        lg:mt-10
        lg:px-[48px]
        lg:py-[42px]
      "
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Section heading */}
        <div className="mb-5 flex items-center justify-center gap-3 lg:mb-7">
          <span
            aria-hidden="true"
            className="h-[2px] w-[24px] bg-[#0867e8]"
          />

          <h2
            id="comparison-title"
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#075bd8]
            "
          >
            My Approach vs Typical Reporting
          </h2>

          <span
            aria-hidden="true"
            className="h-[2px] w-[24px] bg-[#0867e8]"
          />
        </div>

        {/* Comparison */}
        <div
          className="
            relative
            flex
            flex-col
            gap-4
            lg:flex-row
            lg:items-start
            lg:gap-0
          "
        >
          {/* Typical */}
          <ApproachPanel
            title="Typical Reporting Approach"
            variant="typical"
            steps={typicalApproach}
          />

          {/* Center VS */}
          <div
            className="
              hidden
              w-[82px]
              shrink-0
              items-center
              justify-center
              lg:flex
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                top-[36px]
                h-[150px]
                w-px
                bg-[#dbe6f4]
              "
            />

            <div
              className="
                relative
                z-10
                flex
                h-[46px]
                w-[46px]
                items-center
                justify-center
                rounded-full
                border
                border-[#dbe6f3]
                bg-white
                text-[13px]
                font-bold
                text-[#142d58]
                shadow-[0_5px_18px_rgba(20,60,110,0.08)]
              "
            >
              VS
            </div>
          </div>

          {/* Mobile VS */}
          <div className="flex justify-center lg:hidden">
            <div
              className="
                flex
                h-[42px]
                w-[42px]
                items-center
                justify-center
                rounded-full
                border
                border-[#dbe6f3]
                bg-white
                text-[11px]
                font-bold
                text-[#142d58]
                shadow-[0_5px_18px_rgba(20,60,110,0.08)]
              "
            >
              VS
            </div>
          </div>

          {/* Business systems */}
          <ApproachPanel
            title="My Business Systems Approach"
            variant="systems"
            steps={businessSystemsApproach}
          />
        </div>
      </div>
    </section>
  );
}



