import clsx from "clsx";

type DotPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center";

interface PatternDotsProps {
  position?: DotPosition;
  opacity?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function PatternDots({
  position = "top-right",
  opacity = 0.35,
  size = "md",
  className,
}: PatternDotsProps) {
  const positions = {
    "top-left": "left-8 top-8",
    "top-right": "right-8 top-8",
    "bottom-left": "left-8 bottom-8",
    "bottom-right": "right-8 bottom-8",
    center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  const sizes = {
    sm: "h-24 w-24",
    md: "h-40 w-40",
    lg: "h-56 w-56",
  };

  return (
    <div
      aria-hidden="true"
      className={clsx(
        "pointer-events-none absolute bg-[url('/images/backgrounds/executive-dots.svg')] bg-repeat",
        positions[position],
        sizes[size],
        className
      )}
      style={{
        opacity,
      }}
    />
  );
}