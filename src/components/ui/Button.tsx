import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  href?: string;

  external?: boolean;

  variant?: "primary" | "secondary" | "outline";

  size?: "sm" | "md" | "lg";

  iconLeft?: ReactNode;

  iconRight?: ReactNode;

  fullWidth?: boolean;

  className?: string;
}

export default function Button({
  children,
  href,
  external = false,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {

  const baseClass = `
    inline-flex

    items-center
    justify-center
    gap-2

rounded-lg

    font-semibold

    tracking-[0.01em]

    transition-all
    duration-300

    hover:-translate-y-1

    active:translate-y-0

    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#2563EB]
    focus-visible:ring-offset-2

    disabled:pointer-events-none
    disabled:opacity-60
  `;

  const variants = {
    primary: `
      border
      border-[#123A63]

      bg-[#123A63]

      text-white

      shadow-md

      hover:border-[#0F2F52]
      hover:bg-[#0F2F52]

      hover:shadow-lg
    `,

    secondary: `
      border
      border-[#EEF5FF]

      bg-[#EEF5FF]

      text-[#123A63]

      hover:bg-[#DCEBFF]
    `,

    outline: `
      border
      border-[#123A63]

      bg-transparent

      text-[#123A63]

      hover:bg-[#123A63]
      hover:text-white
    `,
  };
const sizes = {
  sm: `
    px-3.5
    py-2

    text-[12px]
  `,

  md: `
    px-5
    py-3

    text-[14px]
  `,

  lg: `
    px-7
    py-3.5

    text-[15px]
  `,
};

  const classes = `
    ${baseClass}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;
    const content = (
    <>

      {iconLeft && (

        <span
          className={
            variant === "primary"
              ? "flex items-center text-white"
              : "flex items-center text-current"
          }
        >
          {iconLeft}
        </span>

      )}

      <span
        className={
          variant === "primary"
            ? "text-white"
            : variant === "outline"
              ? "text-[#123A63] transition-colors duration-300 group-hover:text-white"
              : "text-[#123A63]"
        }
      >
        {children}
      </span>

      {iconRight && (

        <span
          className={
            variant === "primary"
              ? "flex items-center text-white"
              : "flex items-center text-current"
          }
        >
          {iconRight}
        </span>

      )}

    </>
  );

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
      >
        {content}
      </Link>
    );
  }

  return (
      <button
        className={classes}
        {...props}
      >
        {content}
      </button>
  );
}
