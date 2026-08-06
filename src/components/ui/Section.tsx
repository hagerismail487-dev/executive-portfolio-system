import { ReactNode } from "react";

import Container from "./Container";

interface SectionProps {
  children: ReactNode;

  id?: string;

  className?: string;

  background?: "default" | "white" | "light";
}

export default function Section({
  children,
  id,
  className = "",
  background = "default",
}: SectionProps) {
  const backgrounds = {
    default: "bg-[#FAFBFD]",

    white: "bg-white",

    light: "bg-[#F8FBFF]",
  };

  return (
    <section
      id={id}
      className={`
        relative
        overflow-hidden

        py-14
        md:py-16
        lg:py-18
        xl:py-20

        ${backgrounds[background]}

        ${className}
      `}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}