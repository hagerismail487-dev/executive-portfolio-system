import { notFound } from "next/navigation";
import ServiceHero from "@/components/services/ServiceHero";
import { serviceDetails } from "@/data/service-details";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const service = serviceDetails.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-white pt-20">
      <ServiceHero
        title={service.title}
        heroDescription={service.heroDescription}
      />

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-[#102A56]">
              Business Value
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {service.businessValue}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#102A56]">
              Deliverables
            </h2>

            <ul className="mt-6 space-y-3">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="text-slate-600"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#102A56]">
              Workflow
            </h2>

            <ol className="mt-6 space-y-3">
              {service.workflow.map((step) => (
                <li
                  key={step}
                  className="text-slate-600"
                >
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#102A56]">
              Technologies
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-[#123A63]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}