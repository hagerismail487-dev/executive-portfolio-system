import { notFound } from "next/navigation";

import { caseStudies } from "@/data/case-studies";

import CaseStudyHero from "@/components/case-studies/CaseStudyHero";
import CaseStudyContent from "@/components/case-studies/CaseStudyContent";

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

      <CaseStudyContent project={project} />
      

    </main>
  );
}