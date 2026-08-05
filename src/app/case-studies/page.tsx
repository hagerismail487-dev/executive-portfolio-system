import { notFound } from "next/navigation";

import { caseStudies } from "@/data/case-studies";

import CaseStudyHero from "@/components/case-studies/CaseStudyHero";
import CaseStudyOverview from "@/components/case-studies/CaseStudyOverview";
import CaseStudyChallenge from "@/components/case-studies/CaseStudyChallenge";
import CaseStudySolution from "@/components/case-studies/CaseStudySolution";
import CaseStudyResults from "@/components/case-studies/CaseStudyResults";
import BusinessImpact from "@/components/case-studies/BusinessImpact";
import RelatedProjects from "@/components/case-studies/RelatedProjects";

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

  return (
    <main className="bg-[#FBFCFE]">

      <CaseStudyHero project={project} />

      <CaseStudyOverview project={project} />

      <CaseStudyChallenge project={project} />

      <CaseStudySolution project={project} />

      <CaseStudyResults project={project} />

      <BusinessImpact project={project} />

      <RelatedProjects
        currentSlug={project.slug}
      />

    </main>
  );
}
