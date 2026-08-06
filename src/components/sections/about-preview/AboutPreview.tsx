import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import ExecutiveButton from "@/components/ui/ExecutiveButton";

import data from "./data";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* =============================== */}
          {/* Left Side */}
          {/* =============================== */}

          <div>
            {/* Label */}

            <div className="flex items-center gap-4">
              <div className="h-10 w-1 rounded-full bg-[#2563EB]" />

              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#2563EB]">
                {data.hero.label}
              </span>
            </div>

            {/* Quote */}

            <blockquote className="mt-8 border-l-4 border-[#E5EEFF] pl-6">
              <p className="text-lg italic leading-8 text-slate-600">
                "{data.quote.text}"
              </p>

              <footer className="mt-3 font-semibold text-[#123A63]">
                — {data.quote.author}
              </footer>
            </blockquote>

            {/* Headline */}

            <h2 className="mt-10 text-5xl font-bold leading-tight tracking-[-0.04em] text-[#102A56] lg:text-6xl">
              {data.hero.headline}
            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-[#2563EB]" />

            {/* Story */}

            <div className="mt-10 space-y-6">
              {data.hero.story.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-9 text-slate-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Closing */}

            <p className="mt-10 text-lg font-semibold text-[#123A63]">
              {data.hero.closingLine}
            </p>

            {/* CTA */}

            <div className="mt-12">
              <ExecutiveButton href={data.cta.href}>
                {data.cta.text}
              </ExecutiveButton>
            </div>
          </div>

          {/* =============================== */}
          {/* Right Side */}
          {/* =============================== */}

          <div className="overflow-hidden rounded-[34px] border border-[#E8EEF8] bg-white shadow-[0_30px_70px_rgba(18,58,99,0.08)]">

            {/* Photo + Cards */}

            <div className="grid gap-8 p-8 lg:grid-cols-[1fr_250px]">

              {/* Portrait */}

              <div className="relative flex items-end justify-center rounded-3xl bg-[#F8FBFF]">

                {/* Replace later */}

                <div className="flex h-[520px] w-full items-center justify-center">
                  <span className="text-sm uppercase tracking-[0.35em] text-slate-400">
                    Professional Portrait
                  </span>
                </div>

                {/*
                <Image
                  src="/images/about/hager.png"
                  alt="Hager Ismail"
                  fill
                  className="object-contain"
                />
                */}
              </div>

              {/* Executive Cards */}

              <div className="space-y-5">
                {data.executiveCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-[#E7EEF8] bg-white p-6"
                  >
                    <h3 className="text-lg font-bold text-[#102A56]">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics */}

            <div className="grid grid-cols-2 border-t border-[#E8EEF8] lg:grid-cols-4">
              {data.statistics.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center px-6 py-10 text-center"
                >
                  <span className="text-5xl font-bold text-[#123A63]">
                    {item.value}
                  </span>

                  <span className="mt-3 text-sm font-medium leading-6 text-slate-600">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Profile */}

            <div className="border-t border-[#E8EEF8] px-8 py-7 text-center">
              <h3 className="text-2xl font-bold text-[#102A56]">
                {data.profile.name}
              </h3>

              <p className="mt-2 text-base text-slate-600">
                {data.profile.title}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}