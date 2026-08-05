import Container from "@/components/ui/Container";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function ProfessionalServices() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#FBFCFE] py-24 lg:py-32"
    >
      <Container>

        <div className="relative overflow-hidden rounded-[40px] border border-[#E8EEF7] bg-white shadow-[0_40px_100px_rgba(18,58,99,0.10)]">

          {/* ================================= */}
          {/* Decorative Background */}
          {/* ================================= */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            {/* Top Left Dots */}

            <div className="absolute left-8 top-8 opacity-20">

              <div className="grid grid-cols-7 gap-4">

                {Array.from({ length: 49 }).map((_, i) => (

                  <div
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-[#C8DBFF]"
                  />

                ))}

              </div>

            </div>

            {/* Top Right Glow */}

            <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#EEF5FF] opacity-40 blur-3xl" />

            {/* Bottom Left Glow */}

            <div className="absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-[#F4F8FF] opacity-80 blur-3xl" />

          </div>

          {/* ================================= */}
          {/* Content */}
          {/* ================================= */}

          <div className="relative z-10 px-8 py-16 sm:px-10 lg:px-20 lg:py-20">

            {/* ================================= */}
            {/* Section Header */}
            {/* ================================= */}

            <div className="mx-auto max-w-3xl text-center">

              <div className="flex items-center justify-center gap-8">

                <div className="h-px w-20 bg-[#123A63]" />

                <span className="text-sm font-semibold uppercase tracking-[0.45em] text-[#123A63]">
                  Services
                </span>

                <div className="h-px w-20 bg-[#123A63]" />

              </div>

              <h2 className="mt-8 text-[42px] font-bold tracking-[-0.04em] text-[#102A56] lg:text-[60px]">
                Professional Services
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-xl leading-[1.9] text-slate-600">
                Professional services that help organizations transform
                business data into executive insights,
                strategic reporting,
                and confident business decisions.
              </p>

            </div>
                      {/* ================================= */}
          {/* Services Grid */}
          {/* ================================= */}

          <div className="mt-20 grid gap-8 md:grid-cols-2">

            {services.map((service) => (

              <div
                key={service.title}
                className="group"
              >

                <ServiceCard
                  {...service}
                />

              </div>

            ))}

          </div>

        </div>

      </div>

    </Container>

  </section>
  );
}