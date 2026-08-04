import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[#07111F] text-white border border-[#07111F] hover:bg-[#102544] hover:border-[#102544] shadow-sm hover:shadow-xl",

    secondary:
      "bg-white text-[#07111F] border border-slate-300 hover:border-[#07111F] hover:bg-slate-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        font-semibold
        tracking-wide
        transition-all
        duration-300
        ease-out
        hover:-translate-y-0.5
        active:translate-y-0
        focus:outline-none
        focus:ring-2
        focus:ring-[#07111F]/20
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
