import clsx from "clsx";

interface ExecutiveBadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export default function ExecutiveBadge({
  children,
  variant = "primary",
  size = "md",
  className,
}: ExecutiveBadgeProps) {
  const variants = {
    primary:
      "bg-[#EEF5FF] text-[#123A63] border border-[#DCE7F5]",

    secondary:
      "bg-[#102A56] text-white border border-[#102A56]",

    outline:
      "bg-white text-[#123A63] border border-[#DCE7F5]",
  };

  const sizes = {
    sm: "px-3 py-1 text-[11px] tracking-[0.18em]",

    md: "px-5 py-2 text-xs tracking-[0.25em]",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full font-semibold uppercase transition-all duration-300",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}