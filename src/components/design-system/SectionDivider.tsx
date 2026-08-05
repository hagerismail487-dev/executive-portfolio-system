import clsx from "clsx";

interface SectionDividerProps {
  className?: string;
  width?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right";
  color?: "primary" | "secondary";
}

export default function SectionDivider({
  className,
  width = "sm",
  align = "left",
  color = "primary",
}: SectionDividerProps) {
  const widths = {
    sm: "w-16",
    md: "w-24",
    lg: "w-32",
  };

  const aligns = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto",
  };

  const colors = {
    primary: "bg-[#2563EB]",
    secondary: "bg-[#123A63]",
  };

  return (
    <div
      aria-hidden="true"
      className={clsx(
        "mt-6 h-[3px] rounded-full",
        widths[width],
        aligns[align],
        colors[color],
        className
      )}
    />
  );
}