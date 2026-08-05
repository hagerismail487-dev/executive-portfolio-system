import Container from "@/components/ui/Container";

interface BusinessOutcomesProps {
  title?: string;
  outcomes: string[];
}

export default function BusinessOutcomes({
  title = "Business Outcomes",
  outcomes,
}: BusinessOutcomesProps) {
  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex items-center gap-5">
            <div className="h-px w-16 bg-[#123A63]" />

            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#123A63]">
              Business Impact
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-8 text-4xl font-bold tracking-[-0.03em] text-[#102A56] lg:text-5xl">
            {title}
          </h2>

          {/* Accent */}
          <div className="mt-6 h-1 w-20 rounded-full bg-[#2563EB]" />

          {/* Outcome Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB] hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF5FF] text-xl font-bold text-[#2563EB]">
                  ↗
                </div>

                {/* Text */}
                <p className="mt-6 text-lg font-medium leading-8 text-[#102A56]">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
