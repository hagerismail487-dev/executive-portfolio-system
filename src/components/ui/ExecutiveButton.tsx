import Link from "next/link";

interface ExecutiveButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  icon?: React.ReactNode;
}

export default function ExecutiveButton({
  children,
  href,
  variant = "primary",
  external = false,
  icon,
}: ExecutiveButtonProps) {
  const className =
    variant === "primary"
      ? "inline-flex items-center justify-center gap-3 rounded-xl bg-[#123A63] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F274A]"
      : "inline-flex items-center justify-center gap-3 rounded-xl border-2 border-[#123A63] px-8 py-4 text-base font-semibold text-[#123A63] transition-all duration-300 hover:bg-[#123A63] hover:text-white";

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}