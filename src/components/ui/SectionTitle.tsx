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
      text-[44px]
      leading-[1.02]

      md:text-[56px]
      xl:text-[68px]
    `,

    md: `
      text-[36px]
      leading-[1.05]

      md:text-[46px]
      xl:text-[56px]
    `,

    sm: `
      text-[30px]
      leading-[1.08]

      md:text-[36px]
      xl:text-[42px]
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
        tracking-[-0.05em]
        text-[#102A56]

        ${sizes[size]}
        ${alignment[align]}
        ${className}
      `}
    >
      {children}
    </Component>
  );
}