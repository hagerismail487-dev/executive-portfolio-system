"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { salesMarketingPerformanceProject } from "@/data/sales-marketing-performance-intelligence";

export default function SalesMarketingPerformanceIntelligencePresentation() {
  const project = salesMarketingPerformanceProject;
  const searchParams = useSearchParams();

  const initialSlide = useMemo(() => {
    const value = Number(searchParams.get("slide"));

    if (
      Number.isInteger(value) &&
      value >= 1 &&
      value <= project.dashboards.length
    ) {
      return value - 1;
    }

    return 0;
  }, [project.dashboards.length, searchParams]);

  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = project.dashboards.length;
  const currentDashboard = project.dashboards[currentSlide];

  useEffect(() => {
    setCurrentSlide(initialSlide);
  }, [initialSlide]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setCurrentSlide((previous) =>
          Math.min(previous + 1, totalSlides - 1)
        );
      }

      if (event.key === "ArrowLeft") {
        setCurrentSlide((previous) => Math.max(previous - 1, 0));
      }

      if (event.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [totalSlides]);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("slide", String(currentSlide + 1));
    window.history.replaceState({}, "", url.toString());
  }, [currentSlide]);

  const goPrevious = () => {
    setCurrentSlide((previous) => Math.max(previous - 1, 0));
  };

  const goNext = () => {
    setCurrentSlide((previous) =>
      Math.min(previous + 1, totalSlides - 1)
    );
  };

  return (
    <main
      className={
        isFullscreen
          ? "fixed inset-0 z-50 flex min-h-screen flex-col bg-black text-white"
          : "min-h-screen bg-background text-foreground"
      }
    >
      <header
        className={
          isFullscreen
            ? "border-b border-white/10 bg-black px-4 py-3 sm:px-6"
            : "border-b border-border bg-background px-4 py-4 sm:px-6"
        }
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="min-w-0">
            <p
              className={
                isFullscreen
                  ? "truncate text-sm font-medium text-white/60"
                  : "truncate text-sm font-medium text-muted-foreground"
              }
            >
              {project.title}
            </p>

            <p
              className={
                isFullscreen
                  ? "mt-0.5 text-xs text-white/40"
                  : "mt-0.5 text-xs text-muted-foreground"
              }
            >
              Dashboard Presentation
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {!isFullscreen && (
              <Link
                href="/case-studies/sales-marketing-performance-intelligence"
                className="hidden rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted sm:inline-flex"
              >
                Back to Case Study
              </Link>
            )}

            <button
              type="button"
              onClick={() => setIsFullscreen((previous) => !previous)}
              className={
                isFullscreen
                  ? "rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
                  : "rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted"
              }
            >
              {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-5 sm:px-6 sm:py-7">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p
              className={
                isFullscreen
                  ? "text-xs font-medium uppercase tracking-[0.16em] text-white/50"
                  : "text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground"
              }
            >
              Slide {String(currentSlide + 1).padStart(2, "0")} /{" "}
              {String(totalSlides).padStart(2, "0")}
            </p>

            <h1
              className={
                isFullscreen
                  ? "mt-1 text-xl font-semibold sm:text-2xl"
                  : "mt-1 text-xl font-semibold sm:text-2xl"
              }
            >
              {currentDashboard.title}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrevious}
              disabled={currentSlide === 0}
              className={
                isFullscreen
                  ? "rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
                  : "rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30"
              }
            >
              Previous
            </button>

            <button
              type="button"
              onClick={goNext}
              disabled={currentSlide === totalSlides - 1}
              className={
                isFullscreen
                  ? "rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
                  : "rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30"
              }
            >
              Next
            </button>
          </div>
        </div>

        <div
          className={
            isFullscreen
              ? "flex flex-1 items-center justify-center"
              : "rounded-3xl border border-border bg-card p-3 shadow-sm sm:p-5"
          }
        >
          <img
            src={currentDashboard.image}
            alt={currentDashboard.title}
            className={
              isFullscreen
                ? "max-h-[calc(100vh-150px)] w-full object-contain"
                : "h-auto max-h-[72vh] w-full object-contain"
            }
          />
        </div>

        <div className="mt-5">
          <p
            className={
              isFullscreen
                ? "max-w-4xl text-sm leading-6 text-white/60"
                : "max-w-4xl text-sm leading-6 text-muted-foreground"
            }
          >
            {currentDashboard.description}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2">
          {project.dashboards.map((dashboard, index) => {
            const isActive = index === currentSlide;

            return (
              <button
                key={dashboard.title}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={
                  isActive
                    ? "overflow-hidden rounded-2xl border-2 border-primary bg-card p-1 text-left"
                    : isFullscreen
                      ? "overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 text-left opacity-60 transition hover:opacity-100"
                      : "overflow-hidden rounded-2xl border border-border bg-card p-1 text-left opacity-70 transition hover:opacity-100"
                }
                aria-label={`Go to slide ${index + 1}: ${dashboard.title}`}
              >
                <img
                  src={dashboard.image}
                  alt=""
                  className="aspect-video w-full rounded-xl object-cover"
                />

                <div className="px-2 py-2">
                  <p
                    className={
                      isFullscreen
                        ? "text-xs font-medium text-white"
                        : "text-xs font-medium"
                    }
                  >
                    {String(index + 1).padStart(2, "0")} — {dashboard.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
