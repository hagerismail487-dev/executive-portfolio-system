import Image from "next/image";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import data from "./data";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-28"
    >
      {/* ================================= */}
      {/* Background Decoration */}
      {/* ================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Glow */}

        <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-[#EEF5FF] blur-[170px]" />

        <div className="absolute -right-40 bottom-0 h-[560px] w-[560px] rounded-full bg-[#F5F9FF] blur-[180px]" />

        {/* Dots */}

        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-72
            opacity-[0.12]
            [background-image:radial-gradient(#2563EB_1.4px,transparent_1.4px)]
            [background-size:20px_20px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-[28%]
            h-72
            w-72
            opacity-[0.10]
            [background-image:radial-gradient(#2563EB_1.4px,transparent_1.4px)]
            [background-size:20px_20px]
          "
        />

      </div>

      <Container>

        <div className="relative z-10 grid items-center gap-24 xl:grid-cols-[1fr_1.08fr]">

          {/* ================================================= */}
          {/* LEFT */}
          {/* ================================================= */}

          <div>

            {/* ABOUT */}

            <div className="flex items-center gap-5">

              <div className="h-11 w-[4px] rounded-full bg-[#2563EB]" />

              <span className="text-sm font-bold uppercase tracking-[0.38em] text-[#2563EB]">

                {data.hero.label}

              </span>

            </div>

            {/* Quote */}

            <blockquote className="mt-10 border-l-[3px] border-[#DDE8FB] pl-7">

              <p className="max-w-xl text-[23px] italic leading-[42px] text-slate-600">

                "{data.quote.text}"

              </p>

              <footer className="mt-5 text-lg font-semibold text-[#102A56]">

                — {data.quote.author}

              </footer>

            </blockquote>

            {/* Heading */}

            <h2
              className="
                mt-12
                max-w-2xl
                text-[68px]
                font-bold
                leading-[1.02]
                tracking-[-0.055em]
                text-[#102A56]
              "
            >
              {data.hero.headline}
            </h2>

            {/* Blue Line */}

            <div className="mt-8 h-[4px] w-24 rounded-full bg-[#2563EB]" />

            {/* Story */}

            <div className="mt-10 space-y-8">

              {data.hero.story.map((paragraph) => (

                <p
                  key={paragraph}
                  className="
                    max-w-xl
                    text-[20px]
                    leading-10
                    text-slate-600
                  "
                >
                  {paragraph}
                </p>

              ))}

            </div>

            {/* Closing */}

            <p
              className="
                mt-10
                max-w-xl
                text-[22px]
                font-semibold
                leading-9
                text-[#123A63]
              "
            >
              {data.hero.closingLine}
            </p>

            {/* Button */}

            <div className="mt-14">

              <Button href={data.cta.href}>

                {data.cta.text}

              </Button>

            </div>

          </div>

          {/* ================================================= */}
          {/* RIGHT CARD */}
          {/* ================================================= */}

          <div
            className="
              overflow-hidden
              rounded-[34px]
              border
              border-[#E6EDF8]
              bg-white
              shadow-[0_35px_90px_rgba(16,42,86,0.08)]
            "
          >

            {/* ================================ */}
            {/* Portrait + Executive Cards */}
            {/* ================================ */}

            <div
              className="
                grid
                gap-8
                p-8
                lg:grid-cols-[1.42fr_0.88fr]
              "
            >

              {/* Portrait */}

              <div
                className="
                  relative
                  h-[610px]
                  overflow-hidden
                  rounded-[28px]
                "
              >

                <Image
                  src="/images/about/hager-ismail-portrait.v2.png"
                  alt="Hager Ismail"
                  fill
                  priority
                  className="
                    object-contain
                    object-bottom
                    scale-[1.32]
                    transition-transform
                    duration-500
                    hover:scale-[1.35]
                  "
                />

              </div>

              {/* Executive Cards */}

              <div className="flex flex-col justify-between">
{data.executiveCards.map((card, index) => (
  <div
    key={card.title}
    className="
      rounded-[22px]
      border
      border-[#E6EDF8]
      bg-white
      px-6
      py-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#D6E5FB]
      hover:shadow-[0_18px_45px_rgba(18,58,99,0.08)]
    "
  >
    <div className="flex items-start gap-5">

      {/* ================= Icon ================= */}

      <div
        className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-[#EEF5FF]
          text-[#2563EB]
        "
      >

        {index === 0 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-8 w-8"
          >
            <path d="M4 19h16" />
            <path d="M7 16V9" />
            <path d="M12 16V5" />
            <path d="M17 16v-3" />
            <path d="M20 8l-3-3-3 3" />
          </svg>
        )}

        {index === 1 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8"
          >
            <path d="M11 2a9 9 0 109 9h-9z" />
            <path d="M13 2.1V11h8.9A9 9 0 0013 2.1z" />
          </svg>
        )}

        {index === 2 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-8 w-8"
          >
            <rect
              x="3"
              y="4"
              width="18"
              height="14"
              rx="2"
            />

            <path d="M7 8h10" />

            <path d="M7 12h6" />
          </svg>
        )}

        {index === 3 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-8 w-8"
          >
            <path d="M4 20V4" />
            <path d="M4 20h16" />
            <path d="M8 16l3-4 3 2 4-6" />
          </svg>
        )}

      </div>

      {/* ================= Content ================= */}

      <div>

        <h3
          className="
            text-[24px]
            font-bold
            leading-8
            text-[#102A56]
          "
        >
          {card.title}
        </h3>

        <p
          className="
            mt-3
            text-[17px]
            leading-8
            text-slate-600
          "
        >
          {card.description}
        </p>

      </div>

    </div>

  </div>
))}

</div>

</div>

{/* ======================================== */}
{/* Statistics */}
{/* ======================================== */}

<div
  className="
    grid
    border-t
    border-[#E8EEF8]
    lg:grid-cols-4
  "
>
    {data.statistics.map((item, index) => (
  <div
    key={item.label}
    className={`
      flex
      flex-col
      items-center
      justify-center
      px-8
      py-10
      text-center
      ${
        index !== data.statistics.length - 1
          ? "border-r border-[#E8EEF8]"
          : ""
      }
    `}
  >

    {/* ================= ICON ================= */}

    <div className="mb-6 text-[#2563EB]">

      {index === 0 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-11 w-11"
        >
          <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
          <path d="M4 21a8 8 0 0116 0" />
        </svg>
      )}

      {index === 1 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-11 w-11"
        >
          <rect
            x="3"
            y="7"
            width="18"
            height="13"
            rx="2"
          />
          <path d="M8 7V4h8v3" />
        </svg>
      )}

      {index === 2 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-11 w-11"
        >
          <rect
            x="4"
            y="3"
            width="16"
            height="18"
            rx="2"
          />
          <path d="M8 8h8" />
          <path d="M8 12h8" />
          <path d="M8 16h5" />
        </svg>
      )}

      {index === 3 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-11 w-11"
        >
          <rect x="4" y="4" width="6" height="6" />
          <rect x="14" y="4" width="6" height="6" />
          <rect x="4" y="14" width="6" height="6" />
          <rect x="14" y="14" width="6" height="6" />
        </svg>
      )}

    </div>

    {/* ================= VALUE ================= */}

    <span
      className="
        text-[56px]
        font-bold
        leading-none
        text-[#102A56]
      "
    >
      {item.value}
    </span>

    {/* ================= LABEL ================= */}

    <div
      className="
        mt-4
        text-[17px]
        font-medium
        leading-8
        text-slate-600
      "
    >
      {item.label.split("\n").map((line) => (
        <div key={line}>{line}</div>
      ))}
    </div>

  </div>
))}

</div>

{/* End Right Card */}

</div>

{/* End Grid */}

</div>

</Container>

</section>
);
}
