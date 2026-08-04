import { notFound } from "next/navigation";
import { serviceDetails } from "@/data/service-details";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const service = serviceDetails.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#123A63]">
        Professional Service
      </span>

      <h1 className="mt-6 text-5xl font-bold text-[#102A56]">
        {service.title}
      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
        {service.heroDescription}
      </p>
    </main>
  );
}
