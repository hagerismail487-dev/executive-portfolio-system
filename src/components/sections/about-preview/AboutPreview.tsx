import Image from "next/image";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

import data from "./data";

export default function ProfilePreview() {
  return (
    <Section
      id="profile"
      className="
        relative
        overflow-hidden
        !bg-white
        !py-0
      "
    >
      {/* ===================================================== */}
      {/* BACKGROUND */}
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
        {/* Left Glow */}

        <div
          className="
            absolute
            -left-[180px]
            top-[30px]
            h-[430px]
            w-[430px]
            rounded-full
            bg-[#EEF5FF]
            blur-[120px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute
            -right-[180px]
            top-[20px]
            h-[470px]
            w-[470px]
            rounded-full
            bg-[#F2F7FF]
            blur-[130px]
          "
        />

        {/* Large Circle */}

        <div
          className="
            absolute
            right-[25%]
            top-[52%]
            h-[260px]
            w-[260px]
            -translate-y-1/2
            rounded-full
            border
            border-[#DCEBFF]/70
          "
        />

        <div
          className="
            absolute
            right-[27%]
            top-[52%]
            h-[190px]
            w-[190px]
            -translate-y-1/2
            rounded-full
            border
            border-[#E5F0FF]
          "
        />

        {/* Top Right Dots */}

        <div
          className="
            absolute
            right-[6%]
            top-[55px]
            h-[90px]
            w-[90px]
            opacity-50
            [background-image:radial-gradient(#8CB9FF_1.4px,transparent_1.4px)]
            [background-size:12px_12px]
          "
        />

        {/* Middle Dots */}

        <div
          className="
            absolute
            right-[39%]
            top-[52%]
            h-[95px]
            w-[95px]
            opacity-40
            [background-image:radial-gradient(#9FC4FF_1.3px,transparent_1.3px)]
            [background-size:12px_12px]
          "
        />

        {/* Bottom Glow */}

        <div
          className="
            absolute
            -bottom-[160px]
            left-[35%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#F5F9FF]
            blur-[120px]
          "
        />
      </div>

      {/* ===================================================== */}
      {/* MAIN CONTENT */}
      {/* ===================================================== */}

      <div
        className="
          relative
          z-10

          grid
          items-center

          gap-8

          py-10

          sm:py-12

          lg:grid-cols-[0.95fr_1.05fr]
          lg:gap-10
          lg:py-12

          xl:gap-14
        "
      >
        {/* ================================================= */}
        {/* LEFT SIDE */}
        {/* ================================================= */}

        <div
          className="
            relative
            z-10
            max-w-[540px]
          "
        >
          {/* Section Label */}

          <div
            className="
              mb-3
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-[2px]
                w-8
                rounded-full
                bg-[#2563EB]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#2563EB]
              "
            >
              {data.hero.label}
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              max-w-[540px]

              text-[34px]
              font-bold
              leading-[1.04]
              tracking-[-0.045em]

              text-[#102A56]

              sm:text-[38px]
              lg:text-[42px]
              xl:text-[46px]
            "
          >
            {data.hero.headline.map((line, index) => (
              <span
                key={index}
                className="block"
              >
                {line}
              </span>
            ))}
          </h2>

          {/* Accent */}

          <div
            className="
              mt-4
              h-[3px]
              w-[58px]
              rounded-full
              bg-[#2563EB]
            "
          />

          {/* ================================================= */}
          {/* QUOTE */}
          {/* ================================================= */}

          <blockquote
            className="
              mt-5
              max-w-[510px]
              border-l-[3px]
              border-[#2563EB]
              pl-4
            "
          >
            <p
              className="
                text-[17px]
                italic
                leading-[1.55]
                text-[#123A63]

                sm:text-[18px]
                lg:text-[19px]
              "
            >
              &quot;{data.quote.text}&quot;
            </p>

            {/* Signature */}

            <div
              className="
                mt-1
                flex
                w-full
                justify-end
                pr-2
              "
            >
              <Image
                src="/identity/signature.png"
                alt="Hager Ismail Signature"
                width={220}
                height={80}
                className="
                  h-auto
                  w-[195px]
                  object-contain

                  sm:w-[205px]

                  lg:w-[215px]
                "
              />
            </div>
          </blockquote>

          {/* ================================================= */}
          {/* STORY */}
          {/* ================================================= */}

          <div
            className="
              mt-3
              max-w-[520px]
              space-y-2
            "
          >
            {data.hero.story.map((paragraph) => (
              <p
                key={paragraph}
                className="
                  text-[13px]
                  leading-[1.65]
                  text-slate-600

                  sm:text-[14px]
                "
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* ================================================= */}
          {/* CLOSING */}
          {/* ================================================= */}

          <p
            className="
              mt-4
              max-w-[500px]

              text-[17px]
              font-semibold
              leading-[1.5]

              text-[#123A63]

              sm:text-[18px]
            "
          >
            {data.hero.closingLine}
          </p>

          {/* ================================================= */}
          {/* CTA */}
          {/* ================================================= */}

          <div className="mt-4">
            <Button
              href={data.cta.href}
              size="md"
              className="
                min-w-[150px]

                !rounded-lg

                !border-[#123A63]
                !bg-[#123A63]

                !text-white

                [&_*]:!text-white

                hover:!border-[#0F2F52]
                hover:!bg-[#0F2F52]
                hover:!text-white
              "
            >
              <span className="!text-white">
                {data.cta.text}
              </span>

              <span className="!text-white">
                →
              </span>
            </Button>
          </div>
        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE */}
        {/* ================================================= */}

        <div
          className="
            relative
            flex
            flex-col
            items-center
            justify-center

            lg:items-end
          "
        >
          {/* ================================================= */}
          {/* IMAGE AREA */}
          {/* ================================================= */}

          <div
            className="
              relative

              flex
              min-h-[450px]
              w-full
              items-center
              justify-center

              lg:min-h-[490px]
              lg:justify-end
            "
          >
            {/* Image Glow */}

            <div
              className="
                absolute
                right-[12%]
                top-1/2

                h-[400px]
                w-[400px]

                -translate-y-1/2

                rounded-full

                bg-[#2563EB]/[0.07]

                blur-[95px]
              "
            />

            {/* Circular Detail */}

            <div
              aria-hidden="true"
              className="
                absolute

                left-[2%]
                top-[52%]

                h-[230px]
                w-[230px]

                -translate-y-1/2

                rounded-full

                border
                border-[#DDEBFF]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute

                left-[7%]
                top-[52%]

                h-[170px]
                w-[170px]

                -translate-y-1/2

                rounded-full

                border
                border-[#E7F1FF]
              "
            />

            {/* ================================================= */}
            {/* PORTRAIT */}
            {/* ================================================= */}

            <div
              className="
                relative
                z-10

                h-[430px]
                w-[300px]

                overflow-hidden

                rounded-[22px]

                border
                border-[#CFE1FA]

                bg-gradient-to-b
                from-[#F8FBFF]
                to-[#EDF5FF]

                shadow-[0_24px_60px_rgba(18,58,99,0.10)]

                transition-all
                duration-500

                hover:-translate-y-1
                hover:shadow-[0_32px_70px_rgba(18,58,99,0.14)]

                sm:h-[465px]
                sm:w-[325px]

                lg:h-[490px]
                lg:w-[340px]

                xl:h-[505px]
                xl:w-[350px]
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

                  scale-[1.03]

                  transition-transform
                  duration-500

                  hover:scale-[1.015]
                "
              />

              {/* Image Dots */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  right-3
                  top-3

                  h-[75px]
                  w-[75px]

                  opacity-60

                  [background-image:radial-gradient(#9FC4FF_1.3px,transparent_1.3px)]
                  [background-size:11px_11px]
                "
              />
            </div>
          </div>

          {/* ================================================= */}
          {/* HORIZONTAL STATS CARD */}
          {/* ================================================= */}

          <div
            className="
              relative
              z-20

              mt-[-10px]

              w-full
              max-w-[430px]

              rounded-[16px]

           border
border-[#B8D0EE]
shadow-[0_20px_50px_rgba(18,58,99,0.14)]

              bg-white

              px-4
              py-3

              shadow-[0_20px_50px_rgba(18,58,99,0.12)]

              sm:px-5
              sm:py-4

              lg:mr-[-8px]
              lg:max-w-[450px]
            "
          >
            <div
              className="
                grid
                grid-cols-3
              "
            >
              {/* Stat 1 */}

              <div
                className="
                  border-r
                  border-[#E7EEF7]
                  px-3
                  sm:px-4
                "
              >
                <p
                  className="
                    text-[18px]
                    font-bold
                    leading-none
                    text-[#123A63]

                    sm:text-[20px]
                  "
                >
                  4+
                </p>

                <p
                  className="
                    mt-1.5
                    text-[8px]
                    leading-[1.4]
                    text-slate-500

                    sm:text-[9px]
                  "
                >
                  Years Experience
                </p>
              </div>

              {/* Stat 2 */}

              <div
                className="
                  border-r
                  border-[#E7EEF7]
                  px-3
                  sm:px-4
                "
              >
                <p
                  className="
                    text-[18px]
                    font-bold
                    leading-none
                    text-[#123A63]

                    sm:text-[20px]
                  "
                >
                  50+
                </p>

                <p
                  className="
                    mt-1.5
                    text-[8px]
                    leading-[1.4]
                    text-slate-500

                    sm:text-[9px]
                  "
                >
                  Dashboards Delivered
                </p>
              </div>

              {/* Stat 3 */}

              <div
                className="
                  px-3
                  sm:px-4
                "
              >
                <p
                  className="
                    text-[18px]
                    font-bold
                    leading-none
                    text-[#2563EB]

                    sm:text-[20px]
                  "
                >
                  100%
                </p>

                <p
                  className="
                    mt-1.5
                    text-[8px]
                    leading-[1.4]
                    text-slate-500

                    sm:text-[9px]
                  "
                >
                  Business Focused
                </p>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* BOTTOM DOTS */}
          {/* ================================================= */}

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[10px]
              left-[14%]

              h-[80px]
              w-[80px]

              opacity-50

              [background-image:radial-gradient(#9FC4FF_1.3px,transparent_1.3px)]
              [background-size:11px_11px]
            "
          />
        </div>
      </div>
    </Section>
  );
}