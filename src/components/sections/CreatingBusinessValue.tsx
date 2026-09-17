import {
  Eye,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";

import Section from "@/components/ui/Section";

const values = [
  {
    icon: Eye,
    title: "Clarity",
    description:
      "Create a reliable view of the business through structured reporting and trusted information.",
  },
  {
    icon: Lightbulb,
    title: "Insight",
    description:
      "Use meaningful KPIs and analysis to reveal trends, gaps, and performance signals.",
  },
  {
    icon: Target,
    title: "Decision",
    description:
      "Turn clear insights into evidence-based choices with stronger context and confidence.",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    description:
      "Enable better performance through decisions grounded in reliable business information.",
  },
];

export default function CreatingBusinessValue() {
  return (
    <Section
      id="business-value"
      className="
        relative
        isolate
        overflow-hidden
        !bg-[#031C3D]
        py-16
        lg:py-20
      "
    >
      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            opacity-[0.055]
            [background-image:linear-gradient(rgba(72,130,220,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(72,130,220,0.45)_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[520px]
            w-[520px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#1265E8]/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -left-32
            top-1/3
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#1265E8]/10
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            -right-32
            bottom-0
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#1265E8]/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-24
            top-1/2
            h-[280px]
            w-[280px]
            -translate-y-1/2
            rounded-full
            border
            border-[#2563EB]/10
          "
        />

        <div
          className="
            absolute
            -right-16
            top-1/2
            h-[210px]
            w-[210px]
            -translate-y-1/2
            rounded-full
            border
            border-[#2563EB]/10
          "
        />
      </div>

      {/* ===================================================== */}
      {/* CONTENT */}
      {/* ===================================================== */}

      <div className="relative z-10">
        {/* =================================================== */}
        {/* HEADER */}
        {/* =================================================== */}

        <div
          className="
            mx-auto
            mb-10
            max-w-[680px]
            text-center
            lg:mb-12
          "
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#287CFF]" />

            <span
              className="
                !text-[#55A0FF]
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
              "
            >
              Business Value
            </span>

            <span className="h-px w-12 bg-[#287CFF]" />
          </div>

          <h2
            className="
              !text-white
              text-[32px]
              font-bold
              leading-[1.05]
              tracking-[-0.04em]
              sm:text-[36px]
              lg:text-[42px]
            "
          >
            Turning Data Into Business Value
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[600px]
              !text-[#C4D4EA]
              text-[13px]
              leading-6
              sm:text-[14px]
            "
          >
            Connecting reliable information, meaningful performance signals,
            and clear insights to support better business decisions.
          </p>
        </div>

        {/* =================================================== */}
        {/* VALUE STORY */}
        {/* =================================================== */}

        <div
          className="
            relative
            mx-auto
            max-w-[980px]
          "
        >
          {/* ================================================= */}
          {/* CONNECTIONS */}
          {/* ================================================= */}

          <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
            <div
              className="
                absolute
                left-[24%]
                top-[30%]
                h-px
                w-[18%]
                bg-gradient-to-r
                from-transparent
                via-[#287CFF]
                to-[#287CFF]
              "
            />

            <div
              className="
                absolute
                left-[41%]
                top-[30%]
                h-2
                w-2
                -translate-y-1/2
                rounded-full
                bg-[#287CFF]
                shadow-[0_0_12px_rgba(37,99,235,0.9)]
              "
            />

            <div
              className="
                absolute
                left-[24%]
                top-[70%]
                h-px
                w-[18%]
                bg-gradient-to-r
                from-transparent
                via-[#287CFF]
                to-[#287CFF]
              "
            />

            <div
              className="
                absolute
                left-[41%]
                top-[70%]
                h-2
                w-2
                -translate-y-1/2
                rounded-full
                bg-[#287CFF]
                shadow-[0_0_12px_rgba(37,99,235,0.9)]
              "
            />

            <div
              className="
                absolute
                right-[24%]
                top-[30%]
                h-px
                w-[18%]
                bg-gradient-to-l
                from-transparent
                via-[#287CFF]
                to-[#287CFF]
              "
            />

            <div
              className="
                absolute
                right-[41%]
                top-[30%]
                h-2
                w-2
                -translate-y-1/2
                rounded-full
                bg-[#287CFF]
                shadow-[0_0_12px_rgba(37,99,235,0.9)]
              "
            />

            <div
              className="
                absolute
                right-[24%]
                top-[70%]
                h-px
                w-[18%]
                bg-gradient-to-l
                from-transparent
                via-[#287CFF]
                to-[#287CFF]
              "
            />

            <div
              className="
                absolute
                right-[41%]
                top-[70%]
                h-2
                w-2
                -translate-y-1/2
                rounded-full
                bg-[#287CFF]
                shadow-[0_0_12px_rgba(37,99,235,0.9)]
              "
            />
          </div>

          {/* ================================================= */}
          {/* VALUE CARDS */}
          {/* ================================================= */}

          <div
            className="
              relative
              z-10
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-[1fr_300px_1fr]
              lg:grid-rows-2
              lg:items-center
            "
          >
            <ValueCard
              item={values[0]}
              className="lg:col-start-1 lg:row-start-1"
            />

            {/* Central Business Value */}

            <div
              className="
                relative
                order-first
                flex
                min-h-[230px]
                items-center
                justify-center
                lg:col-start-2
                lg:row-span-2
                lg:row-start-1
                lg:order-none
              "
            >
              <div
                className="
                  absolute
                  h-[190px] w-[190px]
                  rounded-full
                  border
                  border-[#2379FF]/30
                  shadow-[0_0_50px_rgba(37,99,235,0.12)]
                  lg:h-[230px]
                  lg:w-[230px]
                "
              />

              <div
                className="
                  absolute
                  h-[155px] w-[155px]
                  rounded-full
                  border
                  border-[#2379FF]/30
                  lg:h-[185px]
                  lg:w-[185px]
                "
              />

              <div
                className="
                  relative
                  flex
                  h-[120px] w-[120px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#5EA0FF]/60
                  bg-[radial-gradient(circle_at_35%_30%,#2678ED,#08469F_58%,#062F72)]
                  shadow-[0_0_55px_rgba(37,99,235,0.42)]
                  lg:h-[145px]
                  lg:w-[145px]
                "
              >
                <div
                  className="
                    absolute
                    inset-3
                    rounded-full
                    border
                    border-white/10
                  "
                />

                <div className="relative text-center">
                  <TrendingUp
                    size={20}
                    strokeWidth={1.6}
                    className="mx-auto mb-2 !text-[#9BC6FF]"
                  />

                  <span
                    className="
                      block
                      !text-white
                      text-[15px]
                      font-bold
                      uppercase
                      leading-tight
                      tracking-[0.02em]
                    "
                  >
                    Business
                  </span>

                  <span
                    className="
                      block
                      !text-white
                      text-[15px]
                      font-bold
                      uppercase
                      leading-tight
                      tracking-[0.02em]
                    "
                  >
                    Value
                  </span>
                </div>
              </div>
            </div>

            <ValueCard
              item={values[1]}
              className="lg:col-start-3 lg:row-start-1"
            />

            <ValueCard
              item={values[2]}
              className="lg:col-start-1 lg:row-start-2"
            />

            <ValueCard
              item={values[3]}
              className="lg:col-start-3 lg:row-start-2"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ========================================================= */
/* VALUE CARD */
/* ========================================================= */

function ValueCard({
  item,
  className = "",
}: {
  item: (typeof values)[number];
  className?: string;
}) {
  const Icon = item.icon;

  return (
    <div
      className={`
        group
        relative
        z-10
        rounded-[18px]
        border
        border-[#1D5A9A]
        bg-[#062653]
        px-5
        py-5
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#287CFF]
        hover:bg-[#08336B]
        hover:shadow-[0_15px_40px_rgba(0,71,180,0.22)]

        ${className}
      `}
    >
      <div className="flex items-start gap-4">
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#287CFF]/60
            bg-[#0A3974]
            !text-[#69ACFF]
            shadow-[0_0_20px_rgba(37,99,235,0.18)]
          "
        >
          <Icon
            size={22}
            strokeWidth={1.7}
          />
        </div>

        <div className="min-w-0">
          <h3
            className="
              !text-white
              text-[15px]
              font-semibold
              tracking-[-0.02em]
              sm:text-[16px]
            "
          >
            {item.title}
          </h3>

          <div className="mt-2 h-px w-8 bg-[#287CFF]" />

          <p
            className="
              mt-3
              !text-[#B8CBE4]
              text-[11px]
              leading-5
              sm:text-[12px]
            "
          >
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
