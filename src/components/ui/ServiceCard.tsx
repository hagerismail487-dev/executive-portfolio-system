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
        min-h-[190px]
        h-full
        flex-col

        overflow-hidden

        rounded-[20px]

        border
        border-[#D9E6F5]

        bg-white

        p-6

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#9FC4F7]
        hover:shadow-[0_18px_45px_rgba(18,58,99,0.10)]
      "
    >

      {/* ========================================= */}
      {/* Background Accent */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-45px]
          top-[-45px]

          h-[150px]
          w-[150px]

          rounded-full

          bg-[#EEF5FF]

          opacity-0

          blur-[45px]

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* ========================================= */}
      {/* Top Accent Line */}
      {/* ========================================= */}

      <div
        className="
          absolute
          left-0
          top-0

          h-[2px]
          w-0

          bg-[#2563EB]

          transition-all
          duration-500

          group-hover:w-full
        "
      />

      {/* ========================================= */}
      {/* Header */}
      {/* ========================================= */}

      <div
        className="
          relative
          z-10

          flex
          items-center
          gap-4
        "
      >

        {/* Icon */}

        <div
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center

            rounded-xl

            border
            border-[#DCEBFF]

            bg-[#F4F8FF]

            transition-all
            duration-300

            group-hover:border-[#B9D5FA]
            group-hover:bg-[#EAF3FF]
          "
        >
          <Icon
            className="
              h-[19px]
              w-[19px]

              text-[#2563EB]

              transition-transform
              duration-300

              group-hover:scale-105
            "
            strokeWidth={1.8}
          />
        </div>

        {/* Title */}

        <h3
          className="
            text-[18px]
            font-semibold

            leading-[1.25]

            tracking-[-0.025em]

            text-[#102A56]
          "
        >
          {title}
        </h3>

      </div>

      {/* ========================================= */}
      {/* Divider */}
      {/* ========================================= */}

      <div
        className="
          relative
          z-10

          mt-4
          mb-4

          h-px
          w-full

          bg-[#E6EDF6]

          transition-colors
          duration-300

          group-hover:bg-[#D4E4F8]
        "
      />

      {/* ========================================= */}
      {/* Description */}
      {/* ========================================= */}

      <p
        className="
          relative
          z-10

          flex-1

          max-w-[620px]

          text-[14px]
          leading-[1.7]

          text-[#526985]
        "
      >
        {description}
      </p>

      {/* ========================================= */}
      {/* CTA */}
      {/* ========================================= */}

      <Link
        href={`/services/${slug}`}
        className="
          relative
          z-10

          mt-5

          inline-flex
          w-fit

          items-center
          gap-2

          text-[13px]
          font-semibold

          text-[#123A63]

          transition-all
          duration-300

          hover:text-[#2563EB]

          group-hover:gap-3
        "
      >
        <span>
          Learn More
        </span>

        <ArrowRight
          className="
            h-[15px]
            w-[15px]

            transition-transform
            duration-300

            group-hover:translate-x-1
          "
          strokeWidth={2}
        />
      </Link>

    </article>
  );
}