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
        rounded-[28px]
        border
        border-slate-200
        bg-white
        p-9
        shadow-none
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#D6E5FB]
        hover:bg-[#FCFDFF]
        hover:shadow-[0_20px_60px_rgba(18,58,99,0.08)]
      "
    >
      {/* ================================= */}
      {/* Background Glow */}
      {/* ================================= */}

      <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#EEF5FF] opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

      {/* ================================= */}
      {/* Icon */}
      {/* ================================= */}

      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8FBFF] transition-all duration-300 group-hover:bg-[#EAF3FF]">

        <Icon className="h-6 w-6 text-[#123A63]" />

      </div>

      {/* ================================= */}
      {/* Title */}
      {/* ================================= */}

      <h3 className="mt-8 text-[30px] font-bold leading-tight tracking-[-0.03em] text-[#102A56]">
        {title}
      </h3>

      {/* ================================= */}
      {/* Accent Line */}
      {/* ================================= */}

      <div className="mt-5 h-[3px] w-14 rounded-full bg-[#2563EB] transition-all duration-300 group-hover:w-24" />

      {/* ================================= */}
      {/* Description */}
      {/* ================================= */}

      <p className="mt-7 flex-1 text-[17px] leading-8 text-slate-600">
        {description}
      </p>

      {/* ================================= */}
      {/* CTA */}
      {/* ================================= */}

      <Link
        href={`/services/${slug}`}
        className="
          mt-10
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
        Learn More

        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />

      </Link>
    </article>
  );
}