"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";

import { executiveSalesProject as project } from "@/data/executive-sales-performance-intelligence";

export default function ExecutiveSalesPerformanceIntelligencePresentation() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slide = Number(params.get("slide"));

    if (
      Number.isInteger(slide) &&
      slide >= 0 &&
      slide < project.dashboards.length
    ) {
      setActiveSlide(slide);
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setActiveSlide((current) =>
          current === project.dashboards.length - 1
            ? 0
            : current + 1
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveSlide((current) =>
          current === 0
            ? project.dashboards.length - 1
            : current - 1
        );
      }

      if (event.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const dashboard = project.dashboards[activeSlide];

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0
        ? project.dashboards.length - 1
        : current - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === project.dashboards.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <main className="min-h-screen bg-[#020812] text-white">

      <div className="flex min-h-screen flex-col">

        {/* Top Bar */}

        <header className="flex items-center justify-between border-b border-[#14375c] bg-[#041120]/95 px-4 py-3 backdrop-blur sm:px-6">

          <Link
            href="/case-studies/executive-sales-performance-intelligence"
            className="inline-flex items-center gap-2 text-[11px] font-medium text-[#79c2ff] transition hover:text-white"
          >
            <ArrowLeft size={14} />
            Back to Case Study
          </Link>

          <div className="text-center">

            <p className="text-[9px] uppercase tracking-[0.2em] text-[#5bb7ff]">
              Executive Sales Performance Intelligence
            </p>

            <p className="mt-1 text-[10px] text-[#7189a3]">
              Dashboard Presentation
            </p>

          </div>

          <button
            onClick={() => setIsFullscreen(true)}
            className="inline-flex items-center gap-2 rounded-md border border-[#20476e] bg-[#07192b] px-3 py-2 text-[10px] text-[#a9c2da] transition hover:border-[#3c77aa] hover:text-white"
          >
            <Maximize2 size={13} />
            <span className="hidden sm:inline">
              Presentation Mode
            </span>
          </button>

        </header>

        {/* Main Presentation */}

        <section className="flex flex-1 items-center justify-center px-4 py-8 sm:px-8 lg:px-14">

          <button
            onClick={previousSlide}
            aria-label="Previous dashboard"
            className="mr-3 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#20476e] bg-[#07192b] text-[#75beff] transition hover:border-[#3f81b9] hover:bg-[#0a2440] hover:text-white md:flex"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="w-full max-w-[1320px]">

            <div className="relative w-full overflow-hidden rounded-xl border border-[#1c4c79] bg-[#071525] p-2 shadow-[0_30px_100px_rgba(0,50,110,.3)] sm:p-3 lg:p-4">
                
             <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-[#173a5d] bg-[#020a14]">

  <Image
    key={dashboard.image}
    src={dashboard.image}
    alt={dashboard.title}
    fill
    priority
    className="object-contain p-4 sm:p-6 lg:p-8"
    sizes="(max-width: 768px) 100vw, (max-width: 1320px) 92vw, 1320px"
  />

</div>

              {/* Slide Indicator */}

              <div className="absolute bottom-7 left-1/2 -translate-x-1/2 rounded-full border border-[#285579] bg-[#041120]/90 px-4 py-2 text-[10px] text-[#b9cce0] backdrop-blur">

                {String(activeSlide + 1).padStart(2, "0")}
                {" / "}
                {String(project.dashboards.length).padStart(2, "0")}

              </div>

            </div>

            {/* Information */}

            <div className="mt-5 flex flex-col items-center justify-between gap-4 sm:flex-row">

              <div>

                <p className="text-[10px] uppercase tracking-[0.18em] text-[#55b5ff]">
                  Dashboard {String(activeSlide + 1).padStart(2, "0")}
                </p>

                <h1 className="mt-1 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {dashboard.title}
                </h1>

                <p className="mt-1 max-w-2xl text-[11px] leading-5 text-[#7f97af]">
                  {dashboard.description}
                </p>

              </div>

              <div className="flex items-center gap-2">

                <button
                  onClick={previousSlide}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#20476e] bg-[#07192b] text-[#70bbff] transition hover:border-[#3f81b9] hover:text-white md:hidden"
                  aria-label="Previous dashboard"
                >
                  <ArrowLeft size={16} />
                </button>

                <button
                  onClick={nextSlide}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#20476e] bg-[#07192b] text-[#70bbff] transition hover:border-[#3f81b9] hover:text-white md:hidden"
                  aria-label="Next dashboard"
                >
                  <ArrowRight size={16} />
                </button>

              </div>

            </div>

            {/* Slide Navigation */}

            <div className="mt-6 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

              {project.dashboards.map((item, index) => (

                <button
                  key={item.title}
                  onClick={() => setActiveSlide(index)}
                  className={`relative h-14 w-24 shrink-0 overflow-hidden rounded-md border transition ${
                    activeSlide === index
                      ? "border-[#1685ff] shadow-[0_0_0_1px_rgba(22,133,255,.3)]"
                      : "border-[#173b61] opacity-60 hover:opacity-100"
                  }`}
                >

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top"
                    sizes="96px"
                  />

                  <span className="absolute bottom-1 left-1 rounded bg-[#03101d]/90 px-1.5 py-0.5 text-[8px] font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </button>

              ))}

            </div>

            <div className="mt-3 flex items-center justify-center gap-2 text-[9px] text-[#536b84]">
              <span>â† Previous</span>
              <span>â€¢</span>
              <span>Use keyboard arrows to navigate</span>
              <span>â€¢</span>
              <span>Next â†’</span>
            </div>

          </div>

          <button
            onClick={nextSlide}
            aria-label="Next dashboard"
            className="ml-3 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#20476e] bg-[#07192b] text-[#75beff] transition hover:border-[#3f81b9] hover:bg-[#0a2440] hover:text-white md:flex"
          >
            <ArrowRight size={18} />
          </button>

        </section>

      </div>

      {/* Presentation Overlay */}

      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#01050b]/95 p-3 backdrop-blur-sm sm:p-6">

          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#31597e] bg-[#07192b] text-white transition hover:bg-[#0b2948]"
            aria-label="Close presentation mode"
          >
            <X size={18} />
          </button>

          <button
            onClick={previousSlide}
            className="absolute left-3 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-[#31597e] bg-[#07192b]/90 text-[#75beff] md:flex"
            aria-label="Previous dashboard"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="relative h-full w-full">

            <Image
              src={dashboard.image}
              alt={dashboard.title}
              fill
              className="object-contain p-8 sm:p-12 lg:p-16"
              sizes="100vw"
            />

          </div>

          <button
            onClick={nextSlide}
            className="absolute right-3 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-[#31597e] bg-[#07192b]/90 text-[#75beff] md:flex"
            aria-label="Next dashboard"
          >
            <ArrowRight size={20} />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-[#31597e] bg-[#07192b]/90 px-4 py-2 text-[10px] text-[#c0d3e6]">

            {String(activeSlide + 1).padStart(2, "0")}
            {" / "}
            {String(project.dashboards.length).padStart(2, "0")}
            {" â€” "}
            {dashboard.title}

          </div>

        </div>
      )}

    </main>
  );
}

