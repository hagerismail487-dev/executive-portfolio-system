interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div
      className={
        isCenter
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      {/* Eyebrow */}

      <div
        className={`flex items-center gap-5 ${
          isCenter ? "justify-center" : "justify-start"
        }`}
      >
        <div className="h-px w-20 bg-[#123A63]" />

        <span className="text-sm font-semibold uppercase tracking-[0.45em] text-[#123A63]">
          {eyebrow}
        </span>

        <div className="h-px w-20 bg-[#123A63]" />
      </div>

      {/* Title */}

      <h2 className="mt-8 text-5xl font-bold tracking-[-0.04em] text-[#102A56] lg:text-6xl">
        {title}
      </h2>

      {/* Description */}

      {description && (
        <p className="mt-8 text-xl leading-9 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}