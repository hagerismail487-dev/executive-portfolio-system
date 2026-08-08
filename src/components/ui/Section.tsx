import { ReactNode } from "react";

import Container from "./Container";

interface SectionProps {
  children: ReactNode;

  id?: string;

  className?: string;

  background?: "default" | "white" | "light" | "dark";
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

    dark: "bg-[#031B3B]",
  };

  return (
    <section
      id={id}
      className={`
        relative
        overflow-hidden

        py-14
        lg:py-18

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