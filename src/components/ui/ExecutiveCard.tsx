import { ReactNode } from "react";

interface ExecutiveCardProps {
  title: string;

  description: string;

  icon?: ReactNode;

  children?: ReactNode;

  className?: string;

  hover?: boolean;
}

export default function ExecutiveCard({
  title,
  description,
  icon,
  children,
  className = "",
  hover = true,
}: ExecutiveCardProps) {
  return (
    <div
      className={`
        rounded-[22px]

        border
        border-[#E6EDF8]

        bg-white

        p-6

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

        ${className}
      `}
    >
      <div className="flex items-start gap-5">

        {/* Icon */}

        {icon && (
          <div
            className="
              flex
              h-14
              w-14
              shrink-0
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

        {/* Content */}

        <div className="flex-1">

          <h3
            className="
              text-[22px]
              font-bold
              leading-8
              text-[#102A56]
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-3
              text-[16px]
              leading-8
              text-slate-600
            "
          >
            {description}
          </p>

          {children && (
            <div className="mt-5">
              {children}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
