import Link from "next/link";

interface ExecutiveButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
}

export default function ExecutiveButton({
  children,
  href,
  variant = "primary",
  external = false,
}: ExecutiveButtonProps) {
  const className =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-xl bg-[#123A63] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F274A]"
      : "inline-flex items-center justify-center rounded-xl border-2 border-[#123A63] px-8 py-4 text-base font-semibold text-[#123A63] transition-all duration-300 hover:bg-[#123A63] hover:text-white";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}