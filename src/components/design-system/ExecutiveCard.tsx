import clsx from "clsx";

interface ExecutiveCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export default function ExecutiveCard({
  children,
  className,
  hover = true,
  padding = "lg",
}: ExecutiveCardProps) {
  const paddings = {
    sm: "p-5",
    md: "p-7",
    lg: "p-9",
  };

  return (
    <article
      className={clsx(
        "relative overflow-hidden rounded-[28px]",
        "border border-[#E7EEF8]",
        "bg-white",
        "shadow-[0_18px_45px_rgba(18,58,99,0.05)]",
        "transition-all duration-500",
        hover &&
          "hover:-translate-y-2 hover:border-[#D6E5FB] hover:shadow-[0_30px_70px_rgba(18,58,99,0.10)]",
        paddings[padding],
        className
      )}
    >
      {/* Executive Glow */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-36
          w-36
          rounded-full
          bg-[#EEF5FF]
          opacity-0
          blur-3xl
          transition-all
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </article>
  );
}