import { notFound } from "next/navigation";

import ExecutiveDashboards from "@/components/services/executive-dashboards/ExecutiveDashboards";
import MISReportingSystems from "@/components/services/mis-reporting-systems/MISReportingSystems";
import BusinessIntelligence from "@/components/services/business-intelligence/BusinessIntelligence";
import PerformanceAnalytics from "@/components/services/performance-analytics/PerformanceAnalytics";

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

    case "mis-reporting-systems":
      return <MISReportingSystems />;

    case "business-intelligence":
      return <BusinessIntelligence />;

    case "performance-analytics":
      return <PerformanceAnalytics />;

    default:
      notFound();
  }
}