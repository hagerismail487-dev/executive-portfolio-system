"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";

const dashboards = [
  {
    number: "01",
    title: "Landing Page",
    image:
      "/projects/hr-decision-support-system/01-landing-page.png",
  },
  {
    number: "02",
    title: "Executive Insights",
    image:
      "/projects/hr-decision-support-system/02-executive-insights.png",
  },
  {
    number: "03",
    title: "Workforce Overview",
    image:
      "/projects/hr-decision-support-system/03-workforce-overview.png",
  },
  {
    number: "04",
    title: "Talent Acquisition",
    image:
      "/projects/hr-decision-support-system/04-talent-acquisition.png",
  },
  {
    number: "05",
    title: "Learning & Engagement",
    image:
      "/projects/hr-decision-support-system/05-learning-engagement.png",
  },
  {
    number: "06",
    title: "HR Compliance",
    image:
      "/projects/hr-decision-support-system/06-hr-compliance.png",
  },
  {
    number: "07",
    title: "Data Model",
    image:
      "/projects/hr-decision-support-system/07-data-model.png",
  },
];

export default function HRDecisionSupportSystemPresentation() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slide = Number(params.get("slide"));

    if (
      Number.isInteger(slide) &&
      slide >= 0 &&
      slide < dashboards.length
    ) {
      setActiveSlide(slide);
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setActiveSlide((current) =>
          current === dashboards.length - 1 ? 0 : current + 1
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveSlide((current) =>
          current === 0 ? dashboards.length - 1 : current - 1
        );
      }

      if (event.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? dashboards.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === dashboards.length - 1 ? 0 : current + 1
    );
  };

  const dashboard = dashboards[activeSlide];

  return (
    <main className="min-h-screen bg-[#080b0a] text-white">
      <div className="flex min-h-screen flex-col">

        <header className="flex items-center justify-between border-b border-[#2c302b] bg-[#0d1110] px-4 py-3 sm:px-6">
          <Link
            href="/case-studies/hr-decision-support-system"
            className="inline-flex items-center gap-2 text-[11px] text-[#b9aa79] transition hover:text-white"
          >
            <ArrowLeft size={14} />
            Back to Case Study
          </Link>

          <div className="text-center">
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#b9aa79]">
              HR Decision Support System
            </p>

            <p className="mt-1 text-[10px] text-[#70776f]">
              Dashboard Presentation
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsFullscreen(true)}
            className="inline-flex items-center gap-2 rounded-md border border-[#383d36] bg-[#151a17] px-3 py-2 text-[10px] text-[#b8b8ad] transition hover:border-[#8c8060] hover:text-white"
          >
            <Maximize2 size={13} />
            <span className="hidden sm:inline">Fullscreen</span>
          </button>
        </header>

        <section className="flex flex-1 flex-col px-4 py-5 sm:px-6 lg:px-8">

          <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#817553]">
                {dashboard.number} / {String(dashboards.length).padStart(2, "0")}
              </p>

              <h1 className="mt-1 text-[18px] font-semibold text-[#eeeae0] sm:text-[20px]">
                {dashboard.title}
              </h1>
            </div>

            <div className="text-right">
              <p className="text-[10px] text-[#697069]">
                Use ← → to navigate
              </p>

              <p className="mt-1 text-[9px] text-[#515750]">
                ESC to exit fullscreen
              </p>
            </div>
          </div>

          <div className="mx-auto mt-5 flex w-full max-w-[1500px] flex-1 items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-xl border border-[#30362f] bg-[#0d1110] p-2 shadow-[0_30px_100px_rgba(0,0,0,.38)] sm:p-3">

              <div className="relative flex min-h-[55vh] items-center justify-center overflow-hidden rounded-lg bg-[#080b0a]">
                <Image
                  src={dashboard.image}
                  alt={`${dashboard.title} - HR Decision Support System`}
                  width={1920}
                  height={1080}
                  priority
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                  sizes="100vw"
                />
              </div>

              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous dashboard"
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#4a4c43] bg-[#0b0e0d]/90 text-[#d0c9b7] shadow-lg transition hover:border-[#9a8b63] hover:bg-[#181c19] hover:text-white"
              >
                <ArrowLeft size={17} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next dashboard"
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#4a4c43] bg-[#0b0e0d]/90 text-[#d0c9b7] shadow-lg transition hover:border-[#9a8b63] hover:bg-[#181c19] hover:text-white"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          <div className="mx-auto mt-5 w-full max-w-[1500px]">
            <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {dashboards.map((item, index) => (
                <button
                  key={item.image}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`group relative min-w-[150px] overflow-hidden rounded-lg border text-left transition-all duration-200 sm:min-w-[175px] ${
                    activeSlide === index
                      ? "border-[#9b8c63] bg-[#171b18] shadow-[0_8px_25px_rgba(0,0,0,.28)]"
                      : "border-[#2d322e] bg-[#101412] hover:border-[#55594f]"
                  }`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#090c0b]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`object-cover object-top transition duration-200 ${
                        activeSlide === index
                          ? "opacity-100"
                          : "opacity-65 group-hover:opacity-90"
                      }`}
                      sizes="180px"
                    />

                    <span className="absolute left-2 top-2 rounded bg-[#0a0d0c]/90 px-1.5 py-1 text-[8px] font-bold text-[#c7b98e]">
                      {item.number}
                    </span>
                  </div>

                  <div className="px-3 py-2.5">
                    <p
                      className={`text-[10px] font-semibold ${
                        activeSlide === index
                          ? "text-white"
                          : "text-[#92988f]"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-4 flex w-full max-w-[1500px] items-center justify-between border-t border-[#242925] pt-4">
            <button
              type="button"
              onClick={previousSlide}
              className="inline-flex items-center gap-2 text-[10px] font-medium text-[#7e847c] transition hover:text-white"
            >
              <ArrowLeft size={13} />
              Previous
            </button>

            <span className="text-[10px] tracking-[0.14em] text-[#5e655d]">
              {String(activeSlide + 1).padStart(2, "0")} /{" "}
              {String(dashboards.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={nextSlide}
              className="inline-flex items-center gap-2 text-[10px] font-medium text-[#7e847c] transition hover:text-white"
            >
              Next
              <ArrowRight size={13} />
            </button>
          </div>
        </section>

        {isFullscreen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 sm:p-6">
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              aria-label="Close fullscreen"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#4b4d45] bg-[#111412] text-[#c4c0b4] transition hover:border-[#9a8b63] hover:text-white"
            >
              <X size={18} />
            </button>

            <Image
              src={dashboard.image}
              alt={`${dashboard.title} - HR Decision Support System`}
              width={2400}
              height={1400}
              className="max-h-[94vh] max-w-[96vw] object-contain"
              sizes="100vw"
              priority
            />

            <button
              type="button"
              onClick={previousSlide}
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#4b4d45] bg-[#111412]/90 text-[#c4c0b4] transition hover:border-[#9a8b63] hover:text-white"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#4b4d45] bg-[#111412]/90 text-[#c4c0b4] transition hover:border-[#9a8b63] hover:text-white"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
