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
      text-[28px]
      leading-[1.08]

      sm:text-[32px]
      md:text-[36px]
      lg:text-[40px]
      xl:text-[44px]
    `,

    md: `
      text-[24px]
      leading-[1.1]

      sm:text-[28px]
      md:text-[31px]
      lg:text-[34px]
      xl:text-[38px]
    `,

    sm: `
      text-[20px]
      leading-[1.15]

      sm:text-[22px]
      md:text-[24px]
      lg:text-[27px]
      xl:text-[30px]
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
        tracking-[-0.03em]
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