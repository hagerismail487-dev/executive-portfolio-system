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
        flex
        h-full
        flex-col
        rounded-[24px]
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-slate-300
        hover:shadow-md
      "
    >
      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">
        <Icon className="h-5 w-5 text-[#123A63]" />
      </div>

      {/* Title */}
      <h3 className="mt-8 text-[30px] font-bold leading-tight tracking-[-0.02em] text-[#102A56]">
        {title}
      </h3>

      {/* Divider */}
      <div className="my-6 h-px w-full bg-slate-200" />

      {/* Description */}
      <p className="flex-1 text-[16px] leading-8 text-slate-600">
        {description}
      </p>

      {/* CTA */}
      <Link
        href={`/services/${slug}`}
        className="
          mt-8
          inline-flex
          items-center
          gap-2
          text-sm
          font-semibold
          text-[#123A63]
          transition-all
          duration-300
          group-hover:gap-3
        "
      >
        Learn More
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}