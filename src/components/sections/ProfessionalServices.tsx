import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function ProfessionalServices() {
  return (
    <section
      id="services"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#123A63]">
            SERVICES
          </span>

          <h2 className="mt-5 text-[46px] md:text-[54px] font-bold tracking-[-0.04em] text-[#102A56]">
            Professional Services
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Professional services that help organizations transform
            business data into strategic business decisions.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
