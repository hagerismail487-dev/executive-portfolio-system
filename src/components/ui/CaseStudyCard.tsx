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
      className="group block h-full"
      aria-label={`View ${title}`}
    >

      <ExecutiveCard
        className="
          h-full
          rounded-[20px]

          flex
          flex-col
        "
      >

        {/* ================================= */}
        {/* Project Cover */}
        {/* ================================= */}

        <div
          className="
            relative

            aspect-[16/10]

            overflow-hidden

            rounded-xl

            border
            border-[#E7EEF8]

            bg-[#F8FBFF]
          "
        >

          {/* Placeholder */}

          <div
            className="
              absolute
              inset-0

              flex
              items-center
              justify-center
            "
          >

            <div className="text-center">

              <div
                className="
                  mx-auto

                  flex
                  h-16
                  w-16

                  items-center
                  justify-center

                  rounded-2xl

                  bg-[#EEF5FF]
                "
              >

                <LayoutDashboard
                  className="h-8 w-8 text-[#123A63]"
                />

              </div>
                            <h4
                className="
                  mt-4

                  text-[16px]
                  font-semibold

                  text-[#102A56]
                "
              >
                Dashboard Preview
              </h4>

              <p
                className="
                  mt-1

                  text-[13px]

                  text-slate-400
                "
              >
                Coming Soon
              </p>

            </div>

          </div>

          {/* TODO:
              Replace placeholder with the actual dashboard preview.
          */}

          {/*
          <Image
            src={image}
            alt={title}
            fill
            className="
              object-cover

              transition-transform
              duration-500

              group-hover:scale-105
            "
          />
          */}

        </div>

        {/* ================================= */}
        {/* Content */}
        {/* ================================= */}

        <div
          className="
            mt-6

            flex
            flex-1
            flex-col
          "
        >

          <ExecutiveBadge>
            {category}
          </ExecutiveBadge>

          <h3
            className="
              mt-5

              text-[22px]
              font-bold

              leading-tight

              tracking-[-0.02em]

              text-[#102A56]
            "
          >
            {title}
          </h3>

          <SectionDivider />
                    {/* ================================= */}
          {/* Description */}
          {/* ================================= */}

          <p
            className="
              mt-5

              flex-1

              text-[15px]
              leading-7

              text-slate-600
            "
          >
            {excerpt}
          </p>

          {/* ================================= */}
          {/* CTA */}
          {/* ================================= */}

          <div
            className="
              mt-7

              flex
              items-center
              justify-between
            "
          >

            <span
              className="
                text-[11px]
                font-semibold

                uppercase

                tracking-[0.18em]

                text-slate-400
              "
            >
              Business Intelligence Project
            </span>

            <div
              className="
                inline-flex
                items-center

                gap-2

                text-[15px]
                font-semibold

                text-[#123A63]

                transition-all
                duration-300

                group-hover:gap-3
                group-hover:text-[#2563EB]
              "
            >
              View Project

              <ArrowRight
                className="
                  h-4
                  w-4

                  transition-transform
                  duration-300

                  group-hover:translate-x-1.5
                "
              />

            </div>

          </div>

        </div>
              </ExecutiveCard>

    </Link>
  );
}