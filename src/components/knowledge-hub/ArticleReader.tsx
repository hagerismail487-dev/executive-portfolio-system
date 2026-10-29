import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Container from "@/components/ui/Container";
import type { KnowledgeSeries } from "./series";

export type ArticleLanguage = "en" | "ar";

interface ArticleReaderProps {
  series: KnowledgeSeries;
  articleSlug: string;
  language: ArticleLanguage;
}

const languageCopy = {
  en: {
    unavailable: "This article is not available in English yet.",
    support: "English content will appear here when the article is published.",
  },
  ar: {
    unavailable: "هذا المقال غير متاح باللغة العربية بعد.",
    support: "سيظهر المحتوى العربي هنا عند نشر المقال.",
  },
} satisfies Record<ArticleLanguage, { unavailable: string; support: string }>;

export default function ArticleReader({
  series,
  articleSlug,
  language,
}: ArticleReaderProps) {
  const copy = languageCopy[language];
  const basePath = `/knowledge-hub/${series.slug}/${articleSlug}`;

  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#102A56]">
      <section className="bg-[#102A56] py-16 text-white sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <Link
              href={`/knowledge-hub/${series.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-100/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A56A] focus-visible:ring-offset-4 focus-visible:ring-offset-[#102A56]"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Back to {series.title}
            </Link>
            <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C9A56A]">
              {`Series  ${series.number}`}
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-100/70">
              Article
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Article unavailable
            </h1>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl rounded-2xl border border-[#DCE2EA] bg-white p-6 shadow-[0_18px_40px_rgba(16,42,86,0.05)] sm:p-10">
            <div
              className="flex items-center gap-1 rounded-full border border-[#DCE2EA] bg-[#F7F9FC] p-1"
              aria-label="Article language"
            >
              <Link
                href={`${basePath}?lang=en`}
                aria-current={language === "en" ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 ${
                  language === "en"
                    ? "bg-[#102A56] text-white"
                    : "text-[#6B7890] hover:text-[#102A56]"
                }`}
              >
                EN
              </Link>
              <Link
                href={`${basePath}?lang=ar`}
                aria-current={language === "ar" ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 ${
                  language === "ar"
                    ? "bg-[#102A56] text-white"
                    : "text-[#6B7890] hover:text-[#102A56]"
                }`}
              >
                AR
              </Link>
            </div>

            <div className="mt-10 border-t border-[#E6EAF0] pt-8">
              <p className="text-xl font-semibold tracking-[-0.02em] text-[#102A56]">
                {copy.unavailable}
              </p>
              <p className="mt-3 leading-7 text-[#6B7890]">{copy.support}</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
