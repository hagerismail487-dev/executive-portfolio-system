import Container from "@/components/ui/Container";

interface TechnologiesProps {
  title?: string;
  technologies: string[];
}

export default function Technologies({
  title = "Technologies",
  technologies,
}: TechnologiesProps) {
  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex items-center gap-5">
            <div className="h-px w-16 bg-[#123A63]" />

            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#123A63]">
              Technical Stack
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-8 text-4xl font-bold tracking-[-0.03em] text-[#102A56] lg:text-5xl">
            {title}
          </h2>

          {/* Accent */}
          <div className="mt-6 h-1 w-20 rounded-full bg-[#2563EB]" />

          {/* Technologies */}
          <div className="mt-14 flex flex-wrap gap-4">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold tracking-wide text-[#102A56] transition-all duration-300 hover:border-[#2563EB] hover:bg-[#EEF5FF] hover:text-[#2563EB]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
