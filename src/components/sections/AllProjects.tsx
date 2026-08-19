"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Grid2X2 } from "lucide-react";

import { caseStudies } from "@/data/case-studies";

export default function AllProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Sales & Commercial",
    "Real Estate",
    "HR & Workforce",
    "Operations & Supply Chain",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((project) =>
          project.filterCategories.includes(activeCategory)
        );

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8FAFD]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="relative overflow-hidden bg-[#061426]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,0.18),transparent_35%)]" />

        <div className="absolute -bottom-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[50%] bg-[#F8FAFD]" />
        <div className="relative mx-auto max-w-[1280px] px-6 pb-40 pt-32 sm:px-8 lg:px-10">

          <p className="mt-5 text-[15px] font-semibold uppercase tracking-[0.20em] !text-white sm:text-[16px]">
            Case Studies
          </p>

          <h1 className="mt-7 max-w-5xl text-[34px] font-bold leading-[1.1] tracking-[-0.04em] !text-white sm:text-[44px] lg:text-[50px]">
            Turning complexity into clarity, Data into decisions, Performance into impact.
          </h1>

          <p className="mt-6 max-w-2xl text-[15px] leading-7 !text-white sm:text-base">
            A collection of Business Intelligence and Executive Reporting solutions designed to solve real business challenges and deliver measurable results.
          </p>

        </div>

      </div>{/* =====================================================
          PROJECT LIST
      ===================================================== */}

      <div className="relative mx-auto -mt-16 max-w-[1280px] px-6 pb-24 sm:px-8 lg:px-10">

        <div className="mb-7 flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Project Library
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setActiveCategory(activeCategory === "All" ? categories[1] ?? "All" : "All")
            }
            className="
              inline-flex
              items-center
              gap-3
              rounded-[7px]
              border
              border-[#7FA7E8]
              bg-white
              px-5
              py-3
              text-[13px]
              font-semibold
              text-[#17458A]
              shadow-sm
              transition-all
              duration-300
              hover:border-[#2563EB]
              hover:bg-[#F7FAFF]
              hover:text-[#2563EB]
            "
          >
            <span>
              {activeCategory === "All" ? "View All Categories" : "All Categories"}
            </span>

            <Grid2X2 className="h-4 w-4" />
          </button>
        </div>

        {activeCategory !== "All" && (
          <div className="mb-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`
                  rounded-full
                  border
                  px-4
                  py-2
                  text-[11px]
                  font-semibold
                  transition-all
                  duration-200
                  ${
                    activeCategory === category
                      ? "border-[#2563EB] bg-[#2563EB] text-white"
                      : "border-[#DCE6F2] bg-white text-[#365477] hover:border-[#7FA7E8]"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="overflow-hidden rounded-[24px] border border-[#E4EBF4] bg-white shadow-[0_24px_70px_rgba(15,42,75,0.08)]">

          {filteredProjects.map((project, index) => {

            const isLast = index === caseStudies.length - 1;

            return (
              <Link
                key={project.slug}
                href={`/case-studies/${project.slug}`}
                className={`
                  group block
                  ${!isLast ? "border-b border-[#E8EEF5]" : ""}
                `}
              >

                <article
                  className="
                    grid
                    gap-8
                    p-6
                    transition-all
                    duration-300
                    hover:bg-[#FBFDFF]
                    sm:p-8
                    lg:grid-cols-[320px_1fr_auto]
                    lg:items-center
                    lg:gap-10
                    lg:p-10
                  "
                >

                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div
                    className="
                      relative
                      aspect-[16/10]
                      overflow-hidden
                      rounded-[14px]
                      border
                      border-[#E5ECF5]
                      bg-[#F2F6FB]
                    "
                  >

                    {project.images.cover ? (
                      <Image
                        src={project.images.cover}
                        alt={project.title}
                        fill
                        className="
                          object-cover
                          object-top
                          transition-transform
                          duration-500
                          group-hover:scale-[1.03]
                        "
                        sizes="(max-width: 1024px) 100vw, 320px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Project Preview
                        </span>
                      </div>
                    )}

                  </div>


                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="min-w-0">

                    <div className="flex flex-wrap items-center gap-3">

                      <span
                        className="
                          inline-flex
                          rounded-md
                          border
                          border-[#DCE8F6]
                          bg-[#F4F8FD]
                          px-3
                          py-1.5
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.14em]
                          text-[#24517F]
                        "
                      >
                        {project.category}
                      </span>

                      {project.featured && (
                        <span
                          className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.14em]
                            text-[#2563EB]
                          "
                        >
                          Featured
                        </span>
                      )}

                    </div>


                    <h2
                      className="
                        mt-5
                        max-w-2xl
                        text-[24px]
                        font-bold
                        leading-tight
                        tracking-[-0.03em]
                        text-[#102A56]
                        transition-colors
                        duration-300
                        group-hover:text-[#2563EB]
                        sm:text-[28px]
                      "
                    >
                      {project.title}
                    </h2>


                    <p
                      className="
                        mt-4
                        max-w-2xl
                        text-[14px]
                        leading-7
                        text-slate-500
                        sm:text-[15px]
                      "
                    >
                      {project.excerpt}
                    </p>

                  </div>
                  {/* =================================================
                      CTA
                  ================================================= */}

                  <div className="flex items-center justify-start lg:justify-end">

                    <div
                      className="
                        inline-flex
                        min-w-[150px]
                        items-center
                        justify-center
                        gap-4
                        rounded-[7px]
                        border
                        border-[#7FA7E8]
                        bg-white
                        px-5
                        py-3.5
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#123A63]
                        shadow-sm
                        transition-all
                        duration-300
                        group-hover:border-[#2563EB]
                        group-hover:text-[#2563EB]
                      "
                    >
                      <span>
                        View Project
                      </span>

                      <ArrowRight
                        className="
                          h-4
                          w-4
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </div>

                  </div>

                </article>

              </Link>
            );
          })}

        </div>

      </div>

    </section>
  );
}














