import { ReactNode } from "react";

interface StatisticCardProps {
  value: string;

  label: string;

  icon?: ReactNode;

  className?: string;

  bordered?: boolean;

  align?: "left" | "center";

  size?: "sm" | "md" | "lg";
}

export default function StatisticCard({
  value,
  label,
  icon,
  className = "",
  bordered = true,
  align = "center",
  size = "md",
}: StatisticCardProps) {
  const alignment = {
    left: "items-start text-left",
    center: "items-center text-center",
  };

  const sizes = {
    sm: {
      value: "text-[42px]",
      label: "text-[15px]",
      icon: "h-9 w-9",
      padding: "px-6 py-8",
    },

    md: {
      value: "text-[56px]",
      label: "text-[17px]",
      icon: "h-11 w-11",
      padding: "px-8 py-10",
    },

    lg: {
      value: "text-[64px]",
      label: "text-[18px]",
      icon: "h-12 w-12",
      padding: "px-10 py-12",
    },
  };

  return (
    <div
      className={`
        flex
        flex-col
        justify-center

        ${alignment[align]}
        ${sizes[size].padding}

        ${
          bordered
            ? "border border-[#E8EEF8]"
            : ""
        }

        ${className}
      `}
    >
      {/* Icon */}

      {icon && (
        <div
          className={`
            mb-6
            text-[#2563EB]

            ${sizes[size].icon}
          `}
        >
          {icon}
        </div>
      )}

      {/* Value */}

      <span
        className={`
          font-bold
          leading-none
          text-[#102A56]

          ${sizes[size].value}
        `}
      >
        {value}
      </span>

      {/* Label */}

      <p
        className={`
          mt-4
          font-medium
          leading-8
          text-slate-600

          ${sizes[size].label}
        `}
      >
        {label}
      </p>
    </div>
  );
}
