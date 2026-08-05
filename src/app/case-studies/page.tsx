import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";
export default function CaseStudiesPage() {
  return (
    <main className="bg-[#FBFCFE]">

      {/* ================================= */}
      {/* Hero */}
      {/* ================================= */}

      <section className="py-24 lg:py-32">

        <Container>

          <SectionTitle
            eyebrow="Portfolio"
            title="Case Studies"
            description="Explore a collection of executive dashboards, business intelligence solutions, MIS reporting systems, and performance analytics projects."
          />

        </Container>

      </section>

      {/* ================================= */}
      {/* Projects */}
      {/* ================================= */}

      <section className="pb-24 lg:pb-32">

        <Container>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {caseStudies.map((project) => (

              <CaseStudyCard
                key={project.id}
                slug={project.slug}
                title={project.title}
                excerpt={project.excerpt}
                category={project.category}
                image={project.images.cover}
              />

            ))}

          </div>

        </Container>

      </section>

    </main>
  );
}