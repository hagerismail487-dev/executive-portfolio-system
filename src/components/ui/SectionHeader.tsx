import { ReactNode } from "react";

interface SectionHeaderProps {
  children: ReactNode;

  align?: "left" | "center";

  variant?: "bar" | "lines";

  className?: string;
}

export default function SectionHeader({
  children,
  align = "left",
  variant = "bar",
  className = "",
}: SectionHeaderProps) {
  const alignment = {
    left: "justify-start",
    center: "justify-center",
  };

  if (variant === "lines") {
    return (
      <div
        className={`
          flex
          items-center
          gap-6

          ${alignment[align]}
          ${className}
        `}
      >
        <div className="h-px w-20 bg-[#123A63]" />

        <span
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.45em]
            text-[#123A63]
          "
        >
          {children}
        </span>

        <div className="h-px w-20 bg-[#123A63]" />
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
      <div className="h-10 w-[4px] rounded-full bg-[#2563EB]" />

      <span
        className="
          text-sm
          font-bold
          uppercase
          tracking-[0.38em]
          text-[#2563EB]
        "
      >
        {children}
      </span>
    </div>
  );
}