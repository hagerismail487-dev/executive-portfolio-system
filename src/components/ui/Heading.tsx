import { ReactNode } from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export default function Heading({
  title,
  subtitle,
  align = "left",
  children,
}: HeadingProps) {
  return (
    <div
      className={`flex flex-col gap-5 ${
        align === "center" ? "items-center text-center" : ""
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#07111F]">
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-lg leading-8 text-slate-500">
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
}