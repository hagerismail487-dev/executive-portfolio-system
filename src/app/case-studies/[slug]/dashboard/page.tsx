import ExecutiveSalesPerformanceIntelligencePresentation from "@/components/case-studies/ExecutiveSalesPerformanceIntelligencePresentation";
import HRDecisionSupportSystemPresentation from "@/components/case-studies/HRDecisionSupportSystemPresentation";
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
    return <ExecutiveSalesPerformanceIntelligencePresentation />;
  }

  if (slug === "customer-experience-operations-dashboard") {
    return <CustomerExperienceDashboardPresentation />;
  }
  if (slug === "hr-decision-support-system") {
    return <HRDecisionSupportSystemPresentation />;
  }

  return null;
}



