import {
  Mail,
  MapPin,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Contact() {
  return (
    <Section
      id="contact"
      className="
        !bg-[#061C3A]

        relative
        overflow-hidden

        py-16
        lg:py-20
      "
    >
      {/* ========================================= */}
      {/* Background */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Grid */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.18]

            bg-[linear-gradient(to_right,#1E4B80_1px,transparent_1px),linear-gradient(to_bottom,#1E4B80_1px,transparent_1px)]

            bg-[size:48px_48px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute
            -right-24
            -top-24

            h-[380px]
            w-[380px]

            rounded-full

            bg-[#2563EB]

            opacity-20

            blur-[120px]
          "
        />

        {/* Left Glow */}

        <div
          className="
            absolute
            -left-32
            -bottom-32

            h-[420px]
            w-[420px]

            rounded-full

            bg-[#0B5ED7]

            opacity-20

            blur-[130px]
          "
        />

        {/* Right Dots */}

        <div
          className="
            absolute
            right-8
            top-10

            opacity-30
          "
        >
          <div className="grid grid-cols-7 gap-3">
            {Array.from({ length: 49 }).map((_, index) => (
              <div
                key={index}
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-[#3B82F6]
                "
              />
            ))}
          </div>
        </div>

        {/* Left Circles */}

        <div
          className="
            absolute
            -left-[180px]
            bottom-[-180px]

            h-[440px]
            w-[440px]

            rounded-full

            border
            border-[#1D4F85]/40
          "
        />

        <div
          className="
            absolute
            -left-[130px]
            bottom-[-130px]

            h-[340px]
            w-[340px]

            rounded-full

            border
            border-[#1D4F85]/30
          "
        />

      </div>

      {/* ========================================= */}
      {/* Content */}
      {/* ========================================= */}

      <Container>

        <div className="relative z-10">

          {/* ========================================= */}
          {/* Section Header */}
          {/* ========================================= */}

          <div className="flex flex-col items-center text-center">

            <div
              className="
                flex
                items-center
                gap-3

                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]

                text-[#5FA0FF]
              "
            >
              <span
                className="
                  h-px
                  w-10
                  bg-[#2563EB]
                "
              />

              <span>
                Let's Connect
              </span>

              <span
                className="
                  h-px
                  w-10
                  bg-[#2563EB]
                "
              />
            </div>

          </div>

          {/* ========================================= */}
          {/* Main Content */}
          {/* ========================================= */}

          <div
            className="
              mt-10

              grid
              items-center

              gap-12

              lg:grid-cols-[1.35fr_0.9fr]
              lg:gap-16
            "
          >

            {/* ========================================= */}
            {/* Left */}
            {/* ========================================= */}

            <div className="max-w-[650px]">

              <h2
                className="
                  text-[36px]
                  font-bold
                  leading-[1.08]
                  tracking-[-0.04em]

                  !text-white

                  sm:text-[42px]
                  lg:text-[48px]
                "
              >
                Let's Build Something


                <br />

                
                <span className="!text-[#3B82F6]">
                  Great Together
                </span>
              </h2>

              {/* Accent */}

              <div
                className="
                  mt-5

                  h-[3px]
                  w-20

                  rounded-full

                  bg-[#2563EB]
                "
              />

              {/* Description */}

             <p
  className="
    mt-5
    max-w-[600px]

    text-[15px]
    leading-7

    !text-[#C9D9EC]

    sm:text-[16px]
  "
>
  <span className="block">
    Have a project in mind?
  </span>

  <span className="block">
    Let's discuss how executive reporting, business intelligence,
    performance analytics, and dashboards can help your organization
    make faster, smarter, and more confident business decisions.
  </span>
</p>
              {/* ========================================= */}
              {/* Actions */}
              {/* ========================================= */}

              <div className="mt-7 flex flex-wrap gap-3">

                {/* Let's Talk */}

<a
  href="https://www.linkedin.com/in/hagerismail1"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex
    items-center
    justify-center
    gap-2

    min-w-[125px]

    rounded-lg

    border
    border-[#2563EB]

    bg-[#2563EB]

    px-6
    py-3.5

    text-[15px]
    font-semibold

    !text-white

    transition-all
    duration-300

    hover:-translate-y-1

    hover:border-[#3B82F6]
    hover:bg-[#3B82F6]
    hover:!text-white

    active:translate-y-0

    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#3B82F6]
    focus-visible:ring-offset-2
    focus-visible:ring-offset-[#061C3A]
  "
>
  Let's Talk

  <span>
    →
  </span>
</a>

                {/* Download CV */}

               <a
  href="/identity/Hager-Ismail-CV.pdf"
  download="Hager-Ismail-CV.pdf"
  className="
    inline-flex
    items-center
    justify-center
    gap-2

    min-w-[145px]

    rounded-lg

    border
    border-[#6F9BCB]

    bg-transparent

    px-6
    py-3.5

    text-[15px]
    font-semibold

    !text-white

    transition-all
    duration-300

    hover:-translate-y-1

    hover:border-[#8FB3D7]
    hover:bg-[#0D3768]
    hover:!text-white

    active:translate-y-0
    active:bg-[#123A63]
    active:!text-white

    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#3B82F6]
    focus-visible:ring-offset-2
    focus-visible:ring-offset-[#061C3A]
  "
>
  Download CV

  <span>
    ↓
  </span>
</a>

              </div>

            </div>

            {/* ========================================= */}
            {/* Right Contact Card */}
            {/* ========================================= */}

            <div
              className="
                relative

                overflow-hidden

                rounded-[22px]

                border
                border-[#24558A]

                bg-[#09284E]

                p-6

                shadow-[0_20px_50px_rgba(0,0,0,0.15)]

                sm:p-7
              "
            >

              {/* Top Accent */}

              <div
                className="
                  absolute
                  left-0
                  top-0

                  h-[2px]
                  w-20

                  bg-[#2563EB]
                "
              />

              {/* ========================================= */}
              {/* Email */}
              {/* ========================================= */}

              <div className="flex items-center gap-4">

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
                    border-[#2C6DB0]

                    bg-[#0D3768]

                    text-[#5FA0FF]
                  "
                >
                  <Mail className="h-5 w-5" />
                </div>

                <div>

                  <p
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]

                      !text-[#8FB3D7]
                    "
                  >
                    Email
                  </p>

                  <a
                    href="mailto:hagerismail487@gmail.com"
                    className="
                      mt-1
                      block

                      text-[14px]
                      font-medium

                      !text-white

                      transition-colors
                      duration-300

                      hover:text-[#5FA0FF]
                    "
                  >
                    hagerismail487@gmail.com
                  </a>

                </div>

              </div>

              {/* Divider */}

              <div
                className="
                  my-5
                  ml-[64px]

                  h-px

                  bg-[#1E456F]
                "
              />

              {/* ========================================= */}
              {/* LinkedIn */}
              {/* ========================================= */}

              <div className="flex items-center gap-4">

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
                    border-[#2C6DB0]

                    bg-[#0D3768]

                    text-[#5FA0FF]
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5s1.98.896 1.98 2zm.02 3.5H1v16h4V7zm6.5 0h-4v16h4v-8.4c0-4.67 6-5.05 6 0V23h4v-9.8c0-7.64-8.72-7.36-10-3.6V7z" />
                  </svg>
                </div>

                <div>

                  <p
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]

                      !text-[#8FB3D7]
                    "
                  >
                    LinkedIn
                  </p>

                  <a
                    href="https://www.linkedin.com/in/hagerismail1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-1
                      block

                      text-[14px]
                      font-medium

                      !text-[#5FA0FF]

                      transition-colors
                      duration-300

                      hover:!text-white
                    "
                  >
                    linkedin.com/in/hagerismail1
                  </a>

                </div>

              </div>

              {/* Divider */}

              <div
                className="
                  my-5
                  ml-[64px]

                  h-px

                  bg-[#1E456F]
                "
              />

              {/* ========================================= */}
              {/* Location */}
              {/* ========================================= */}

              <div className="flex items-center gap-4">

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
                    border-[#2C6DB0]

                    bg-[#0D3768]

                    text-[#5FA0FF]
                  "
                >
                  <MapPin className="h-5 w-5" />
                </div>

                <div>

                  <p
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]

                      !text-[#8FB3D7]
                    "
                  >
                    Location
                  </p>

                  <p
                    className="
                      mt-1

                      text-[14px]
                      font-medium

                      !text-white
                    "
                  >
                    Cairo, Egypt
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </Section>
  );
}