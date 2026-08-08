import SectionHeader from "./SectionHeader";
import SectionTitle from "./SectionTitle";

interface SectionIntroProps {
  eyebrow: string;

  title: string;

  description?: string;

  align?: "left" | "center";

  className?: string;

  titleSize?: "lg" | "md" | "sm";

  variant?: "light" | "dark";
}

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  titleSize = "lg",
  variant = "light",
}: SectionIntroProps) {
  const isDark = variant === "dark";

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
      {/* ========================================= */}
      {/* Eyebrow */}
      {/* ========================================= */}

      <SectionHeader
        align={align}
        variant="lines"
        className={
          isDark
            ? "!text-[#5FA0FF]"
            : ""
        }
      >
        {eyebrow}
      </SectionHeader>

      {/* ========================================= */}
      {/* Title */}
      {/* ========================================= */}

      <SectionTitle
        size={titleSize}
        align={align}
        className={`
          mt-3

          ${
            isDark
              ? "!text-white"
              : "!text-[#102A56]"
          }
        `}
      >
        {title}
      </SectionTitle>

      {/* ========================================= */}
      {/* Description */}
      {/* ========================================= */}

      {description && (
        <p
          className={`
            mt-4
            max-w-[600px]

            text-[15px]
            leading-7

            md:text-[16px]
            md:leading-8

            ${
              isDark
                ? "!text-[#D6E5F7]"
                : "!text-slate-600"
            }
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
}