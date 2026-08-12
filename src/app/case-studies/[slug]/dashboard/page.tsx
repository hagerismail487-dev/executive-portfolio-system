import DashboardPresentation from "@/components/case-studies/DashboardPresentation";
import CustomerExperienceDashboardPresentation from "@/components/case-studies/CustomerExperienceDashboardPresentation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DashboardPage({
  params,
}: PageProps) {
  const { slug } = await params;

  if (slug === "executive-sales-performance-intelligence") {
    return <DashboardPresentation />;
  }

  if (slug === "customer-experience-operations-dashboard") {
    return <CustomerExperienceDashboardPresentation />;
  }

  return null;
}
