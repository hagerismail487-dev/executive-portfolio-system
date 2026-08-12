import { notFound } from "next/navigation";

import { caseStudies } from "@/data/case-studies";
import ExecutiveSalesPerformanceIntelligence from "@/components/case-studies/ExecutiveSalesPerformanceIntelligence";
import CustomerExperienceOperationsDashboard from "@/components/case-studies/CustomerExperienceOperationsDashboard";

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
    return <ExecutiveSalesPerformanceIntelligence />;
  }

  if (project.slug === "customer-experience-operations-dashboard") {
    return <CustomerExperienceOperationsDashboard />;
  }

  notFound();
}
