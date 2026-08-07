import clsx from "clsx";

type GlowPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "center";

interface BackgroundGlowProps {
  position?: GlowPosition;
  size?: "sm" | "md" | "lg";
  opacity?: number;
  className?: string;
}

export default function BackgroundGlow({
  position = "top-right",
  size = "md",
  opacity = 0.9,
  className,
}: BackgroundGlowProps) {
  const positions = {
    "top-right": "-right-32 -top-32",
    "top-left": "-left-32 -top-32",
    "bottom-right": "-right-32 -bottom-32",
    "bottom-left": "-left-32 -bottom-32",
    center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  const sizes = {
    sm: "h-72 w-72",
    md: "h-[420px] w-[420px]",
    lg: "h-[560px] w-[560px]",
  };

  return (
    <div
      aria-hidden="true"
      className={clsx(
        "pointer-events-none absolute bg-[url('/images/backgrounds/radial-glow.svg')] bg-contain bg-no-repeat",
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