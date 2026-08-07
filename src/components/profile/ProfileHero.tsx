import Link from "next/link";

import Container from "@/components/ui/Container";

import about from "@/content/profile/About";

export default function ProfileHero() {
  const { hero } = about;

  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[#FBFCFE]

        pt-12
        pb-14

        lg:pt-16
        lg:pb-20
      "
    >
      {/* ========================================= */}
      {/* Background */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            -right-28
            -top-28

            h-[420px]
            w-[420px]

            rounded-full

            bg-[#EEF5FF]

            opacity-70

            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -left-24
            bottom-0

            h-[320px]
            w-[320px]

            rounded-full

            bg-[#F4F8FF]

            opacity-80

            blur-[110px]
          "
        />

      </div>

      <Container>

        <div
          className="
            relative
            z-10

            grid
            items-center

            gap-12

            lg:grid-cols-[1.2fr_.8fr]
            lg:gap-14
          "
        >

          {/* ========================================= */}
          {/* Left Side */}
          {/* ========================================= */}

          <div className="max-w-[640px]">

            {/* Badge */}

            <div className="flex items-center gap-4">

              <div className="h-px w-14 bg-[#2563EB]" />

              <span
                className="
                  text-[11px]
                  font-semibold

                  uppercase

                  tracking-[0.34em]

                  text-[#2563EB]
                "
              >
                {hero.badge}
              </span>

            </div>

            {/* Executive Title */}

            <p
              className="
                mt-7

                text-[16px]
                font-semibold

                text-[#2563EB]
              "
            >
              {hero.executiveTitle}
            </p>

            {/* Headline */}

            <h1
              className="
                mt-4

                max-w-[700px]

                text-[36px]
                font-bold

                leading-[1.08]

                tracking-[-0.04em]

                text-[#102A56]

                md:text-[42px]
                lg:text-[48px]
              "
            >
              {hero.headline}
            </h1>

            {/* Accent */}

            <div
              className="
                mt-6

                h-1
                w-24

                rounded-full

                bg-[#2563EB]
              "
            />

            {/* Signature */}

            <div
              className="
                mt-8

                max-w-[560px]

                border-l-4
                border-[#2563EB]

                pl-6
              "
            >

              <p
                className="
                  text-[20px]
                  font-semibold

                  leading-9

                  tracking-[-0.02em]

                  text-[#123A63]
                "
              >
                {hero.signature}
              </p>

            </div>

            {/* Buttons */}

            <div
              className="
                mt-10

                flex
                flex-wrap

                gap-4
              "
            >

              <Link
                href={hero.primaryButton.href}
                className="
                  inline-flex
                  items-center
                  justify-center

                  rounded-xl

                  bg-[#123A63]

                  px-8
                  py-4

                  font-semibold

                  text-white

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#0F3154]
                  hover:shadow-[0_18px_40px_rgba(18,58,99,0.18)]
                "
              >
                {hero.primaryButton.label}
              </Link>

              <Link
                href={hero.secondaryButton.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-[#D7E5FB]

                  bg-white

                  px-8
                  py-4

                  font-semibold

                  text-[#123A63]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#2563EB]
                  hover:bg-[#F8FBFF]
                "
              >
                {hero.secondaryButton.label}
              </Link>

            </div>

          </div>
{/* ========================================= */}
{/* Right Side */}
{/* ========================================= */}

<div className="relative flex justify-center lg:justify-end">

  {/* Glow */}

  <div
    className="
      absolute

      h-[360px]
      w-[360px]

      rounded-full

      bg-[#2563EB]/8

      blur-[90px]
    "
  />

  {/* Executive Blueprint */}

  <div
    className="
      relative

      w-full
      max-w-[420px]

      overflow-hidden

      rounded-[28px]

      border
      border-[#E7EEF8]

      bg-white

      shadow-[0_24px_60px_rgba(18,58,99,0.10)]

      transition-all
      duration-500

      hover:-translate-y-1
      hover:shadow-[0_34px_70px_rgba(18,58,99,0.14)]
    "
  >

    {/* Header */}

    <div className="border-b border-[#EEF3FA] px-7 py-6">

      <span
        className="
          text-[11px]
          font-semibold

          uppercase

          tracking-[0.24em]

          text-[#2563EB]
        "
      >
        Executive Blueprint
      </span>

      <h3
        className="
          mt-3

          text-[26px]
          font-bold

          tracking-[-0.03em]

          text-[#102A56]
        "
      >
        Beyond Reporting
      </h3>

      <p
        className="
          mt-3

          text-[15px]
          leading-7

          text-slate-600
        "
      >
        Designing business systems that strengthen operations,
        standardize reporting, and support executive decisions.
      </p>

    </div>

    {/* Content */}

    <div className="px-7 py-3">
              {[
        {
          label: "Focus",
          value: "Business Systems",
        },
        {
          label: "Specialization",
          value: "Decision Intelligence",
        },
        {
          label: "Approach",
          value: "Business Before Dashboards",
        },
        {
          label: "Mission",
          value: "Create Lasting Systems",
        },
        {
          label: "Industry",
          value: "Real Estate",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="
            border-b
            border-[#EEF3FA]

            py-5

            last:border-0
          "
        >
          <p
            className="
              text-[12px]
              font-medium

              uppercase

              tracking-[0.18em]

              text-slate-500
            "
          >
            {item.label}
          </p>

          <h4
            className="
              mt-2

              text-[18px]
              font-semibold

              tracking-[-0.02em]

              text-[#102A56]
            "
          >
            {item.value}
          </h4>
        </div>
      ))}
    </div>

    {/* Footer */}

    <div
      className="
        border-t
        border-[#EEF3FA]

        bg-[#FBFCFE]

        px-7
        py-5
      "
    >
      <div className="flex items-center justify-between">

        <span
          className="
            text-[13px]

            text-slate-500
          "
        >
          Building systems before dashboards
        </span>

        <div
          className="
            h-2
            w-2

            rounded-full

            bg-[#2563EB]
          "
        />

      </div>

    </div>

  </div>

</div>
        </div>

      </Container>

    </section>
  );
}