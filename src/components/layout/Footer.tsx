import Link from "next/link";
import Container from "@/components/ui/Container";

import {
  LayoutDashboard,
  FileText,
  LineChart,
  BarChart3,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-[#0F274A] text-white">

      <Container>

        <div className="py-16">

          {/* ================================================= */}
          {/* CTA */}
          {/* ================================================= */}

          <div className="grid gap-16 border-b border-white/10 pb-8 lg:grid-cols-[1.7fr_1fr]">

            {/* Left */}

            <div>

              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-100">
                LET'S WORK TOGETHER
              </span>

              <h2 className="mt-8 max-w-2xl text-5xl font-bold leading-tight tracking-[-0.04em]">
                Let's Build Smarter
                <br />
                Business Decisions.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-blue-100">
                Transform scattered business data into executive
                dashboards, reporting systems, and strategic insights
                that help organizations make faster, smarter,
                and more confident decisions.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 font-semibold text-[#123A63] transition hover:bg-slate-100"
                >
                  Schedule Consultation
                </Link>

                <Link
                  href="/#projects"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  View Case Studies
                </Link>

              </div>

            </div>

            {/* Right */}

            <div className="space-y-10">

              {/* SERVICES */}

              <div>

                <div className="flex items-center gap-3">

                  <div className="h-px w-16 bg-white/10" />

                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
                    SERVICES
                  </span>

                  <div className="h-px w-16 bg-white/10" />

                </div>

                <div className="mt-6 space-y-4">

                  <div className="flex items-center gap-3">

                    <LayoutDashboard className="h-5 w-5 text-blue-300" />

                    <span className="text-[15px] text-slate-200">
                      Executive Dashboards
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <FileText className="h-5 w-5 text-blue-300" />

                    <span className="text-[15px] text-slate-200">
                      MIS Reporting Systems
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <LineChart className="h-5 w-5 text-blue-300" />

                    <span className="text-[15px] text-slate-200">
                      Performance Analytics
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <BarChart3 className="h-5 w-5 text-blue-300" />

                    <span className="text-[15px] text-slate-200">
                      Business Intelligence
                    </span>

                  </div>

                </div>

              </div>

              {/* CONNECT */}

              <div>

                <div className="flex items-center gap-3">

                  <div className="h-px w-16 bg-white/10" />

                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
                    CONNECT
                  </span>

                  <div className="h-px w-16 bg-white/10" />

                </div>

                <div className="mt-6 space-y-4">

                  <div className="flex items-center gap-3">

                    <Mail className="h-5 w-5 text-blue-300" />

                    <a
                      href="mailto:hagerismail487@gmail.com"
                        className="transition hover:text-white"
                        >
                          hagerismail487@gmail.com
                        </a>

                  </div>

                  <div className="flex items-center gap-4">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                         fill="currentColor"
                         className="h-5 w-5 text-blue-300"
                        >
                          <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5s1.98.896 1.98 2zm.02 3.5H1v16h4V7zm6.5 0h-4v16h4v-8.4c0-4.67 6-5.05 6 0V23h4v-9.8c0-7.64-8.72-7.36-10-3.6V7z"/>
                        </svg>
                    <a
                      href="https://www.linkedin.com/in/hagerismail1/"
                       target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-white"
                     >
                        LinkedIn Profile
                    </a>




                  </div>

                  <div className="flex items-center gap-3">

                    <MapPin className="h-5 w-5 text-blue-300" />

                    <span>Egypt</span>

                  </div>

                </div>

              </div>

            </div>

          </div>
          {/* ================================================= */}
          {/* Brand */}
          {/* ================================================= */}

          <div className="pt-6 pb-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <h3 className="text-4xl font-bold tracking-[-0.03em]">
                        Hager Ismail
                     </h3>
                    <p className="text-sm text-slate-400">
                        © {new Date().getFullYear()} Hager Ismail. All rights reserved.
                      </p>

            </div>
              <p className="mt-3 text-lg text-blue-200">
                    Where Business Meets Intelligence.
                   </p>

          </div>

        </div>

      </Container>

    </footer>
  );
}


