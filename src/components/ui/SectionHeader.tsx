import { ReactNode } from "react";

interface SectionHeaderProps {
  children: ReactNode;

  align?: "left" | "center";

  className?: string;
}

export default function SectionHeader({
  children,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignment = {
    left: "justify-start",
    center: "justify-center",
  };

  return (
    <div
      className={`
        flex
        items-center
        gap-8

        ${alignment[align]}
        ${className}
      `}
    >
      <div className="h-px w-20 bg-[#2563EB]" />

      <span
        className="
          text-sm
          font-semibold
          uppercase
          tracking-[0.45em]
          text-[#2563EB]
        "
      >
        {children}
      </span>

      <div className="h-px w-20 bg-[#2563EB]" />

    </div>
  );
}