import { ReactNode } from "react";

interface KPICardProps {
  title: string;

  value: string;

  subtitle?: string;

  trend?: string;

  trendType?: "positive" | "negative" | "neutral";

  icon?: ReactNode;

  className?: string;
}

export default function KPICard({
  title,
  value,
  subtitle,
  trend,
  trendType = "positive",
  icon,
  className = "",
}: KPICardProps) {
  const trendStyles = {
    positive: `
      bg-[#ECFDF3]
      text-[#16A34A]
    `,

    negative: `
      bg-[#FEF2F2]
      text-[#DC2626]
    `,

    neutral: `
      bg-[#F3F4F6]
      text-[#475569]
    `,
  };

  return (
    <div
      className={`
        relative

        overflow-hidden

        rounded-[28px]

        border
        border-[#E8EEF8]

        bg-white

        p-6

        shadow-[0_18px_45px_rgba(18,58,99,0.06)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#D7E6FB]
        hover:shadow-[0_24px_55px_rgba(18,58,99,0.10)]

        ${className}
      `}
    >
      {/* Header */}

      <div className="flex items-start justify-between">

        <div>

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-slate-500
            "
          >
            {title}
          </p>

          <h3
            className="
              mt-3
              text-[44px]
              font-bold
              leading-none
              tracking-[-0.04em]
              text-[#102A56]
            "
          >
            {value}
          </h3>

        </div>

        {icon && (

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center

              rounded-2xl

              bg-[#EEF5FF]

              text-[#2563EB]
            "
          >
            {icon}
          </div>

        )}

      </div>

      {/* Footer */}

      {(subtitle || trend) && (

        <div className="mt-6 flex items-center justify-between gap-4">

          <p
            className="
              text-sm
              leading-6
              text-slate-500
            "
          >
            {subtitle}
          </p>

          {trend && (

            <span
              className={`
                rounded-full

                px-3
                py-1.5

                text-xs
                font-semibold

                ${trendStyles[trendType]}
              `}
            >
              {trend}
            </span>

          )}

        </div>

      )}

    </div>
  );
}