import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ArticleReader, {
  type ArticleLanguage,
} from "@/components/knowledge-hub/ArticleReader";
import {
  getKnowledgeSeries,
  knowledgeSeries,
} from "@/components/knowledge-hub/series";

interface ArticlePageProps {
  params: Promise<{ series: string; article: string }>;
  searchParams: Promise<{ lang?: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { series: slug } = await params;
  const series = getKnowledgeSeries(slug);

  if (!series) {
    return { title: "Article Not Found" };
  }

  return {
    title: `Article | ${series.title}`,
    description: `Articles and insights from the ${series.title} series.`,
  };
}

export default async function ArticlePage({
  params,
  searchParams,
}: ArticlePageProps) {
  const { series: seriesSlug, article: articleSlug } = await params;
  const { lang } = await searchParams;
  const series = getKnowledgeSeries(seriesSlug);

  if (!series || !articleSlug) {
    notFound();
  }

  const language: ArticleLanguage = lang === "ar" ? "ar" : "en";

  return (
    <ArticleReader
      series={series}
      articleSlug={articleSlug}
      language={language}
    />
  );
}

export function generateStaticParams() {
  return knowledgeSeries.flatMap((series) =>
    series.articles.map((article) => ({
      series: series.slug,
      article: article.slug,
    })),
  );
}
