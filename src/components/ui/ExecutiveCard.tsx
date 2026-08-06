import { PropsWithChildren } from "react";

interface ExecutiveCardProps extends PropsWithChildren {
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

    sm: "p-5",

    md: "p-8",

    lg: "p-10",
  };

  return (
    <div
      className={`
        relative

        overflow-hidden

        rounded-[22px]

        border
        border-[#E6EDF8]

        bg-white

        transition-all
        duration-300

        ${
          hover
            ? `
              hover:-translate-y-1
              hover:border-[#D6E5FB]
              hover:shadow-[0_18px_45px_rgba(18,58,99,0.08)]
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
