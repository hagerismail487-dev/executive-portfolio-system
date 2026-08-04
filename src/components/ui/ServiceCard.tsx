import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article
      className="
        group
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-10
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
        <Icon className="h-7 w-7 text-[#123A63]" />
      </div>

      <h3 className="mt-7 text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <div className="my-6 h-px bg-slate-200" />

      <p className="leading-8 text-slate-600">
        {description}
      </p>

      <Link
        href="#"
        className="
          mt-10
          inline-flex
          items-center
          gap-2
          font-medium
          text-[#123A63]
          transition-all
          group-hover:gap-3
        "
      >
        Learn More
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
