import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;

  className?: string;

  hover?: boolean;

  padding?: "none" | "sm" | "md" | "lg";

  radius?: "lg" | "xl" | "2xl";

  bordered?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = false,
  padding = "md",
  radius = "2xl",
  bordered = true,
}: GlassCardProps) {

  const paddings = {
    none: "",

    sm: "p-3",

    md: "p-5",

    lg: "p-6",
  };

  const radii = {
    lg: "rounded-xl",

    xl: "rounded-[18px]",

    "2xl": "rounded-[22px]",
  };

  return (
    <div
      className={`
        relative

        overflow-hidden

        bg-white

        ${
          bordered
            ? "border border-[#E8EEF7]"
            : ""
        }

        shadow-[0_16px_40px_rgba(18,58,99,0.06)]

        transition-all
        duration-300

        ${
          hover
            ? `
              hover:-translate-y-1
              hover:shadow-[0_20px_45px_rgba(18,58,99,0.08)]
            `
            : ""
        }

        ${paddings[padding]}

        ${radii[radius]}

        ${className}
      `}
    >
              {children}

    </div>
  );
}