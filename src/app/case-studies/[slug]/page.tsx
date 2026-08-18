import { notFound } from "next/navigation";

import { caseStudies } from "@/data/case-studies";
import ExecutiveSalesPerformanceIntelligenceDashboard from "@/components/case-studies/ExecutiveSalesPerformanceIntelligenceDashboard";
import CustomerExperienceOperationsDashboard from "@/components/case-studies/CustomerExperienceOperationsDashboard";
import RealEstateDecisionIntelligenceDashboard from "@/components/case-studies/RealEstateDecisionIntelligenceDashboard";
import HRDecisionSupportSystemDashboard from "@/components/case-studies/HRDecisionSupportSystemDashboard";
import CRMSalesIntelligenceDashboard from "@/components/case-studies/CRMSalesIntelligenceDashboard";
import ProcurementManagementDashboard from "@/components/case-studies/ProcurementManagementDashboard";
import ProcurementInventoryManagementDashboard from "@/components/case-studies/ProcurementInventoryManagementDashboard";
import SalesMarketingPerformanceIntelligenceDashboard from "@/components/case-studies/SalesMarketingPerformanceIntelligenceDashboard";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const project = caseStudies.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  if (project.slug === "executive-sales-performance-intelligence") {
    return <ExecutiveSalesPerformanceIntelligenceDashboard />;
  }

  if (project.slug === "customer-experience-operations-dashboard") {
    return <CustomerExperienceOperationsDashboard />;
  }

  if (project.slug === "hr-decision-support-system") {
    return <HRDecisionSupportSystemDashboard />;
  }

  if (project.slug === "real-estate-decision-intelligence") {
    return <RealEstateDecisionIntelligenceDashboard />;
  }

  if (project.slug === "crm-sales-intelligence") {
    return <CRMSalesIntelligenceDashboard />;
  }

  if (project.slug === "procurement-inventory-management") {
    return <ProcurementInventoryManagementDashboard />;
  }

  if (project.slug === "procurement-management") {
    return <ProcurementManagementDashboard />;
  }

  if (project.slug === "sales-marketing-performance-intelligence") {
    return <SalesMarketingPerformanceIntelligenceDashboard />;
  }

  notFound();
}
