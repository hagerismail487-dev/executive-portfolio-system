export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="
        relative
        mt-3
        w-full
        overflow-hidden
        rounded-[7px]
        bg-[#0a2345]
        px-6
        py-12
        sm:px-10
        lg:mt-10
        lg:px-[72px]
        lg:py-[54px]
      "
    >
      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-25
          [background-image:linear-gradient(rgba(115,174,255,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(115,174,255,0.11)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Blue glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-1/2
          h-[300px]
          w-[300px]
          -translate-y-1/2
          rounded-full
          bg-[#2684ff]/[0.10]
          blur-[85px]
        "
      />

      {/* Decorative lines */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-full
          w-[32%]
          opacity-30
          [background-image:linear-gradient(135deg,transparent_49.5%,rgba(75,151,255,0.35)_50%,transparent_50.5%)]
          [background-size:55px_55px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-[1180px]
          flex-col
          items-center
          text-center
        "
      >
        {/* Eyebrow */}
        <div className="mb-5 flex items-center gap-3">
          <span
            aria-hidden="true"
            className="h-[2px] w-[24px] bg-[#4da0ff]"
          />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              !text-[#72b5ff]
            "
          >
            Let&apos;s Build What Comes Next
          </span>

          <span
            aria-hidden="true"
            className="h-[2px] w-[24px] bg-[#4da0ff]"
          />
        </div>

        {/* Headline */}
        <h2
          id="final-cta-title"
          className="
            max-w-[760px]
            text-[28px]
            font-bold
            leading-[1.15]
            tracking-[-0.035em]
            !text-white
            sm:text-[34px]
            lg:text-[38px]
          "
        >
          Ready to Turn Business Data
          <br className="hidden sm:block" />
          {" "}Into{" "}
          <span className="!text-[#4da0ff]">
            Strategic Advantage?
          </span>
        </h2>

        {/* Description */}
        <p
          className="
            mt-5
            max-w-[650px]
            text-[12px]
            font-medium
            leading-[1.7]
            !text-[#e5eefb]
            sm:text-[13px]
          "
        >
          Let&apos;s build a structured reporting environment
          that improves visibility, strengthens performance,
          and supports confident executive decision-making.
        </p>

        {/* CTA Buttons */}
        <div
          className="
            mt-7
            flex
            flex-row
            items-center
            justify-center
            gap-3
          "
        >
          {/* Let's Talk */}
          <a
            href="https://www.linkedin.com/in/hagerismail1/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              min-h-[42px]
              items-center
              justify-center
              rounded-[5px]
              border
              border-white
              bg-white
              px-7
              text-[10px]
              font-bold
              uppercase
              tracking-[0.08em]
              !text-[#0a2345]
              shadow-[0_8px_25px_rgba(0,0,0,0.12)]
              transition-all
              duration-200
              hover:bg-[#f3f7fc]
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)]
              focus:outline-none
              focus:ring-2
              focus:ring-[#70b5ff]
              focus:ring-offset-2
              focus:ring-offset-[#0a2345]
            "
          >
            Let&apos;s Talk
          </a>

          {/* Download CV */}
          <a
            href="/identity/Hager-Ismail-CV.pdf"
            download="Hager-Ismail-CV.pdf"
            className="
              inline-flex
              min-h-[42px]
              items-center
              justify-center
              rounded-[5px]
              border
              border-white
              bg-white
              px-7
              text-[10px]
              font-bold
              uppercase
              tracking-[0.08em]
              !text-[#0a2345]
              shadow-[0_8px_25px_rgba(0,0,0,0.12)]
              transition-all
              duration-200
              hover:bg-[#f3f7fc]
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)]
              focus:outline-none
              focus:ring-2
              focus:ring-[#70b5ff]
              focus:ring-offset-2
              focus:ring-offset-[#0a2345]
            "
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}



