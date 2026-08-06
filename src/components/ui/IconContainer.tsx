import { ReactNode } from "react";

interface IconContainerProps {
  children: ReactNode;

  variant?: "primary" | "secondary" | "glass";

  size?: "sm" | "md" | "lg" | "xl";

  rounded?: "xl" | "2xl" | "full";

  className?: string;
}

export default function IconContainer({
  children,
  variant = "primary",
  size = "md",
  rounded = "2xl",
  className = "",
}: IconContainerProps) {
  const variants = {
    primary: `
      bg-[#EEF5FF]
      text-[#2563EB]
    `,

    secondary: `
      bg-white
      border
      border-[#E6EDF8]
      text-[#123A63]
    `,

    glass: `
      bg-white/70
      backdrop-blur-md
      border
      border-white/50
      text-[#123A63]
    `,
  };

  const sizes = {
    sm: `
      h-10
      w-10
      [&>svg]:h-5
      [&>svg]:w-5
    `,

    md: `
      h-14
      w-14
      [&>svg]:h-7
      [&>svg]:w-7
    `,

    lg: `
      h-16
      w-16
      [&>svg]:h-8
      [&>svg]:w-8
    `,

    xl: `
      h-20
      w-20
      [&>svg]:h-10
      [&>svg]:w-10
    `,
  };

  const radius = {
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  };

  return (
    <div
      className={`
        inline-flex
        shrink-0
        items-center
        justify-center

        transition-all
        duration-300

        ${variants[variant]}
        ${sizes[size]}
        ${radius[rounded]}

        ${className}
      `}
    >
      {children}
    </div>
  );
}
