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
    <section className="bg-white py-16 lg:py-20">
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

          {/* Desktop Timeline */}
          <div className="relative mt-16 hidden xl:block">
            <div className="absolute left-0 right-0 top-5 h-px bg-slate-300" />

            <div className="grid grid-cols-7 gap-6">
              {steps.map((step, index) => (
                <div key={step.title} className="relative text-center">
                  {/* Circle */}
                  <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#123A63] text-sm font-bold text-white shadow-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-base font-semibold leading-6 text-[#102A56]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet & Mobile */}
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:hidden">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#123A63] text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#102A56]">
                  {step.title}
                </h3>

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