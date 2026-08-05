import Link from "next/link";
import { ArrowRight, LayoutDashboard } from "lucide-react";

import ExecutiveCard from "@/components/design-system/ExecutiveCard";
import ExecutiveBadge from "@/components/design-system/ExecutiveBadge";
import SectionDivider from "@/components/design-system/SectionDivider";

interface CaseStudyCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
}

export default function CaseStudyCard({
  slug,
  title,
  excerpt,
  category,
  image,
}: CaseStudyCardProps) {
  return (
    <Link
    href={`/case-studies/${slug}`}
    className="block h-full"
    aria-label={`View ${title}`}
>
      <ExecutiveCard className="h-full">

        {/* ================================= */}
        {/* Project Cover */}
        {/* ================================= */}

        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#E7EEF8] bg-[#F8FBFF]">

          {/* Placeholder */}

          <div className="absolute inset-0 flex items-center justify-center">

            <div className="text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#EEF5FF]">

                <LayoutDashboard className="h-10 w-10 text-[#123A63]" />

              </div>

              <h4 className="mt-5 text-lg font-semibold text-[#102A56]">
                Dashboard Preview
              </h4>

              <p className="mt-2 text-sm text-slate-400">
                Coming Soon
              </p>

            </div>

          </div>

          {/* TODO:
    Replace placeholder with the actual project cover image
    after dashboard assets are finalized.
*/}

          {/*
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          */}

        </div>

        {/* ================================= */}
        {/* Content */}
        {/* ================================= */}

        <div className="mt-8">

          <ExecutiveBadge>
            {category}
          </ExecutiveBadge>

          <h3 className="mt-6 text-[30px] font-bold leading-tight tracking-[-0.03em] text-[#102A56]">
            {title}
          </h3>

          <SectionDivider />
          {/* ================================= */}
          {/* Description */}
          {/* ================================= */}

          <p className="mt-6 text-[17px] leading-8 text-slate-600">
            {excerpt}
          </p>

          {/* ================================= */}
          {/* CTA */}
          {/* ================================= */}

          <div className="mt-10 flex items-center justify-between">

            <span className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              Business Intelligence Project
            </span>

            <div
              className="
                inline-flex
                items-center
                gap-3
                font-semibold
                text-[#123A63]
                transition-all
                duration-300
                group-hover:gap-4
                group-hover:text-[#2563EB]
              "
            >
              View Project

              <ArrowRight
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                "
              />

            </div>

          </div>

        </div>

      </ExecutiveCard>

    </Link>
  );
}