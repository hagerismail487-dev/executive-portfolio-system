import FAQSection from "../FAQSection";
import Link from "next/link";
import Image from "next/image";
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
   HERO PERFORMANCE VISUAL
========================================================= */

function HeroPerformanceVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] translate-y-5 lg:translate-y-7">
      <Image
        src="/projects/customer-experience-operations-dashboard/01-landing-page.PNG"
        alt="Customer Experience and Operations dashboard"
        width={1280}
        height={720}
        sizes="(max-width: 1024px) 100vw, 560px"
        className="block h-auto w-full rounded-[24px] border border-[#DCE8FA] bg-white object-contain shadow-[0_24px_70px_rgba(18,58,99,0.12)]"
        priority
      />
    </div>
  );
}

/* =========================================================
   SMALL ICON HELPER
========================================================= */

function TrendingIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="14 7 21 7 21 14" />
    </svg>
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
            Performance
            <br />
            Analytics
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
            Measuring Business Success
            <br />
            for Continuous Improvement
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
            I design performance analytics solutions that
            combine KPI frameworks, operational metrics,
            and executive reporting to help organizations
            monitor progress, identify performance gaps,
            and continuously improve business results.
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
              href="/case-studies/customer-experience-operations-dashboard"
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
              Explore Case Study
            </Link>
          </div>
        </div>

        {/* RIGHT */}

        <HeroPerformanceVisual />
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
      icon: Gauge,
      title: "Performance Measurement",
      description:
        "Structured KPIs that define how business performance is measured",
    },
    {
      icon: LineChart,
      title: "Performance Visibility",
      description:
        "Clear performance information that helps management monitor progress and priorities",
    },
    {
      icon: Target,
      title: "Performance Gap Detection",
      description:
        "Early identification of performance gaps and improvement opportunities",
    },
    {
      icon: CheckCircle2,
      title: "Continuous Improvement",
      description:
        "Performance insight that helps translate identified gaps into improvement priorities",
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
          From Performance Measurement to Continuous Improvement
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
    LineChart,
    Gauge,
    BarChart3,
    FileBarChart,
    Target,
    Network,
    ShieldCheck,
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
          From Performance Gaps to Improvement
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
    Target,
    Layers3,
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
      "Interactive performance dashboards and reporting",

    "Microsoft Excel":
      "Supporting analysis and performance reporting",

    "Power Query":
      "Data preparation and transformation",

    DAX:
      "Advanced KPI calculations and performance measures",

    "Data Modeling":
      "Reliable structures for performance reporting",

    "Performance Analytics":
      "Performance measurement and analytical insight",

    "KPI Framework Design":
      "Structured KPIs aligned with business objectives",

    "Executive Scorecards":
      "Clear executive-level performance monitoring",
  };

  return (
    descriptions[technology] ??
    "Performance analytics capability"
  );
}

/* =========================================================
   WHY WORK WITH ME
========================================================= */

function WhyWorkWithMeSection() {
  const icons = [
    Target,
    Gauge,
    LineChart,
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
              Performance Built
              <br />
              Around Improvement
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

export default function PerformanceAnalytics() {
  return (
    <main className="bg-white">
      <ServiceHero />

      <BusinessValueSection />

      <DeliverablesSection />

      <WorkflowSection />

      <TechnologiesSection />

      <WhyWorkWithMeSection />

      <FAQSection serviceSlug="performance-analytics" />
      <CTASection />
    </main>
  );
}
