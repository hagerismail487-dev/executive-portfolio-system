"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";

const dashboards = [
  {
    title: "Landing Page",
    image:
      "/projects/customer-experience-operations-dashboard/01-landing-page.PNG",
  },
  {
    title: "Executive Dashboard",
    image:
      "/projects/customer-experience-operations-dashboard/02-executive-dashboard.PNG",
  },
  {
    title: "Customer Experience",
    image:
      "/projects/customer-experience-operations-dashboard/03-customer-experience.PNG",
  },
  {
    title: "Collections Performance",
    image:
      "/projects/customer-experience-operations-dashboard/04-collections-performance.PNG",
  },
  {
    title: "Legal Performance",
    image:
      "/projects/customer-experience-operations-dashboard/05-legal-performance.PNG",
  },
];

export default function CustomerExperienceDashboardPresentation() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slide = Number(params.get("slide"));

    if (Number.isInteger(slide) && slide >= 0 && slide < dashboards.length) {
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
    <main className="min-h-screen bg-[#020812] text-white">
      <div className="flex min-h-screen flex-col">
        <header className="flex items-center justify-between border-b border-[#14375c] bg-[#041120] px-4 py-3 sm:px-6">
          <Link
            href="/case-studies/customer-experience-operations-dashboard"
            className="inline-flex items-center gap-2 text-[11px] text-[#79c2ff] hover:text-white"
          >
            <ArrowLeft size={14} />
            Back to Case Study
          </Link>

          <div className="text-center">
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#5bb7ff]">
              Customer Experience &amp; Operations
            </p>
            <p className="mt-1 text-[10px] text-[#7189a3]">
              Dashboard Presentation
            </p>
          </div>

          <button
            onClick={() => setIsFullscreen(true)}
            className="inline-flex items-center gap-2 rounded-md border border-[#20476e] bg-[#07192b] px-3 py-2 text-[10px] text-[#a9c2da] hover:text-white"
          >
            <Maximize2 size={13} />
            <span className="hidden sm:inline">Presentation Mode</span>
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
            <div className="relative overflow-hidden rounded-xl border border-[#1c4c79] bg-[#071525] p-2 shadow-[0_30px_100px_rgba(0,50,110,.3)] sm:p-3 lg:p-4">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-[#173a5d] bg-[#020a14]">
                <Image
                  key={dashboard.image}
                  src={dashboard.image}
                  alt={dashboard.title}
                  fill
                  priority
                  className="object-contain p-4 sm:p-6 lg:p-8"
                  sizes="(max-width: 768px) 100vw, 92vw"
                />
              </div>

              <div className="absolute bottom-7 left-1/2 -translate-x-1/2 rounded-full border border-[#285579] bg-[#041120]/90 px-4 py-2 text-[10px] text-[#b9cce0]">
                {String(activeSlide + 1).padStart(2, "0")} /{" "}
                {String(dashboards.length).padStart(2, "0")}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#55b5ff]">
                  Dashboard {String(activeSlide + 1).padStart(2, "0")}
                </p>

                <h1 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                  {dashboard.title}
                </h1>
              </div>

              <div className="flex gap-2 md:hidden">
                <button
                  onClick={previousSlide}
                  className="h-10 w-10 rounded-md border border-[#20476e] bg-[#07192b]"
                  aria-label="Previous dashboard"
                >
                  <ArrowLeft size={16} className="mx-auto" />
                </button>

                <button
                  onClick={nextSlide}
                  className="h-10 w-10 rounded-md border border-[#20476e] bg-[#07192b]"
                  aria-label="Next dashboard"
                >
                  <ArrowRight size={16} className="mx-auto" />
                </button>
              </div>
            </div>

            <div className="mt-6 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {dashboards.map((item, index) => (
                <button
                  key={item.title}
                  onClick={() => setActiveSlide(index)}
                  className={`relative h-14 w-24 shrink-0 overflow-hidden rounded-md border ${
                    activeSlide === index
                      ? "border-[#1685ff]"
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
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next dashboard"
            className="ml-3 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#20476e] bg-[#07192b] text-[#75beff] transition hover:border-[#3f81b9] hover:bg-[#0a2440] hover:text-white md:flex"
          >
            <ArrowRight size={18} />
          </button>
        </section>

        {isFullscreen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#01060d]/95 p-4 sm:p-6">
            <button
              onClick={() => setIsFullscreen(false)}
              aria-label="Close presentation mode"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#31577d] bg-[#071525]"
            >
              <X size={18} />
            </button>

            <button
              onClick={previousSlide}
              aria-label="Previous dashboard"
              className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#31577d] bg-[#071525] md:flex"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="relative h-full w-full max-w-[1500px]">
              <div className="relative h-full w-full overflow-hidden rounded-xl border border-[#285579] bg-[#020a14]">
                <Image
                  key={`fullscreen-${dashboard.image}`}
                  src={dashboard.image}
                  alt={dashboard.title}
                  fill
                  priority
                  className="object-contain p-4 sm:p-8 lg:p-12"
                  sizes="100vw"
                />
              </div>

              <button
                onClick={nextSlide}
                aria-label="Next dashboard"
                className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#31577d] bg-[#071525] md:flex"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

