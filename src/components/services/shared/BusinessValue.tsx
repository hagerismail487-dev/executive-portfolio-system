import Container from "@/components/ui/Container";

interface BusinessValueProps {
  title?: string;
  description: string;
  benefits: string[];
}

export default function BusinessValue({
  title = "Business Value",
  description,
  benefits,
}: BusinessValueProps) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex items-center gap-5">
            <div className="h-px w-16 bg-[#123A63]" />

            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#123A63]">
              Value
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-6 text-4xl font-bold tracking-[-0.03em] text-[#102A56] lg:text-5xl">
            {title}
          </h2>

          {/* Accent */}
          <div className="mt-5 h-1 w-20 rounded-full bg-[#2563EB]" />

          {/* Content */}
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            {/* Description */}
            <div>
              <p className="text-lg leading-9 text-slate-600">
                {description}
              </p>
            </div>

            {/* Benefits */}
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits?.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all duration-300 hover:border-[#2563EB] hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#123A63] text-xs font-bold text-white">
                    ✓
                  </div>

                  <p className="text-[13px] font-medium leading-6 text-[#102A56]">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}