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
      border
      border-white/50

      bg-white/70

      backdrop-blur-md

      text-[#123A63]
    `,
  };

  const sizes = {
    sm: `
      h-9
      w-9

      [&>svg]:h-4
      [&>svg]:w-4
    `,

    md: `
      h-12
      w-12

      [&>svg]:h-5
      [&>svg]:w-5
    `,

    lg: `
      h-14
      w-14

      [&>svg]:h-6
      [&>svg]:w-6
    `,

    xl: `
      h-16
      w-16

      [&>svg]:h-7
      [&>svg]:w-7
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

        group-hover:scale-105

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