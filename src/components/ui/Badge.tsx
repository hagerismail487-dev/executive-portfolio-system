import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;

  variant?: "primary" | "secondary" | "outline";

  size?: "sm" | "md" | "lg";

  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
}: BadgeProps) {
  const variants = {
    primary: `
      border
      border-[#DCE8FB]
      bg-[#F7FAFF]
      text-[#2563EB]
    `,

    secondary: `
      border
      border-[#E8EEF7]
      bg-white
      text-[#123A63]
    `,

    outline: `
      border
      border-[#2563EB]
      bg-transparent
      text-[#2563EB]
    `,
  };

  const sizes = {
    sm: `
      px-2.5
      py-1

      text-[10px]
      tracking-[0.14em]
    `,

    md: `
      px-3.5
      py-1.5

      text-[11px]
      tracking-[0.18em]
    `,

    lg: `
      px-4
      py-2

      text-[12px]
      tracking-[0.22em]
    `,
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center

        rounded-full

        font-semibold
        uppercase

        whitespace-nowrap

        transition-all
        duration-300

        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}