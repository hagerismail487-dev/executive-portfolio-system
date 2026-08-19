"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";

import { workforceTalentIntelligenceProject as project } from "@/data/workforce-talent-intelligence-dashboard";

export default function WorkforceTalentIntelligencePresentation() {
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
          current === project.dashboards.length - 1 ? 0 : current + 1
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveSlide((current) =>
          current === 0 ? project.dashboards.length - 1 : current - 1
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
      current === 0 ? project.dashboards.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === project.dashboards.length - 1 ? 0 : current + 1
    );
  };

  return (
    <main className="min-h-screen bg-[#020812] text-white">

      <div className="flex min-h-screen flex-col">

        <header className="flex items-center justify-between border-b border-[#14375c] bg-[#041120]/95 px-4 py-3 backdrop-blur sm:px-6">

          <Link
            href="/case-studies/workforce-talent-intelligence-dashboard"
            className="inline-flex items-center gap-2 text-[11px] font-medium text-[#79c2ff] transition hover:text-white"
          >
            <ArrowLeft size={14} />
            Back to Case Study
          </Link>

          <div className="text-center">

            <p className="text-[10px] uppercase tracking-[0.2em] text-[#5bb7ff]">
              Workforce &amp; Talent Intelligence Dashboard
            </p>

            <p className="mt-1 text-[11px] text-[#7189a3]">
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

              <div className="absolute bottom-7 left-1/2 -translate-x-1/2 rounded-full border border-[#285579] bg-[#041120]/90 px-4 py-2 text-[11px] text-[#c4d6e8] backdrop-blur">

                {String(activeSlide + 1).padStart(2, "0")}
                {" / "}
                {String(project.dashboards.length).padStart(2, "0")}

              </div>

            </div>

            <div className="mt-5 flex flex-col items-center justify-between gap-4 sm:flex-row">

              <div>

                <p className="text-[11px] uppercase tracking-[0.18em] text-[#55b5ff]">
                  Dashboard {String(activeSlide + 1).padStart(2, "0")}
                </p>

                <h1 className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {dashboard.title}
                </h1>

                <p className="mt-1 max-w-2xl text-[12px] leading-6 text-[#8ba3ba]">
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

                  <span className="absolute bottom-1 left-1 rounded bg-[#03101d]/90 px-1.5 py-0.5 text-[9px] font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </button>

              ))}

            </div>

            <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-[#607993]">

              <span>← → to navigate</span>

              <span className="text-[#284563]">•</span>

              <span>ESC to exit presentation mode</span>

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

      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex min-h-screen flex-col bg-[#020812]">

          <header className="flex items-center justify-between border-b border-[#14375c] bg-[#041120]/95 px-4 py-3 backdrop-blur sm:px-6">

            <Link
              href="/case-studies/workforce-talent-intelligence-dashboard"
              className="inline-flex items-center gap-2 text-[11px] font-medium text-[#79c2ff] transition hover:text-white"
            >
              <ArrowLeft size={14} />
              Back to Case Study
            </Link>

            <div className="text-center">

              <p className="text-[10px] uppercase tracking-[0.2em] text-[#5bb7ff]">
                Workforce &amp; Talent Intelligence Dashboard
              </p>

              <p className="mt-1 text-[11px] text-[#7189a3]">
                Dashboard Presentation
              </p>

            </div>

            <button
              onClick={() => setIsFullscreen(false)}
              aria-label="Exit presentation mode"
              className="inline-flex items-center gap-2 rounded-md border border-[#20476e] bg-[#07192b] px-3 py-2 text-[10px] text-[#a9c2da] transition hover:border-[#3c77aa] hover:text-white"
            >
              <X size={13} />
              <span className="hidden sm:inline">Exit</span>
            </button>

          </header>

          <section className="flex flex-1 items-center justify-center px-4 py-6 sm:px-8 lg:px-14">

            <button
  onClick={previousSlide}
  aria-label="Previous dashboard"
  className="mr-3 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#20476e] bg-[#07192b] text-[#75beff] transition hover:border-[#3f81b9] hover:bg-[#0a2440] hover:text-white md:flex"
>
  <ArrowLeft size={18} />
</button>

            <div className="w-full max-w-[1500px]">

              <div className="relative w-full overflow-hidden rounded-xl border border-[#1c4c79] bg-[#071525] p-2 shadow-[0_30px_100px_rgba(0,50,110,.3)] sm:p-3 lg:p-4">

                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-[#173a5d] bg-[#020a14]">

                  <Image
                    key={dashboard.image}
                    src={dashboard.image}
                    alt={dashboard.title}
                    fill
                    priority
                    className="object-contain p-3 sm:p-5 lg:p-7"
                    sizes="100vw"
                  />

                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-[#285579] bg-[#041120]/90 px-4 py-2 text-[11px] text-[#c4d6e8] backdrop-blur">

                  {String(activeSlide + 1).padStart(2, "0")}
                  {" / "}
                  {String(project.dashboards.length).padStart(2, "0")}

                </div>

              </div>

              <div className="mt-5 flex items-center justify-between gap-4">

                <div>

                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#55b5ff]">
                    Dashboard {String(activeSlide + 1).padStart(2, "0")}
                  </p>

                  <h1 className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {dashboard.title}
                  </h1>

                  <p className="mt-1 max-w-2xl text-[12px] leading-6 text-[#8ba3ba]">
                    {dashboard.description}
                  </p>

                </div>

                <div className="hidden items-center gap-2 md:flex">

                  <button
                    onClick={previousSlide}
                    aria-label="Previous dashboard"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#20476e] bg-[#07192b] text-[#70bbff] transition hover:border-[#3f81b9] hover:text-white"
                  >
                    <ArrowLeft size={16} />
                  </button>

                  <button
                    onClick={nextSlide}
                    aria-label="Next dashboard"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#20476e] bg-[#07192b] text-[#70bbff] transition hover:border-[#3f81b9] hover:text-white"
                  >
                    <ArrowRight size={16} />
                  </button>

                </div>

              </div>

              <div className="mt-5 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

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

                    <span className="absolute bottom-1 left-1 rounded bg-[#03101d]/90 px-1.5 py-0.5 text-[9px] font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </button>

                ))}

              </div>

              <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-[#607993]">

                <span>← → to navigate</span>

                <span className="text-[#284563]">•</span>

                <span>ESC to exit presentation mode</span>

              </div>

            </div>


            <button
              onClick={nextSlide}
              className="absolute right-3 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-[#31597e] bg-[#07192b]/90 text-[#75beff] md:flex"
              aria-label="Next dashboard"
            >
              <ArrowRight size={20} />
            </button>


            <button
              onClick={nextSlide}
              className="absolute right-3 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-[#31597e] bg-[#07192b]/90 text-[#75beff] md:flex"
              aria-label="Next dashboard"
            >
              <ArrowRight size={20} />
            </button>

          </section>

        </div>
      )}

    </main>
  );
}


