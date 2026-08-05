import clsx from "clsx";

interface BackgroundGridProps {
  className?: string;
  opacity?: number;
}

export default function BackgroundGrid({
  className,
  opacity = 0.18,
}: BackgroundGridProps) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        "pointer-events-none absolute inset-0 bg-[url('/images/backgrounds/blueprint-grid.svg')] bg-repeat",
        className
      )}
      style={{
        opacity,
      }}
    />
  );
}