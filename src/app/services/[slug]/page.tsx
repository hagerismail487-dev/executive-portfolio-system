import { notFound } from "next/navigation";
import ServiceHero from "@/components/services/ServiceHero";
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
    <main className="bg-white">
      <h1>TEST</h1>
    </main>
  );
}
