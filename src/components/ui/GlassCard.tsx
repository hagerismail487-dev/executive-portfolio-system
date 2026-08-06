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

    sm: `
      p-4
    `,

    md: `
      p-6
    `,

    lg: `
      p-8
    `,
  };

  const radii = {
    lg: "rounded-2xl",

    xl: "rounded-[28px]",

    "2xl": "rounded-[40px]",
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

        shadow-[0_35px_90px_rgba(18,58,99,0.08)]

        transition-all
        duration-300

        ${
          hover
            ? "hover:-translate-y-1 hover:shadow-[0_45px_100px_rgba(18,58,99,0.12)]"
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