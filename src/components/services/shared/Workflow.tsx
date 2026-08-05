import Container from "@/components/ui/Container";
import type { WorkflowStep } from "@/types/service";

interface WorkflowProps {
  title?: string;
  steps: WorkflowStep[];
}

export default function Workflow({
  title = "Workflow",
  steps,
}: WorkflowProps) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex items-center gap-5">
            <div className="h-px w-16 bg-[#123A63]" />

            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#123A63]">
              Process
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-6 text-4xl font-bold tracking-[-0.03em] text-[#102A56] lg:text-5xl">
            {title}
          </h2>

          {/* Accent */}
          <div className="mt-5 h-1 w-20 rounded-full bg-[#2563EB]" />

          {/* Workflow Cards */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB] hover:shadow-lg"
              >
                {/* Number */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#123A63] text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-semibold text-[#102A56]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}