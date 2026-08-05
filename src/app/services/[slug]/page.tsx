import { notFound } from "next/navigation";

import ExecutiveDashboards from "@/components/services/executive-dashboards/ExecutiveDashboards";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  switch (slug) {
    case "executive-dashboards":
      return <ExecutiveDashboards />;

    default:
      notFound();
  }
}