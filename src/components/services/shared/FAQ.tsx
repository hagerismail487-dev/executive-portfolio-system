"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import type { FAQItem } from "@/types/service";

interface FAQProps {
  title?: string;
  items: FAQItem[];
}

export default function FAQ({
  title = "Frequently Asked Questions",
  items,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="flex items-center gap-5">
            <div className="h-px w-16 bg-[#123A63]" />

            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#123A63]">
              FAQ
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-8 text-4xl font-bold tracking-[-0.03em] text-[#102A56] lg:text-5xl">
            {title}
          </h2>

          {/* Accent */}
          <div className="mt-6 h-1 w-20 rounded-full bg-[#2563EB]" />

          {/* Accordion */}
          <div className="mt-14 space-y-5">
            {items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="flex w-full items-center justify-between px-8 py-6 text-left"
                  >
                    <span className="text-lg font-semibold text-[#102A56]">
                      {item.question}
                    </span>

                    <span className="text-2xl font-light text-[#2563EB]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-8 pb-8 pt-6">
                      <p className="text-lg leading-8 text-slate-600">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}