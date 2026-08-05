import Container from "@/components/ui/Container";

interface DeliverablesProps {
  title?: string;
  items: string[];
}

export default function Deliverables({
  title = "Deliverables",
  items,
}: DeliverablesProps) {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex items-center gap-5">
            <div className="h-px w-16 bg-[#123A63]" />

            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#123A63]">
              What You Receive
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-6 text-4xl font-bold tracking-[-0.03em] text-[#102A56] lg:text-5xl">
            {title}
          </h2>

          {/* Accent */}
          <div className="mt-5 h-1 w-20 rounded-full bg-[#2563EB]" />

          {/* Deliverables */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB] hover:shadow-lg"
              >
                {/* Check Icon */}
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EEF5FF] text-sm font-bold text-[#2563EB]">
                  ✓
                </div>

                {/* Text */}
                <p className="text-sm font-medium leading-6 text-[#102A56]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}