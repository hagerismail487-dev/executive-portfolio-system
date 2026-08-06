import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;

  as?: "h1" | "h2" | "h3";

  align?: "left" | "center";

  size?: "lg" | "md" | "sm";

  className?: string;
}

export default function SectionTitle({
  children,
  as = "h2",
  align = "left",
  size = "lg",
  className = "",
}: SectionTitleProps) {
  const Component = as;

  const sizes = {
    lg: `
      text-[30px]
      leading-[1.1]

      sm:text-[34px]
      md:text-[40px]
      lg:text-[44px]
      xl:text-[48px]
    `,

    md: `
      text-[26px]
      leading-[1.12]

      sm:text-[30px]
      md:text-[34px]
      lg:text-[38px]
      xl:text-[42px]
    `,

    sm: `
      text-[22px]
      leading-[1.15]

      sm:text-[24px]
      md:text-[27px]
      lg:text-[30px]
      xl:text-[32px]
    `,
  };

  const alignment = {
    left: "text-left",
    center: "text-center",
  };

  return (
    <Component
      className={`
        font-bold
        tracking-[-0.035em]
        text-[#102A56]
        text-balance

        ${sizes[size]}
        ${alignment[align]}
        ${className}
      `}
    >
      {children}
    </Component>
  );
}