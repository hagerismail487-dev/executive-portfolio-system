import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  slug: string;
  icon: React.ElementType;
  title: string;
  description: string;
  capabilities: string[];
  number: string;
}

export default function ServiceCard({
  slug,
  icon: Icon,
  title,
  description,
  capabilities,
  number,
}: ServiceCardProps) {
  return (
    <article
      className="
        group
        relative
        flex
        min-h-[235px]
        h-full
        flex-col
        overflow-hidden
        rounded-[18px]
        border
        border-[#DCE7F7]
        bg-[linear-gradient(145deg,#FFFFFF_0%,#FBFDFF_100%)]
        p-6
        transition-all
        duration-300
        hover:-translate-y-[2px]
        hover:border-[#B8D0F6]
        hover:shadow-[0_16px_38px_rgba(18,58,99,0.08)]
      "
    >
      {/* Subtle Hover Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-[#EEF5FF]
          opacity-0
          blur-[55px]
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Header */}

      <div
        className="
          relative
          z-10
          flex
          items-start
          justify-between
          gap-5
        "
      >
        <div className="flex items-start gap-4">
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
              border-[#D8E6FB]
              bg-[#F4F8FF]
              transition-all
              duration-300
              group-hover:border-[#C4D9F7]
              group-hover:bg-[#EEF5FF]
            "
          >
            <Icon
              className="
                h-[20px]
                w-[20px]
                text-[#2563EB]
                transition-transform
                duration-300
                group-hover:scale-105
              "
              strokeWidth={1.8}
            />
          </div>

          {/* Number + Title */}

          <div>
            <div
              className="
                mb-1.5
                text-[11px]
                font-semibold
                tracking-[0.18em]
                text-[#7192C4]
              "
            >
              {number}
            </div>

            <h3
              className="
                text-[21px]
                font-semibold
                leading-[1.2]
                tracking-[-0.03em]
                text-[#08245A]
              "
            >
              {title}
            </h3>
          </div>
        </div>

        {/* Arrow */}

        <Link
          href={`/services/${slug}`}
          aria-label={`View ${title}`}
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#DBE7F8]
            text-[#2563EB]
            transition-all
            duration-300
            hover:border-[#B8D0F6]
            hover:bg-[#F4F8FF]
            group-hover:translate-x-0.5
          "
        >
          <ArrowRight
            className="
              h-4
              w-4
            "
            strokeWidth={1.8}
          />
        </Link>
      </div>

      {/* Description */}

      <p
        className="
          relative
          z-10
          mt-5
          max-w-[600px]
          text-[14px]
          leading-[1.65]
          text-[#50678F]
        "
      >
        {description}
      </p>

      {/* Capability Tags */}

      <div
        className="
          relative
          z-10
          mt-auto
          flex
          flex-wrap
          gap-2
          pt-5
        "
      >
        {capabilities.map((capability) => (
          <span
            key={capability}
            className="
              rounded-full
              border
              border-[#DBE7F8]
              bg-white
              px-2.5
              py-1.5
              text-[10px]
              font-medium
              leading-none
              text-[#35547F]
            "
          >
            {capability}
          </span>
        ))}
      </div>
    </article>
  );
}