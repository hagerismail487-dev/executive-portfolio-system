interface ServiceHeroProps {
  title: string;
  heroDescription: string;
}

export default function ServiceHero({
  title,
  heroDescription,
}: ServiceHeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#123A63]">
        Professional Service
      </span>

      <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-[-0.04em] text-[#102A56] md:text-6xl">
        {title}
      </h1>

      <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
        {heroDescription}
      </p>
    </section>
  );
}
