import { ReactNode } from "react";

interface SectionHeaderProps {
  children: ReactNode;

  align?: "left" | "center";

  variant?: "lines" | "bar";

  className?: string;
}

export default function SectionHeader({
  children,
  align = "center",
  variant = "lines",
  className = "",
}: SectionHeaderProps) {
  const alignment = {
    left: "justify-start",
    center: "justify-center",
  };

  if (variant === "bar") {
    return (
      <div
        className={`
          flex
          items-center
          gap-3

          ${alignment[align]}
          ${className}
        `}
      >
        <div className="h-7 w-[3px] rounded-full bg-[#2563EB]" />

        <span
          className="
            text-[12px]
            font-bold
            uppercase
            tracking-[0.28em]
            text-[#2563EB]
          "
        >
          {children}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`
        flex
        items-center
        gap-5

        ${alignment[align]}
        ${className}
      `}
    >
      <div className="h-px w-12 bg-[#2563EB]" />

      <span
        className="
          text-[12px]
          font-semibold
          uppercase
          tracking-[0.32em]
          text-[#2563EB]
        "
      >
        {children}
      </span>

      <div className="h-px w-12 bg-[#2563EB]" />
    </div>
  );
}