import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Container from "@/components/ui/Container";
import type { KnowledgeSeries, SeriesArticle } from "./series";

export type ArticleLanguage = "en" | "ar";

interface ArticleReaderProps {
  series: KnowledgeSeries;
  article: SeriesArticle;
  language: ArticleLanguage;
}

function renderInline(text: string, keyPrefix: string) {
  return text
    .split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
    .filter(Boolean)
    .map((part, index) => {
      const key = `${keyPrefix}-${index}`;
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={key}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return <em key={key}>{part.slice(1, -1)}</em>;
      }
      return <span key={key}>{part}</span>;
    });
}

function ArticleContent({ content, language }: { content: string; language: ArticleLanguage }) {
  const paragraphs = content.split(/\n\n+/);
  const isArabic = language === "ar";

  return (
    <div dir={isArabic ? "rtl" : "ltr"} lang={language} className="space-y-6 text-lg leading-9 text-[#334766]">
      {paragraphs.map((paragraph, index) => {
        const lines = paragraph.split("\n");
        const firstLine = lines[0];
        const isHeading = firstLine.startsWith("# ");
        const cleanFirstLine = isHeading ? firstLine.slice(2) : firstLine;

        return isHeading ? (
          <h2 key={index} className="text-3xl font-semibold tracking-[-0.04em] text-[#102A56]">
            {renderInline(cleanFirstLine, `heading-${index}`)}
          </h2>
        ) : (
          <p key={index}>
            {lines.map((line, lineIndex) => (
              <span key={`${index}-${lineIndex}`}>
                {lineIndex > 0 ? <br /> : null}
                {renderInline(line, `paragraph-${index}-${lineIndex}`)}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default function ArticleReader({ series, article, language }: ArticleReaderProps) {
  const basePath = `/knowledge-hub/${series.slug}/${article.slug}`;
  const content = article.content[language];
  const isArabic = language === "ar";

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
            {article.coverImage ? (
              <div className="mx-auto mt-8 w-full max-w-[720px] overflow-hidden rounded-2xl border border-white/15 bg-[#061329] shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
                <img
                  src={article.coverImage.src}
                  alt={article.coverImage.alt}
                  className="mx-auto block h-auto max-h-[420px] w-full object-contain"
                />
              </div>
            ) : null}
            <h1 className="mt-8 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {article.title}
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

            <article className="mt-10 border-t border-[#E6EAF0] pt-8">
              <ArticleContent content={content} language={language} />
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
