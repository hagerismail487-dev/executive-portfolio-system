import Container from "@/components/ui/Container";
import SectionBackground from "@/components/ui/SectionBackground";

interface SectionWrapperProps {
  children: React.ReactNode;
}

export default function SectionWrapper({
  children,
}: SectionWrapperProps) {

  return (
    <section
      className="
        relative

        overflow-hidden

        bg-[#FBFCFE]

        py-16
        lg:py-20
      "
    >

      <SectionBackground />

      <Container>

        <div
          className="
            relative

            z-10
          "
        >
                    {children}

        </div>

      </Container>

    </section>
  );
}