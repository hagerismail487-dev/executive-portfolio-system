"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { serviceDetails } from "@/data/service-details";

type FAQSectionProps = {
  serviceSlug: string;
};

export default function FAQSection({ serviceSlug }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const service = serviceDetails.find(
    (item) => item.slug === serviceSlug
  );

  if (!service || service.faqs.length === 0) {
    return null;
  }

  return (
    <section className="border-b border-[#E8EEF7] bg-white">
      <div className="mx-auto max-w-[1140px] px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="mb-3">
              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#2563EB]
                "
              >
                Frequently Asked Questions
              </span>
            </div>

            <h2
              className="
                max-w-[420px]
                text-2xl
                font-semibold
                tracking-[-0.02em]
                text-[#061C3D]
                sm:text-3xl
              "
            >
              Questions You May Have
            </h2>

            <p className="mt-4 max-w-[420px] text-sm leading-7 text-[#64748B]">
              A few common questions about the service, approach, and delivery.
            </p>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="
                    overflow-hidden
                    rounded-[18px]
                    border
                    border-[#E0EAF7]
                    bg-[#FBFCFE]
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-6
                      px-5
                      py-5
                      text-left
                    "
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold leading-6 text-[#061C3D]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#2563EB] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#E8EEF7] px-5 pb-5 pt-4">
                      <p className="text-sm leading-7 text-[#64748B]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
