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
        className="mt-3"
      >
        {title}
      </SectionTitle>

      {description && (
        <p
          className="
            mt-4
            max-w-[600px]

            text-[15px]
            leading-7

            md:text-[16px]
            md:leading-8

            text-slate-600
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}