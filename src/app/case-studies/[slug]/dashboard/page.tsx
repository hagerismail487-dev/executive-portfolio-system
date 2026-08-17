import ExecutiveSalesPerformanceIntelligencePresentation from "@/components/case-studies/ExecutiveSalesPerformanceIntelligencePresentation";
import HRDecisionSupportSystemPresentation from "@/components/case-studies/HRDecisionSupportSystemPresentation";
import CustomerExperienceDashboardPresentation from "@/components/case-studies/CustomerExperienceDashboardPresentation";
import RealEstateDecisionIntelligencePresentation from "@/components/case-studies/RealEstateDecisionIntelligencePresentation";
import CRMSalesIntelligencePresentation from "@/components/case-studies/CRMSalesIntelligencePresentation";
import ProcurementManagementPresentation from "@/components/case-studies/ProcurementManagementPresentation";
import ProcurementInventoryManagementPresentation from "@/components/case-studies/ProcurementInventoryManagementPresentation";

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

  if (slug === "real-estate-decision-intelligence") {
    return <RealEstateDecisionIntelligencePresentation />;
  }

  if (slug === "crm-sales-intelligence") {
    return <CRMSalesIntelligencePresentation />;
  }

  if (slug === "procurement-management") {
    return <ProcurementManagementPresentation />;
  }

  if (slug === "procurement-inventory-management") {
    return <ProcurementInventoryManagementPresentation />;
  }

  return null;
}







