"use client";

import { useState } from "react";

import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";

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

    <Section className="bg-[#FBFCFE]">

      <Container>

        <div className="mx-auto max-w-[900px]">

          <SectionIntro
            eyebrow="FAQ"
            title={title}
            description="Answers to the most common questions about this professional service, its process, and expected business outcomes."
            align="center"
            className="mx-auto mb-10 max-w-[720px]"
          />

          <div className="space-y-4">
                        {items.map((item, index) => {

              const isOpen = openIndex === index;

              return (

                <div
                  key={item.question}
                  className="
                    overflow-hidden

                    rounded-[22px]

                    border
                    border-[#E8EEF7]

                    bg-white

                    transition-all
                    duration-300

                    hover:border-[#D6E5FB]
                    hover:shadow-[0_14px_34px_rgba(18,58,99,0.08)]
                  "
                >

                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="
                      flex
                      w-full

                      items-center
                      justify-between

                      px-6
                      py-5

                      text-left
                    "
                  >

                    <span
                      className="
                        text-[18px]
                        font-semibold

                        leading-7

                        tracking-[-0.02em]

                        text-[#102A56]
                      "
                    >
                      {item.question}
                    </span>

                    <span
                      className="
                        text-[28px]
                        font-light

                        text-[#2563EB]

                        transition-transform
                        duration-300
                      "
                    >
                      {isOpen ? "−" : "+"}
                    </span>

                  </button>

                  {isOpen && (

                    <div
                      className="
                        border-t
                        border-[#EEF3FA]

                        px-6
                        pb-6
                        pt-5
                      "
                    >

                      <p
                        className="
                          text-[16px]
                          leading-8

                          text-slate-600
                        "
                      >
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

    </Section>

  );
}