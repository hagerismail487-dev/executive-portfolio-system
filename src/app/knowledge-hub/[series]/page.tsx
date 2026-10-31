import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SeriesDetail from "@/components/knowledge-hub/SeriesDetail";
import { getKnowledgeSeries, knowledgeSeries } from "@/components/knowledge-hub/series";

interface SeriesPageProps {
  params: Promise<{ series: string }>;
}

export function generateStaticParams() {
  return knowledgeSeries.map(({ slug }) => ({ series: slug }));
}

export async function generateMetadata({ params }: SeriesPageProps): Promise<Metadata> {
  const { series: slug } = await params;
  const series = getKnowledgeSeries(slug);

  if (!series) {
    return { title: "Series Not Found" };
  }

  return {
    title: series.title,
    description: series.description,
  };
}

export default async function SeriesPage({ params }: SeriesPageProps) {
  const { series: slug } = await params;
  const series = getKnowledgeSeries(slug);

  if (!series) {
    notFound();
  }

  return <SeriesDetail series={series} />;
}
