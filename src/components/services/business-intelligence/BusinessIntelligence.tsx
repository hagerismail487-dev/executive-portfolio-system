import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileBarChart,
  FileCheck2,
  FileText,
  Gauge,
  Layers3,
  LineChart,
  Network,
  Settings2,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

import data from "./data";

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-3">
      <span
        className="
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.28em]
          text-[#2563EB]
        "
      >
        {children}
      </span>
    </div>
  );
}

/* =========================================================
   HERO INTELLIGENCE VISUAL
========================================================= */

function HeroIntelligenceVisual() {
  const insights = [
    {
      label: "Growth",
      value: "+18.4%",
      icon: TrendingUp,
    },
    {
      label: "Opportunity",
      value: "84%",
      icon: Target,
    },
    {
      label: "Insight",
      value: "92%",
      icon: LineChart,
    },
  ];

  return (
    <div
      className="
        relative
        mx-auto
        w-full
        max-w-[560px]
        translate-y-5
        lg:translate-y-7
      "
    >
      {/* =====================================================
          Glow
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[370px]
          w-[370px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#2563EB]/8
          blur-[100px]
        "
      />

      {/* =====================================================
          Main Intelligence Card
      ===================================================== */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[24px]
          border
          border-[#DCE8FA]
          bg-white
          shadow-[0_24px_70px_rgba(18,58,99,0.12)]
        "
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[#E8EEF7]
            px-6
            py-5
          "
        >
          <div>
            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#2563EB]
              "
            >
              Business Intelligence
            </span>

            <h3
              className="
                mt-1
                text-[17px]
                font-bold
                tracking-[-0.02em]
                text-[#102A56]
              "
            >
              Strategic Insight
            </h3>
          </div>

          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              bg-[#EEF5FF]
            "
          >
            <TrendingUp className="h-5 w-5 text-[#2563EB]" />
          </div>
        </div>

        {/* Insight Indicators */}

        <div className="grid grid-cols-3 gap-3 px-6 py-5">
          {insights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  rounded-xl
                  border
                  border-[#E8EEF7]
                  bg-[#FBFCFE]
                  px-3
                  py-3
                "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-medium text-[#7C94B2]">
                    {item.label}
                  </span>

                  <Icon className="h-3.5 w-3.5 text-[#2563EB]" />
                </div>

                <div className="mt-2 text-[19px] font-bold text-[#102A56]">
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>

        {/* Intelligence Chart */}

        <div className="px-6 pb-5">
          <div
            className="
              relative
              h-[155px]
              overflow-hidden
              rounded-xl
              border
              border-[#E8EEF7]
              bg-[#FBFCFE]
            "
          >
            {/* Grid */}

            <div
              className="
                absolute
                inset-0
                flex
                flex-col
                justify-between
                px-4
                py-4
              "
            >
              <div className="h-px w-full bg-[#E9F0FA]" />
              <div className="h-px w-full bg-[#E9F0FA]" />
              <div className="h-px w-full bg-[#E9F0FA]" />
              <div className="h-px w-full bg-[#E9F0FA]" />
            </div>

            {/* Insight Area */}

            <svg
              viewBox="0 0 500 150"
              className="
                absolute
                inset-0
                h-full
                w-full
              "
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="intelligenceArea"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#2563EB"
                    stopOpacity="0.17"
                  />

                  <stop
                    offset="100%"
                    stopColor="#2563EB"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              <path
                d="
                  M0 116
                  C40 112 60 100 92 104
                  C125 108 145 82 180 88
                  C215 94 235 70 270 75
                  C305 80 325 50 360 57
                  C395 64 420 40 450 45
                  C475 49 490 30 500 22
                  L500 150
                  L0 150
                  Z
                "
                fill="url(#intelligenceArea)"
              />

              <path
                d="
                  M0 116
                  C40 112 60 100 92 104
                  C125 108 145 82 180 88
                  C215 94 235 70 270 75
                  C305 80 325 50 360 57
                  C395 64 420 40 450 45
                  C475 49 490 30 500 22
                "
                fill="none"
                stroke="#2563EB"
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
              />

              {/* Insight Points */}

              <circle
                cx="180"
                cy="88"
                r="5"
                fill="#2563EB"
              />

              <circle
                cx="360"
                cy="57"
                r="5"
                fill="#2563EB"
              />

              <circle
                cx="500"
                cy="22"
                r="5"
                fill="#2563EB"
              />
            </svg>

            {/* Insight Label */}

            <div
              className="
                absolute
                right-4
                top-4
                rounded-md
                border
                border-[#DCE8FA]
                bg-white/90
                px-2
                py-1
              "
            >
              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#2563EB]
                "
              >
                Emerging Trend
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div
          className="
            border-t
            border-[#E8EEF7]
            bg-[#FBFCFE]
            px-6
            py-4
          "
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#2563EB]" />

              <span className="text-[10px] font-medium text-[#526A88]">
                Business Insight Active
              </span>
            </div>

            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#8AA4C5]">
              Strategic View
            </span>
          </div>
        </div>
      </div>

      {/* Floating Insight Card */}

      <div
        className="
          absolute
          -bottom-5
          -left-5
          hidden
          rounded-xl
          border
          border-[#DCE8FA]
          bg-white
          px-4
          py-3
          shadow-[0_15px_40px_rgba(18,58,99,0.10)]
          sm:block
        "
      >
        <div className="flex items-center gap-2">
          <div
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg
              bg-[#EEF5FF]
            "
          >
            <Target className="h-4 w-4 text-[#2563EB]" />
          </div>

          <div>
            <div className="text-[9px] font-medium text-[#7C94B2]">
              Decision Support
            </div>

            <div className="text-[11px] font-bold text-[#102A56]">
              Actionable Insight
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function ServiceHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-b
        border-[#E8EEF7]
        bg-white
      "
    >
      {/* Background Grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
          [background-image:linear-gradient(#E8F0FC_1px,transparent_1px),linear-gradient(90deg,#E8F0FC_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      {/* Right Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-0
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#EEF5FF]
          blur-[120px]
        "
      />

      {/* Bottom Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          left-1/3
          h-[320px]
          w-[500px]
          rounded-full
          bg-[#F4F8FF]
          blur-[100px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1280px]
          items-center
          gap-10
          px-6
          py-16
          lg:grid-cols-[0.9fr_1.1fr]
          lg:px-10
          lg:py-14
        "
      >
        {/* LEFT */}

        <div className="max-w-[560px]">
          <SectionLabel>
            Professional Service
          </SectionLabel>

          <h1
            className="
              max-w-[550px]
              text-[42px]
              font-bold
              leading-[1.08]
              tracking-[-0.045em]
              text-[#102A56]
              md:text-[48px]
              lg:text-[52px]
            "
          >
            Business
            <br />
            Intelligence
          </h1>

          <h2
            className="
              mt-4
              max-w-[550px]
              text-[22px]
              font-semibold
              leading-[1.35]
              tracking-[-0.025em]
              text-[#2563EB]
              md:text-[24px]
            "
          >
            Turning Business Data
            <br />
            Into Strategic Insight
          </h2>

          <p
            className="
              mt-5
              max-w-[510px]
              text-[15px]
              leading-7
              text-[#355275]
            "
          >
            I design Business Intelligence solutions that
            connect business data, uncover meaningful
            patterns, and transform information into
            actionable insights that support strategic
            planning and executive decision-making.
          </p>

          {/* Buttons */}

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={data.cta.buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-[#2563EB]
                px-6
                py-3.5
                text-[13px]
                font-semibold
                !text-white
                shadow-[0_10px_25px_rgba(37,99,235,0.22)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#1D4ED8]
              "
            >
              <span className="!text-white">
                Let's Talk
              </span>

              <ArrowRight className="h-4 w-4 !text-white" />
            </Link>

            <Link
              href="/case-studies"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-[#2563EB]
                bg-white
                px-6
                py-3.5
                text-[13px]
                font-semibold
                !text-[#123A63]
                transition-all
                duration-300
                hover:bg-[#F5F9FF]
              "
            >
              Explore Projects
            </Link>
          </div>
        </div>

        {/* RIGHT */}

        <HeroIntelligenceVisual />
      </div>
    </section>
  );
}

/* =========================================================
   BUSINESS VALUE
========================================================= */

function BusinessValueSection() {
  const items = [
    {
      icon: Database,
      title: "Business Data",
      description:
        "Connect and organize business information from multiple sources",
    },
    {
      icon: LineChart,
      title: "Trend Analysis",
      description:
        "Reveal patterns and changes that explain business performance",
    },
    {
      icon: TrendingUp,
      title: "Strategic Insight",
      description:
        "Turn analytical findings into meaningful business opportunities",
    },
    {
      icon: Target,
      title: "Better Decisions",
      description:
        "Support proactive planning through reliable business intelligence",
    },
  ];

  return (
    <section className="border-b border-[#E8EEF7] bg-white">
      <div className="mx-auto max-w-[1140px] px-6 py-14 lg:px-8">
        <SectionLabel>
          What This Service Solves
        </SectionLabel>

        <h2
          className="
            text-[25px]
            font-bold
            tracking-[-0.03em]
            text-[#102A56]
          "
        >
          Turning Business Data Into Strategic Insight
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="relative text-center"
              >
                {index !== items.length - 1 && (
                  <div
                    className="
                      absolute
                      left-[calc(50%+58px)]
                      top-[30px]
                      hidden
                      h-px
                      w-[calc(100%-116px)]
                      bg-[#BFD5FA]
                      lg:block
                    "
                  >
                    <ArrowRight
                      className="
                        absolute
                        right-[-4px]
                        top-1/2
                        h-3
                        w-3
                        -translate-y-1/2
                        text-[#2563EB]
                      "
                    />
                  </div>
                )}

                <div
                  className="
                    relative
                    z-10
                    mx-auto
                    flex
                    h-[60px]
                    w-[60px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#BFD5FA]
                    bg-white
                  "
                >
                  <Icon className="h-6 w-6 text-[#2563EB]" />
                </div>

                <div className="mt-4 text-[10px] font-bold text-[#2563EB]">
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                <h3 className="mt-2 text-[13px] font-bold text-[#102A56]">
                  {item.title}
                </h3>

                <p className="mx-auto mt-2 max-w-[185px] text-[12px] leading-5 text-[#526A88]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   DELIVERABLES
========================================================= */

function DeliverablesSection() {
  const icons = [
    Network,
    BarChart3,
    FileBarChart,
    LineChart,
    TrendingUp,
    Gauge,
    Database,
    FileText,
  ];

  return (
    <section className="border-b border-[#E8EEF7] bg-white">
      <div className="mx-auto max-w-[1140px] px-6 py-12 lg:px-8">
        <SectionLabel>
          Deliverables
        </SectionLabel>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {data.deliverables.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={item}
                className="
                  flex
                  min-h-[122px]
                  flex-col
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#DCE8FA]
                  bg-white
                  px-3
                  py-4
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#9EC0FA]
                  hover:shadow-[0_12px_30px_rgba(37,99,235,0.07)]
                "
              >
                <Icon className="h-5 w-5 text-[#2563EB]" />

                <span className="mt-3 text-[9px] font-medium text-[#8AA4C5]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <span className="mt-1 text-[10px] font-semibold leading-4 text-[#102A56]">
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WORKFLOW
========================================================= */

function WorkflowSection() {
  const icons = [
    ClipboardCheck,
    Settings2,
    Database,
    LineChart,
    ShieldCheck,
  ];

  return (
    <section className="border-b border-[#E8EEF7] bg-white">
      <div className="mx-auto max-w-[1140px] px-6 py-14 lg:px-8">
        <SectionLabel>
          How It Works
        </SectionLabel>

        <h2
          className="
            text-[25px]
            font-bold
            tracking-[-0.03em]
            text-[#102A56]
          "
        >
          Our 5-Step Methodology
        </h2>

        <div className="relative mt-10 grid gap-8 lg:grid-cols-5 lg:gap-5">
          <div
            className="
              absolute
              left-[10%]
              right-[10%]
              top-[31px]
              hidden
              h-px
              bg-[#C8DAF7]
              lg:block
            "
          />

          {data.workflow.map((step, index) => {
            const Icon = icons[index];

            return (
              <div
                key={step.title}
                className="relative z-10 text-center"
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-[62px]
                    w-[62px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#9EC0FA]
                    bg-white
                  "
                >
                  <Icon className="h-5 w-5 text-[#2563EB]" />
                </div>

                <span className="mt-3 block text-[9px] font-semibold text-[#8AA4C5]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <h3 className="mt-1 text-[13px] font-bold text-[#102A56]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2 max-w-[175px] text-[11px] leading-5 text-[#526A88]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TECHNOLOGIES
========================================================= */

function TechnologiesSection() {
  const icons = [
    BarChart3,
    FileText,
    Database,
    Gauge,
    Network,
    LineChart,
    TrendingUp,
    Target,
  ];

  return (
    <section className="border-b border-[#E8EEF7] bg-white">
      <div className="mx-auto max-w-[1140px] px-6 py-10 lg:px-8">
        <SectionLabel>
          Technology & Capabilities
        </SectionLabel>

        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {data.technologies.map((technology, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={technology}
                className="
                  flex
                  items-start
                  gap-3
                  border-b
                  border-[#E8EEF7]
                  px-4
                  py-4
                  first:pl-0
                  lg:border-b-0
                  lg:border-r
                  lg:last:border-r-0
                "
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB]" />

                <div>
                  <h3 className="text-[12px] font-bold text-[#102A56]">
                    {technology}
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-[#526A88]">
                    {getTechnologyDescription(technology)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function getTechnologyDescription(technology: string) {
  const descriptions: Record<string, string> = {
    "Microsoft Power BI":
      "Interactive intelligence dashboards and reporting",

    "Microsoft Excel":
      "Business analysis and supporting data preparation",

    "Power Query":
      "Data preparation and transformation",

    DAX:
      "Advanced analytical calculations and measures",

    "Data Modeling":
      "Reliable analytical structures for business insight",

    "Business Intelligence":
      "Integrated analytical capability for business decisions",

    "Trend Analysis":
      "Identification of patterns and business performance changes",

    "Executive Analytics":
      "Decision-ready insights for leadership teams",
  };

  return (
    descriptions[technology] ??
    "Business intelligence capability"
  );
}

/* =========================================================
   WHY WORK WITH ME
========================================================= */

function WhyWorkWithMeSection() {
  const icons = [
    Target,
    Network,
    TrendingUp,
    BarChart3,
  ];

  return (
    <section className="border-b border-[#E8EEF7] bg-white">
      <div className="mx-auto max-w-[1140px] px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          {/* LEFT */}

          <div>
            <SectionLabel>
              Why Work With Me
            </SectionLabel>

            <h2
              className="
                max-w-[440px]
                text-[28px]
                font-bold
                leading-[1.15]
                tracking-[-0.035em]
                text-[#102A56]
              "
            >
              Intelligence Built
              <br />
              Around Business Questions
            </h2>

            <p
              className="
                mt-5
                max-w-[440px]
                text-[14px]
                leading-7
                text-[#526A88]
              "
            >
              {data.whyWorkWithMe.description}
            </p>

            <div className="mt-6 h-[3px] w-14 rounded-full bg-[#2563EB]" />
          </div>

          {/* RIGHT */}

          <div className="grid gap-4 sm:grid-cols-2">
            {data.whyWorkWithMe.strengths.map(
              (strength, index) => {
                const Icon = icons[index];

                return (
                  <div
                    key={strength.title}
                    className="
                      rounded-[18px]
                      border
                      border-[#E0EAF7]
                      bg-[#FBFCFE]
                      p-5
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#C7DBF8]
                      hover:bg-white
                      hover:shadow-[0_14px_35px_rgba(18,58,99,0.07)]
                    "
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#EEF5FF]
                        "
                      >
                        <Icon className="h-4 w-4 text-[#2563EB]" />
                      </div>

                      <div>
                        <span className="text-[9px] font-semibold tracking-[0.15em] text-[#8AA4C5]">
                          {(index + 1)
                            .toString()
                            .padStart(2, "0")}
                        </span>

                        <h3
                          className="
                            mt-1
                            text-[14px]
                            font-bold
                            leading-tight
                            text-[#102A56]
                          "
                        >
                          {strength.title}
                        </h3>
                      </div>
                    </div>

                    <p
                      className="
                        mt-4
                        text-[12px]
                        leading-6
                        text-[#526A88]
                      "
                    >
                      {strength.description}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CTA
========================================================= */

function CTASection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#061C3D]
      "
    >
      {/* Decorative Curves */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-20
          h-[250px]
          w-[550px]
          rounded-[50%]
          border
          border-[#2563EB]/30
          rotate-[-8deg]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-20
          h-[280px]
          w-[600px]
          rounded-[50%]
          border
          border-[#2563EB]/25
          rotate-[8deg]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[850px]
          px-6
          py-16
          text-center
        "
      >
        {/* Eyebrow */}

        <div
          className="
            mb-5
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <div className="h-px w-10 bg-[#3B82F6]" />

          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.30em]
              !text-[#60A5FA]
            "
          >
            Let's Build Something Valuable
          </span>

          <div className="h-px w-10 bg-[#3B82F6]" />
        </div>

        {/* Title */}

        <h2
          className="
            !text-white
            text-[28px]
            font-bold
            leading-[1.2]
            tracking-[-0.035em]
            md:text-[32px]
          "
        >
          {data.cta.title}
        </h2>

        {/* Description */}

        <p
          className="
            mx-auto
            mt-4
            max-w-[700px]
            !text-[#DCE8F8]
            text-[14px]
            leading-7
          "
        >
          {data.cta.description}
        </p>

        {/* Button */}

        <Link
          href={data.cta.buttonHref}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-7
            inline-flex
            items-center
            gap-2
            rounded-lg
            bg-[#2563EB]
            px-7
            py-3.5
            text-[13px]
            font-semibold
            !text-white
            shadow-[0_12px_30px_rgba(37,99,235,0.28)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#3B82F6]
          "
        >
          <span className="!text-white">
            {data.cta.buttonText}
          </span>

          <ArrowRight className="h-4 w-4 !text-white" />
        </Link>
      </div>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function BusinessIntelligence() {
  return (
    <main className="bg-white">
      <ServiceHero />

      <BusinessValueSection />

      <DeliverablesSection />

      <WorkflowSection />

      <TechnologiesSection />

      <WhyWorkWithMeSection />

      <CTASection />
    </main>
  );
}