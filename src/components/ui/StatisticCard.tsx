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
      value: "text-[32px]",
      label: "text-[13px]",
      icon: "h-8 w-8",
      padding: "px-5 py-6",
    },

    md: {
      value: "text-[42px]",
      label: "text-[15px]",
      icon: "h-9 w-9",
      padding: "px-6 py-7",
    },

    lg: {
      value: "text-[50px]",
      label: "text-[16px]",
      icon: "h-10 w-10",
      padding: "px-7 py-8",
    },
  };

  return (
    <div
      className={`
        flex
        flex-col
        justify-center

        rounded-[20px]

        bg-white

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_16px_40px_rgba(18,58,99,0.06)]

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
              {/* ================================= */}
      {/* Icon */}
      {/* ================================= */}

      {icon && (

        <div
          className={`
            mb-5

            flex
            items-center
            justify-center

            text-[#2563EB]

            ${sizes[size].icon}
          `}
        >
          {icon}
        </div>

      )}

      {/* ================================= */}
      {/* Value */}
      {/* ================================= */}

      <span
        className={`
          font-bold

          leading-none

          tracking-[-0.03em]

          text-[#102A56]

          ${sizes[size].value}
        `}
      >
        {value}
      </span>

      {/* ================================= */}
      {/* Label */}
      {/* ================================= */}

      <p
        className={`
          mt-3

          font-medium

          leading-7

          text-slate-600

          ${sizes[size].label}
        `}
      >
        {label}
      </p>
          </div>
  );
}