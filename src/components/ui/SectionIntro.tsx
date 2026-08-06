import SectionHeader from "./SectionHeader";
import SectionTitle from "./SectionTitle";

interface SectionIntroProps {
  eyebrow: string;

  title: string;

  description?: string;

  align?: "left" | "center";

  className?: string;

  titleSize?: "lg" | "md" | "sm";
}

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  titleSize = "lg",
}: SectionIntroProps) {
  return (
    <div
      className={`
        flex
        flex-col

        ${
          align === "center"
            ? "items-center text-center"
            : "items-start text-left"
        }

        ${className}
      `}
    >
      <SectionHeader
        align={align}
        variant="lines"
      >
        {eyebrow}
      </SectionHeader>

      <SectionTitle
        size={titleSize}
        align={align}
        className="mt-5"
      >
        {title}
      </SectionTitle>

      {description && (
        <p
          className="
            mt-6
            max-w-[700px]
            text-[18px]
            leading-8
            text-slate-600
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}