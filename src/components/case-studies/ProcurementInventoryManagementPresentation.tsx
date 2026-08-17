"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Maximize2 } from "lucide-react";
import { useEffect, useState } from "react";

import { procurementInventoryManagementProject as project } from "@/data/procurement-inventory-management";

export default function ProcurementInventoryManagementPresentation() {
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

        {/* Top Bar */}

        <header className="flex items-center justify-between border-b border-[#14375c] bg-[#041120]/95 px-4 py-3 backdrop-blur sm:px-6">

          <Link
            href="/case-studies/procurement-inventory-management"
            className="inline-flex items-center gap-2 text-[11px] font-medium text-[#79c2ff] transition hover:text-white"
          >
            <ArrowLeft size={14} />
            Back to Case Study
          </Link>

          <div className="text-center">

            <p className="text-[9px] uppercase tracking-[0.2em] text-[#5bb7ff]">
              Procurement & Inventory Management
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

            {/* Thumbnails */}

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">

              {project.dashboards.map((item, index) => (

                <button
                  key={item.image}
                  onClick={() => setActiveSlide(index)}
                  className={`group overflow-hidden rounded-lg border text-left transition ${
                    activeSlide === index
                      ? "border-[#3e8ed0] bg-[#0a2139]"
                      : "border-[#173b5f] bg-[#061426] hover:border-[#2e6796]"
                  }`}
                  aria-label={`Open ${item.title}`}
                >

                  <div className="relative aspect-[16/9] overflow-hidden bg-[#020a14]">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-1.5"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    />

                  </div>

                  <div className="border-t border-[#143b62] px-2.5 py-2">

                    <p className="text-[8px] uppercase tracking-[0.14em] text-[#55b5ff]">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <p className="mt-0.5 truncate text-[10px] font-medium text-[#d9e8f5]">
                      {item.title}
                    </p>

                  </div>

                </button>

              ))}

            </div>

          </div>

        </section>

      </div>

      {/* Presentation Mode */}

      {isFullscreen && (

        <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-[#01050b]">

          <button
            onClick={() => setIsFullscreen(false)}
            aria-label="Exit presentation mode"
            className="absolute right-5 top-5 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#284c70] bg-[#07192b]/90 text-[#83c8ff] transition hover:border-[#4d83b5] hover:text-white"
          >
            <Maximize2 size={16} />
          </button>

          <button
            onClick={previousSlide}
            aria-label="Previous dashboard"
            className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#284c70] bg-[#07192b]/90 text-[#83c8ff] transition hover:border-[#4d83b5] hover:text-white sm:flex"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="relative h-full w-full p-4 sm:p-8">

            <Image
              key={dashboard.image}
              src={dashboard.image}
              alt={dashboard.title}
              fill
              priority
              className="object-contain p-2 sm:p-6"
              sizes="100vw"
            />

          </div>

          <button
            onClick={nextSlide}
            aria-label="Next dashboard"
            className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#284c70] bg-[#07192b]/90 text-[#83c8ff] transition hover:border-[#4d83b5] hover:text-white sm:flex"
          >
            <ArrowRight size={20} />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-[#284c70] bg-[#07192b]/90 px-4 py-2 text-[10px] text-[#c0d5e8]">
            {dashboard.title}
            {" · "}
            {String(activeSlide + 1).padStart(2, "0")}
            {" / "}
            {String(project.dashboards.length).padStart(2, "0")}
          </div>

        </div>

      )}

    </main>
  );
}
