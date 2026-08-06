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
      className={`
        flex
        flex-col

        gap-4

        ${
          align === "center"
            ? "items-center text-center"
            : "items-start text-left"
        }
      `}
    >

      <h2
        className="
          text-[32px]

          font-bold

          leading-[1.08]

          tracking-[-0.04em]

          text-[#102A56]

          sm:text-[38px]
          md:text-[44px]
          lg:text-[50px]
        "
      >
        {title}
      </h2>
            {subtitle && (

        <p
          className="
            max-w-[700px]

            text-[16px]

            leading-7

            text-slate-600
          "
        >
          {subtitle}
        </p>

      )}

      {children}

    </div>
  );
}