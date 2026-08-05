import Container from "@/components/ui/Container";

interface ServiceHeroProps {
  title: string;
  heroDescription: string;
}

export default function ServiceHero({
  title,
  heroDescription,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#FBFCFE] py-24 lg:py-32">

      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top Right Glow */}

        <div className="absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full bg-[#EEF5FF] opacity-60 blur-3xl" />

        {/* Bottom Left Glow */}

        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#F4F8FF] opacity-80 blur-3xl" />

      </div>

      <Container>

        <div className="relative z-10 max-w-5xl">

          {/* Eyebrow */}

          <div className="flex items-center gap-6">

            <div className="h-px w-20 bg-[#123A63]" />

            <span className="text-sm font-semibold uppercase tracking-[0.45em] text-[#123A63]">
              Professional Service
            </span>

          </div>

          {/* Title */}

          <h1 className="mt-8 text-[44px] font-bold tracking-[-0.04em] text-[#102A56] lg:text-[68px]">

            {title}

          </h1>

          {/* Accent */}

          <div className="mt-8 h-1 w-28 rounded-full bg-[#2563EB]" />

          {/* Description */}

          <p className="mt-10 max-w-3xl text-xl leading-[1.9] text-slate-600">

            {heroDescription}

          </p>

        </div>

      </Container>

    </section>
  );
}