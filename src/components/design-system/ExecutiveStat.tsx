import clsx from "clsx";

interface ExecutiveStatProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export default function ExecutiveStat({
  value,
  label,
  description,
  className,
  align = "left",
}: ExecutiveStatProps) {
  return (
    <div
      className={clsx(
        "rounded-[24px] border border-[#E7EEF8] bg-white p-8 shadow-[0_12px_35px_rgba(18,58,99,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6E5FB] hover:shadow-[0_20px_50px_rgba(18,58,99,0.08)]",
        align === "center" && "text-center",
        className
      )}
    >
      {/* Value */}

      <div className="text-5xl font-bold tracking-[-0.04em] text-[#102A56]">
        {value}
      </div>

      {/* Divider */}

      <div className="mt-5 h-[3px] w-14 rounded-full bg-[#2563EB]" />

      {/* Label */}

      <h3 className="mt-6 text-lg font-semibold text-[#102A56]">
        {label}
      </h3>

      {/* Description */}

      {description && (
        <p className="mt-3 text-[15px] leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
