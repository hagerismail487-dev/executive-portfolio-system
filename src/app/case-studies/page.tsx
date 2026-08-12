import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { caseStudies } from "@/data/case-studies";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#030a16] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5cb5ff]">
            Executive Portfolio System
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Case Studies
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#8fa7bf]">
            Selected Business Intelligence, Executive Reporting, and
            operational analytics projects.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((project) => (
            <Link
              key={project.slug}
              href={`/case-studies/${project.slug}`}
              className="group overflow-hidden rounded-[14px] border border-[#174574] bg-[#061426] transition-all duration-300 hover:-translate-y-1 hover:border-[#2389ee] hover:shadow-[0_20px_60px_rgba(0,70,150,.22)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-[#173b61] bg-[#07192b]">
                <Image
                  src={project.images.cover}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>

              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md border border-[#173e68] bg-[#0a2441] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-[#d8eaff]">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="rounded-md border border-[#1d5a92] bg-[#0a2340] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-[#64b8ff]">
                      Featured
                    </span>
                  )}
                </div>

                <h2 className="mt-4 text-lg font-semibold text-white transition-colors group-hover:text-[#67bbff]">
                  {project.title}
                </h2>

                <p className="mt-2 line-clamp-3 text-[12px] leading-5 text-[#8fa7bf]">
                  {project.excerpt}
                </p>

                <div className="mt-5 flex items-center gap-2 text-[11px] font-semibold text-[#69b9ff]">
                  View Case Study
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
