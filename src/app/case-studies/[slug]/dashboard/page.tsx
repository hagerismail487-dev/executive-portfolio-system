import DashboardPresentation from "@/components/case-studies/DashboardPresentation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DashboardPage({
  params,
}: PageProps) {
  const { slug } = await params;

  if (slug !== "executive-sales-performance-intelligence") {
    return null;
  }

  return <DashboardPresentation />;
}