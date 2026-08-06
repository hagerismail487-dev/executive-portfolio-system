import {
  CalendarDays,
  Mail,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FBFCFE] py-20 lg:py-24"
    >
      <Container>

        {/* ================================================= */}
        {/* Executive Contact Card */}
        {/* ================================================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-[#E8EEF7]
            bg-white
            shadow-[0_40px_100px_rgba(18,58,99,0.10)]
          "
        >

          {/* ============================================== */}
          {/* Decorative Background */}
          {/* ============================================== */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            {/* Top Left Dot Pattern */}

            <div className="absolute left-8 top-8 opacity-20">

              <div className="grid grid-cols-7 gap-4">

                {Array.from({ length: 49 }).map((_, index) => (

                  <div
                    key={index}
                    className="h-1.5 w-1.5 rounded-full bg-[#C8DBFF]"
                  />

                ))}

              </div>

            </div>

            {/* Top Glow */}

            <div
              className="
                absolute
                -right-24
                -top-24
                h-[420px]
                w-[420px]
                rounded-full
                bg-[#EEF5FF]
                opacity-60
                blur-3xl
              "
            />

            {/* Bottom Glow */}

            <div
              className="
                absolute
                -bottom-20
                -left-20
                h-80
                w-80
                rounded-full
                bg-[#F4F8FF]
                opacity-80
                blur-3xl
              "
            />

            {/* Bottom Waves */}

            <svg
              className="absolute bottom-0 left-0 w-full opacity-80"
              viewBox="0 0 1440 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <path
                d="M0 120C220 210 420 210 720 150C980 100 1180 130 1440 60V220H0Z"
                fill="#F7FAFF"
              />

              <path
                d="M0 145C240 220 470 200 760 160C1040 120 1220 145 1440 100"
                stroke="#E3EEFF"
                strokeWidth="2"
              />

              <path
                d="M0 170C260 230 520 210 820 180C1080 150 1260 170 1440 140"
                stroke="#EDF4FF"
                strokeWidth="2"
              />

            </svg>

          </div>

          {/* ============================================== */}
          {/* Content */}
          {/* ============================================== */}

          <div className="relative z-10 px-8 py-14 sm:px-10 lg:px-16 lg:py-18">

            {/* Section Header */}

            <div className="flex items-center justify-center gap-8">

              <div className="h-px w-20 bg-[#123A63]" />

              <span className="text-sm font-semibold uppercase tracking-[0.45em] text-[#123A63]">
                Contact
              </span>

              <div className="h-px w-20 bg-[#123A63]" />

            </div>

            {/* Main Grid */}

            <div className="mt-16 grid items-center gap-20 xl:grid-cols-[1.45fr_1fr]">

              {/* Left Side */}
                            <div className="max-w-[640px]">

                {/* Heading */}

                <h2
                  className="
                    text-[42px]
                    font-bold
                    leading-[1.02]
                    tracking-[-0.05em]
                    text-[#102A56]
                    lg:text-[64px]
                  "
                >
                  Let's Build Something

                  <br />

                  Great Together
                </h2>

                {/* Accent Line */}

                <div className="mt-7 h-1 w-24 rounded-full bg-[#2563EB]" />

                {/* Description */}

                <p
                  className="
                    mt-10
                    max-w-[560px]
                    text-[20px]
                    leading-[1.9]
                    text-slate-600
                  "
                >
                  Have a project in mind?

                  <br />

                  Let's discuss how executive reporting,
                  business intelligence,
                  performance analytics,
                  and dashboards can help your
                  organization make faster,
                  smarter,
                  and more confident business decisions.
                </p>

                {/* Actions */}

                <div className="mt-14 flex flex-wrap gap-5">

                  <Button
                    href="mailto:hagerismail487@gmail.com"
                    external
                    size="md"
                    iconLeft={<Mail className="h-5 w-5" />}
                  >
                    Email Me
                  </Button>

                  <Button
                    href="https://www.linkedin.com/in/hagerismail1"
                    external
                    variant="secondary"
                    size="lg"
                    iconLeft={<CalendarDays className="h-5 w-5" />}
                  >
                    Book a Consultation
                  </Button>

                </div>

              </div>

              {/* ============================================== */}
              {/* Right Side */}
              {/* ============================================== */}
                            <div className="relative">

                {/* Vertical Divider */}

                <div className="absolute left-0 top-8 hidden h-[78%] w-px bg-[#E5EDF8] xl:block" />

                <div className="xl:pl-16">

                  {/* Title */}

                  <h3 className="text-[40px] font-bold tracking-[-0.03em] text-[#102A56]">
                    Contact
                  </h3>

                  <div className="mt-4 h-[3px] w-20 rounded-full bg-[#2563EB]" />

                  {/* Contact List */}

                  <div className="mt-12 flex flex-col gap-9">

                    {/* ================= Email ================= */}

                    <div className="flex items-center gap-6">

                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF3FF]">

                        <Mail className="h-7 w-7 text-[#123A63]" />

                      </div>

                      <div>

                        <p className="text-lg font-bold text-[#102A56]">
                          Email
                        </p>

                        <a
                          href="mailto:hagerismail487@gmail.com"
                          className="mt-1 block text-lg text-[#102A56] transition-colors duration-300 hover:text-[#2563EB]"
                        >
                          hagerismail487@gmail.com
                        </a>

                      </div>

                    </div>

                    <div className="ml-[84px] border-b border-slate-200/70" />

                    {/* ================= LinkedIn ================= */}

                    <div className="flex items-center gap-6">

                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF3FF]">

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-7 w-7 text-[#0A66C2]"
                        >
                          <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5s1.98.896 1.98 2zm.02 3.5H1v16h4V7zm6.5 0h-4v16h4v-8.4c0-4.67 6-5.05 6 0V23h4v-9.8c0-7.64-8.72-7.36-10-3.6V7z"/>
                        </svg>

                      </div>

                      <div>

                        <p className="text-lg font-bold text-[#102A56]">
                          LinkedIn
                        </p>

                        <a
                          href="https://www.linkedin.com/in/hagerismail1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 block text-lg font-medium text-[#0A66C2] transition-colors duration-300 hover:underline"
                        >
                          linkedin.com/in/hagerismail1
                        </a>

                      </div>

                    </div>

                    <div className="ml-[84px] border-b border-slate-200/70" />

                    {/* ================= Location ================= */}

                    <div className="flex items-center gap-6">

                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF3FF]">

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          className="h-7 w-7 text-[#123A63]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657A8 8 0 1117.657 16.657z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>

                      </div>

                      <div>

                        <p className="text-lg font-bold text-[#102A56]">
                          Location
                        </p>

                        <p className="mt-1 text-lg text-[#102A56]">
                          Cairo, Egypt
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
                          </div>

          </div>

        </div>

      </Container>

    </section>
  );
}