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
      border-[#D8E6FF]
      bg-[#F5F9FF]
      text-[#2563EB]
    `,

    secondary: `
      border
      border-[#EEF3FA]
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
      px-3
      py-1.5
      text-[11px]
      tracking-[0.22em]
    `,

    md: `
      px-5
      py-2
      text-[13px]
      tracking-[0.32em]
    `,

    lg: `
      px-6
      py-2.5
      text-[14px]
      tracking-[0.35em]
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