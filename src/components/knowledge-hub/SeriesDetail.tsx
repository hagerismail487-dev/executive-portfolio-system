import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import type { KnowledgeSeries, SeriesArticle } from "./series";

function ArticleEntry({
  article,
  seriesSlug,
}: {
  article: SeriesArticle;
  seriesSlug: string;
}) {
  return (
    <Link
      href={`/knowledge-hub/${seriesSlug}/${article.slug}`}
      className="group flex min-h-28 items-start gap-5 border-t border-[#DCE2EA] py-7 transition-colors hover:border-[#C9A56A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4 sm:gap-8 sm:py-8"
    >
      <span className="pt-1 text-sm font-semibold tabular-nums text-[#B18A3A]">
        {article.number}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-lg font-semibold tracking-[-0.025em] text-[#102A56] transition-colors group-hover:text-[#7D5B19] sm:text-xl">
          {article.title}
        </span>
        {article.description ? (
          <span className="mt-2 block max-w-2xl text-sm leading-7 text-[#52647C]">
            {article.description}
          </span>
        ) : null}
      </span>
      <ArrowUpRight
        aria-hidden="true"
        className="mt-1 h-5 w-5 shrink-0 text-[#B8C1CE] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#102A56]"
      />
    </Link>
  );
}

export default function SeriesDetail({ series }: { series: KnowledgeSeries }) {
  return (
    <div className="min-h-screen bg-[#FAFBFD] pt-16">
      <section className="overflow-hidden rounded-t-[28px] bg-[#172638] text-[#F8F3EA] sm:rounded-t-[40px]">
        <Container className="relative py-14 sm:py-20 lg:py-24">
          <Link
            href="/knowledge-hub"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F8F3EA]/75 transition-colors hover:text-[#C9A56A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A56A] focus-visible:ring-offset-4 focus-visible:ring-offset-[#172638]"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to Knowledge Hub
          </Link>
          <div className="mt-14 max-w-3xl sm:mt-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C9A56A]">
              THE INSIGHT GIRL
            </p>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-[#C9A56A]">
              SERIES {series.number}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              {series.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#F8F3EA]/75 sm:text-lg">
              {series.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <Container>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B18A3A]">
            EXPLORE THE SERIES
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] text-[#102A56] sm:text-4xl">
            Articles &amp; Insights
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#52647C]">
            New articles and practical insights for this series will be added here.
          </p>

          {series.articles.length > 0 ? (
            <div className="mt-10">
              {series.articles.map((article) => (
                <ArticleEntry
                  key={article.slug}
                  article={article}
                  seriesSlug={series.slug}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 border-y border-[#DCE2EA] py-12 sm:py-16">
              <p className="text-lg font-semibold tracking-[-0.025em] text-[#102A56]">
                Articles coming soon
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#52647C]">
                This series is ready for its first article. Check back soon for the first published insight.
              </p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
