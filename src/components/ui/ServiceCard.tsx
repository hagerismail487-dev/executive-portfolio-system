import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  slug: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function ServiceCard({
  slug,
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article
      className="
        group
        relative

        flex
        h-full
        flex-col

        overflow-hidden

        rounded-[22px]

        border
        border-slate-200

        bg-white

        p-7

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-[#D6E5FB]
        hover:bg-[#FCFDFF]
        hover:shadow-[0_18px_50px_rgba(18,58,99,0.08)]
      "
    >

      {/* ================================= */}
      {/* Background Glow */}
      {/* ================================= */}

      <div
        className="
          absolute
          right-0
          top-0

          h-28
          w-28

          rounded-full

          bg-[#EEF5FF]

          opacity-0

          blur-3xl

          transition-all
          duration-500

          group-hover:opacity-100
        "
      />
      {/* ================================= */}
      {/* Header */}
      {/* ================================= */}

      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center

            rounded-lg

            bg-[#F6F9FD]

            transition-all
            duration-300

            group-hover:bg-[#EAF3FF]
          "
        >

          <Icon
            className="h-5 w-5 text-[#123A63]"
          />

        </div>

        <h3
          className="
            text-[20px]
            font-semibold

            leading-tight

            tracking-[-0.02em]

            text-[#102A56]
          "
        >
          {title}
        </h3>

      </div>

      {/* ================================= */}
      {/* Divider */}
      {/* ================================= */}

      <div
        className="
          mt-3
          mb-3

          h-px
          w-full

          bg-[#E8EDF5]
        "
      />
            {/* ================================= */}
      {/* Description */}
      {/* ================================= */}

      <p
        className="
          flex-1

          text-[14px]
          leading-6

          text-slate-600
        "
      >
        {description}
      </p>

      {/* ================================= */}
      {/* CTA */}
      {/* ================================= */}

      <Link
        href={`/services/${slug}`}
        className="
          mt-6

          inline-flex
          items-center
          gap-2

          text-[14px]
          font-semibold

          text-[#123A63]

          transition-all
          duration-300

          group-hover:gap-3
          group-hover:text-[#2563EB]
        "
      >
        Learn More

        <ArrowRight
          className="
            h-4
            w-4

            transition-transform
            duration-300

            group-hover:translate-x-1.5
          "
        />

      </Link>
          </article>
  );
}