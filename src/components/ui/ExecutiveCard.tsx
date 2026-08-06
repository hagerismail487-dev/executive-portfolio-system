import { ReactNode } from "react";

interface ExecutiveCardProps {
  children: ReactNode;

  className?: string;

  hover?: boolean;

  padding?: "none" | "sm" | "md" | "lg";
}

export default function ExecutiveCard({
  children,
  className = "",
  hover = true,
  padding = "md",
}: ExecutiveCardProps) {

  const paddings = {
    none: "",

    sm: "p-4",

    md: "p-6",

    lg: "p-8",
  };

  return (
    <div
      className={`
        group

        relative

        flex
        flex-col

        h-full

        overflow-hidden

        rounded-[20px]

        border
        border-[#E6EDF8]

        bg-white

        transition-all
        duration-300

        ${
          hover
            ? `
              hover:-translate-y-1.5
              hover:border-[#D6E5FB]
              hover:shadow-[0_16px_40px_rgba(18,58,99,0.08)]
            `
            : ""
        }

        ${paddings[padding]}

        ${className}
      `}
    >
              {children}

    </div>
  );
}