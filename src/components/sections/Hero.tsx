import Image from "next/image";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section
      className="
        !bg-[#061A38]
        relative
        overflow-hidden
        !py-0
      "
    >
      {/* ===================================================== */}
      {/* Background System */}
      {/* ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Technical Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.18]
            [background-image:linear-gradient(rgba(80,145,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(80,145,255,0.12)_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute
            -right-[180px]
            -top-[160px]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[#0D6EFF]/20
            blur-[140px]
          "
        />

        {/* Center Glow */}

        <div
          className="
            absolute
            right-[18%]
            top-[20%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#126BFF]/10
            blur-[120px]
          "
        />

        {/* Bottom Left Glow */}

        <div
          className="
            absolute
            -bottom-[220px]
            -left-[160px]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#075BD8]/14
            blur-[130px]
          "
        />

        {/* Technical Dots */}

        <div
          className="
            absolute
            bottom-4
            right-8
            h-[180px]
            w-[180px]
            opacity-30
            [background-image:radial-gradient(#1477ff_1.2px,transparent_1.2px)]
            [background-size:12px_12px]
          "
        />

        {/* Diagonal Lines */}

        <div
          className="
            absolute
            right-[-80px]
            top-[30px]
            h-[500px]
            w-[420px]
            rotate-[24deg]
            border-l
            border-[#2478FF]/15
          "
        />

        <div
          className="
            absolute
            right-[-130px]
            top-[20px]
            h-[560px]
            w-[420px]
            rotate-[24deg]
            border-l
            border-[#2478FF]/10
          "
        />

        {/* Bottom Line */}

        <div
          className="
            absolute
            bottom-[80px]
            left-0
            h-px
            w-[62%]
            bg-gradient-to-r
            from-transparent
            via-[#2275FF]/30
            to-transparent
          "
        />
      </div>

      {/* ===================================================== */}
      {/* Hero Content */}
      {/* ===================================================== */}

      <div
        className="
          relative
          z-10
          grid
          items-center
          gap-10

          pt-16
          pb-12

          sm:pt-18
          sm:pb-14

          lg:grid-cols-[0.82fr_1.18fr]
          lg:gap-12
          lg:pt-18
          lg:pb-16

          xl:gap-16
          xl:pt-20
          xl:pb-18
        "
      >
        {/* ================================================= */}
        {/* LEFT SIDE */}
        {/* ================================================= */}

        <div
          className="
            relative
            z-10
            min-w-0
            w-full
            max-w-[500px]
          "
        >
          {/* Badge */}

          <div className="mt-2 mb-5 lg:mt-0">
            <Badge className="!w-full !max-w-full !whitespace-normal break-words text-center leading-5">
              Senior Data Analyst | MIS & Business Intelligence Specialist
            </Badge>
          </div>

          {/* Heading */}

          <h1
            className="
              !text-white
              min-w-0
            w-full
            max-w-[500px]
              text-[40px]
              font-bold
              leading-[1.02]
              tracking-[-0.045em]

              sm:text-[46px]
              md:text-[52px]
              lg:text-[50px]
              xl:text-[58px]
            "
          >
            <span className="block !text-white">
              Transforming
            </span>

            <span className="block !text-white">
              Business Data
            </span>

            <span className="block !text-white">
              into Executive
            </span>

            <span className="block !text-[#2F80FF]">
              Decisions.
            </span>
          </h1>

          {/* Accent */}

          <div
            className="
              mt-5
              h-[3px]
              w-[70px]
              rounded-full
              bg-[#2F80FF]
              shadow-[0_0_14px_rgba(47,128,255,0.45)]
            "
          />

          {/* Description */}

          <p
            className="
              !text-[#C8D8EE]
              mt-5
              max-w-[470px]
              text-[15px]
              leading-7
              sm:text-[16px]
            "
          >
            I design business systems and reporting solutions that turn
            complex data into clarity, drive performance, and support
            confident decision-making.
          </p>

          {/* ================================================= */}
          {/* CTA */}
          {/* ================================================= */}

          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-3
            "
          >
            {/* Explore Profile */}

            <Button
              href="/profile"
              size="lg"
              className="
                min-w-[175px]
                !border-[#2F80FF]
                !bg-[#1976FF]
                !text-white
                shadow-[0_8px_24px_rgba(25,118,255,0.25)]
                hover:!bg-[#2681FF]
              "
            >
              Explore My Profile →
            </Button>

            {/* Download CV */}

            <Button
              href="/identity/Hager-Ismail-CV.pdf"
              download="Hager-Ismail-CV.pdf"
              size="lg"
              className="
                min-w-[175px]
                !border-[#7194C1]
                !bg-transparent
                !text-white
                hover:!border-[#9DBCE0]
                hover:!bg-white/10
                hover:!text-white
              "
            >
              Download Resume ↓
            </Button>
          </div>

          {/* ================================================= */}
          {/* Value Pillars */}
          {/* ================================================= */}

          <div
            className="
              mt-8
              grid
              min-w-0
            w-full
            max-w-[500px]
              grid-cols-3
              border-t
              border-[#2D5A91]/60
              pt-5
            "
          >
            {/* Business Focused */}

            <div
              className="
                border-r
                border-[#2D5A91]/60
                pr-4
              "
            >
              <div
                className="
                  mb-3
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#2F80FF]/50
                  bg-[#0D2B52]
                  text-[12px]
                  text-[#4D9BFF]
                "
              >
                ◉
              </div>

              <p
                className="
                  !text-white
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.06em]
                "
              >
                Business Focused
              </p>

              <p
                className="
                  !text-[#B7CBE4]
                  mt-2
                  max-w-[125px]
                  text-[11px]
                  leading-[1.55]
                "
              >
                Solutions with real business impact.
              </p>
            </div>

            {/* Data to Decisions */}

            <div
              className="
                border-r
                border-[#2D5A91]/60
                px-4
              "
            >
              <div
                className="
                  mb-3
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#2F80FF]/50
                  bg-[#0D2B52]
                  text-[12px]
                  text-[#4D9BFF]
                "
              >
                ↔
              </div>

              <p
                className="
                  !text-white
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.06em]
                "
              >
                Data to Decisions
              </p>

              <p
                className="
                  !text-[#B7CBE4]
                  mt-2
                  max-w-[125px]
                  text-[11px]
                  leading-[1.55]
                "
              >
                Turning complexity into clarity.
              </p>
            </div>

            {/* Strategic Partner */}

            <div className="sm:pl-4">
              <div
                className="
                  mb-3
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#2F80FF]/50
                  bg-[#0D2B52]
                  text-[12px]
                  text-[#4D9BFF]
                "
              >
                ◆
              </div>

              <p
                className="
                  !text-white
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.06em]
                "
              >
                Strategic Partner
              </p>

              <p
                className="
                  !text-[#B7CBE4]
                  mt-2
                  max-w-[125px]
                  text-[11px]
                  leading-[1.55]
                "
              >
                Aligning data with goals and priorities.
              </p>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE */}
        {/* ================================================= */}

        <div
          className="
            relative
            flex
            min-w-0
            items-center
            justify-center
            lg:justify-end
          "
        >
          {/* Dashboard Glow */}

          <div
            className="
              absolute
              right-[4%]
              top-1/2
              h-[430px]
              w-[430px]
              -translate-y-1/2
              rounded-full
              bg-[#1477FF]/16
              blur-[110px]
            "
          />

          {/* Dashboard Frame */}

          <div
            className="
              relative
              w-full
              max-w-[610px]
              overflow-hidden
              rounded-[20px]
              border
              border-[#397FC7]
              bg-[#071D3A]
              shadow-[0_30px_80px_rgba(0,20,55,0.45)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-[#4C9BFF]
              hover:shadow-[0_36px_90px_rgba(0,40,100,0.55)]
            "
          >
            {/* Top Glow */}

            <div
              className="
                absolute
                left-1/2
                top-0
                z-20
                h-px
                w-[55%]
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#2F8BFF]
                to-transparent
                shadow-[0_0_14px_rgba(47,139,255,0.8)]
              "
            />

            {/* Dashboard Image */}

            <div
              className="
                relative
                min-h-[300px]
                overflow-hidden
                bg-[#071C36]
                sm:min-h-[290px]
              "
            >
              <Image
                src="/projects/executive-sales-performance-intelligence/02-executive-dashboard.PNG"
                alt="Executive Sales Dashboard"
                width={900}
                height={560}
                priority
                className="
                  block
                  h-full
                  min-h-[260px] w-full
                  object-contain object-center p-5
                  sm:min-h-[290px]
                "
              />
            </div>

            {/* Dashboard Caption */}

            <div
              className="
                border-t
                border-[#214D7D]
                bg-[#071D3A]
                px-5
                py-4
                sm:px-6
                sm:py-5
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                "
              >
                <div>
                  <span
                    className="
                      !text-[#3E91FF]
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                    "
                  >
                    Featured Dashboard
                  </span>

                  <h2
                    className="
                      !text-white
                      mt-1.5
                      text-[18px]
                      font-bold
                      tracking-[-0.02em]
                      sm:text-[20px]
                    "
                  >
                    Executive Performance Dashboard
                  </h2>

                  <p
                    className="
                      !text-[#9DB6D5]
                      mt-1.5
                      max-w-[430px]
                      text-[11px]
                      leading-5
                      sm:text-[12px]
                    "
                  >
                    Interactive reporting designed to turn operational data
                    into strategic business decisions.
                  </p>
                </div>

                <a
                  href="#case-studies"
                  className="
                    !text-[#4D9BFF]
                    shrink-0
                    text-[11px]
                    font-semibold
                    transition-colors
                    hover:!text-white
                  "
                >
                  View Dashboard&nbsp; →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}












