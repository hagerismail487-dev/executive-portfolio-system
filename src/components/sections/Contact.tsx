import Link from "next/link";
import Container from "@/components/ui/Container";
import { Mail, CalendarDays } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background */}

      <Container>

        <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(18,58,99,0.10)]">
            {/* Decorative Background */}

<div className="absolute inset-0 pointer-events-none overflow-hidden">
{/* Decorative Elements */}

{/* Top Left Dots */}
<div className="absolute left-8 top-8 opacity-20">
  <div className="grid grid-cols-7 gap-4">
    {Array.from({ length: 49 }).map((_, i) => (
      <div
        key={i}
        className="h-1.5 w-1.5 rounded-full bg-[#C8DBFF]"
      />
    ))}
  </div>
</div>

{/* Top Right Glow */}
<div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#EEF5FF] blur-3xl opacity-35" />

{/* Bottom Left Glow */}
<div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#F4F8FF] blur-3xl opacity-80" />
{/* Bottom Wave */}

<svg className="absolute bottom-0 left-0 w-full
" viewBox="0 0 1440 220" fill="none" 
xmlns="http://www.w3.org/2000/svg" > 
<path d="M0 120C220 210 420 210 720 150C980 100 1180 130 1440 60V220H0Z" fill="#F7FAFF" />
 <path d="M0 145C240 220 470 200 760 160C1040 120 1220 145 1440 100" stroke="#E3EEFF" strokeWidth="2" /> 
 <path d="M0 170C260 230 520 210 820 180C1080 150 1260 170 1440 140" stroke="#EDF4FF" strokeWidth="2" /> 
</svg>
<div className="relative z-10">
    
</div>
</div>

<div className="relative z-10 px-10 py-16 lg:px-20 lg:py-20">
            {/* Section Title */}

            <div className="flex items-center justify-center gap-8">

              <div className="h-px w-20 bg-[#123A63]" />

              <span className="text-sm font-semibold uppercase tracking-[0.45em] text-[#123A63]">
                Contact
              </span>

              <div className="h-px w-20 bg-[#123A63]" />

            </div>

            {/* Main Layout */}

            <div className="mt-16 grid items-center gap-16 lg:grid-cols-[1.45fr_1fr]">

              {/* ================================= */}
              {/* Left Side */}
              {/* ================================= */}

              <div>

                <h2 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.05em] text-[#102A56] lg:text-[64px]">

                  Let's Build Something
                  <br />
                  Great Together

                </h2>

                <div className="mt-8 h-1 w-24 rounded-full bg-[#2563EB]" />

                <p className="mt-10 max-w-xl text-xl leading-10 text-slate-600">

                  Have a project in mind?

                  <br />

                  Let's discuss how executive reporting,
                  dashboards, business intelligence,
                  and performance analytics can help
                  your organization make better
                  business decisions.

                </p>

                {/* Buttons */}

                <div className="mt-14 flex flex-wrap gap-5">

                  <a
                    href="mailto:hagerismail487@gmail.com"
                    className="inline-flex items-center gap-3 rounded-xl bg-[#123A63] px-10 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F274A]"
                  >
                    <Mail className="h-5 w-5" />

                    Email Me
                  </a>

                  <a
                    href="https://www.linkedin.com/in/hagerismail1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl border-2 border-[#123A63] px-10 py-3.5 text-base font-semibold text-[#123A63] transition-all duration-300 hover:bg-[#123A63] hover:text-white"
                  >
                    <CalendarDays className="h-5 w-5" />

                    Book a Consultation
                  </a>

                </div>

              </div>

              {/* ================================= */}
              {/* Right Side */}
              {/* ================================= */}
{/* Right Side */}
{/* ================================= */}

<div className="relative">

  {/* Vertical Divider */}

  <div className="absolute left-0 top-4 h-[74%]
top-12] w-px bg-slate-200" />

  <div className="pl-10 lg:pl-16">

    <h3 className="text-[42px] font-bold tracking-[-0.03em] text-[#102A56]">
  Contact
</h3>

<div className="mt-4 h-[3px] w-20 rounded-full bg-[#2563EB]" />

<div className="mt-10 space-y-8">

      {/* Email */}

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
className="mt-1 block text-lg font-normal text-[#102A56]"          >
            hagerismail487@gmail.com
          </a>

        </div>

      </div>
<div className="mt-2 mb-1 ml-[84px] border-b border-[#E5EDF8]/70" />
      {/* LinkedIn */}

      <div className="flex items-center gap-6">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF3FF]">

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-8 w-8 text-[#0A66C2]"
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
            className="mt-2 block text-lg font-medium text-[#0A66C2] hover:underline"
          >
            linkedin.com/in/hagerismail1
          </a>

        </div>

      </div>
<div className="mt-2 mb-1 ml-[84px] border-b border-slate-200/70" />
      {/* Location */}

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

          <p className="mt-2 text-lg font-medium text-[#102A56]">
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
