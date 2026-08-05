import Container from "@/components/ui/Container";

interface WhyWorkWithMeProps {
  title?: string;
  description: string;
}

export default function WhyWorkWithMe({
  title = "Why Work With Me",
  description,
}: WhyWorkWithMeProps) {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-10 shadow-sm lg:p-16">
          {/* Section Header */}
          <div className="flex items-center gap-5">
            <div className="h-px w-16 bg-[#123A63]" />

            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#123A63]">
              Why Choose Me
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-8 text-4xl font-bold tracking-[-0.03em] text-[#102A56] lg:text-5xl">
            {title}
          </h2>

          {/* Accent */}
          <div className="mt-6 h-1 w-20 rounded-full bg-[#2563EB]" />

          {/* Description */}
          <p className="mt-6 text-lg leading-9 text-slate-600 lg:text-xl">
            {description}
          </p>

          {/* Highlights */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#2563EB]">Data</div>

              <p className="mt-3 text-sm font-medium text-slate-600">
                Business-Driven Analysis
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#2563EB]">BI</div>

              <p className="mt-3 text-sm font-medium text-slate-600">
                Executive Reporting
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#2563EB]">MIS</div>

              <p className="mt-3 text-sm font-medium text-slate-600">
                Performance Insights
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}