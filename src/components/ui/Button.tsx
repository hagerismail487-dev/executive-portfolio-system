import Link from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: ReactNode;

  href?: string;

  external?: boolean;

  download?: boolean | string;

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
  download,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseClass = `
    group
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
        <span className="flex items-center text-current">
          {iconLeft}
        </span>
      )}

      <span className="text-current">
        {children}
      </span>

      {iconRight && (
        <span className="flex items-center text-current">
          {iconRight}
        </span>
      )}
    </>
  );

  /*
   * =========================================================
   * DOWNLOAD / EXTERNAL LINK
   * =========================================================
   *
   * Important:
   * If download exists, we MUST use a normal <a>.
   * Next.js <Link> is not used for downloadable files.
   */

  if (href && download) {
    return (
      <a
        href={href}
        download={download}
        className={classes}
      >
        {content}
      </a>
    );
  }

  /*
   * =========================================================
   * EXTERNAL LINK
   * =========================================================
   */

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

  /*
   * =========================================================
   * INTERNAL NEXT.JS LINK
   * =========================================================
   */

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

  /*
   * =========================================================
   * BUTTON
   * =========================================================
   */

  return (
    <button
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
}