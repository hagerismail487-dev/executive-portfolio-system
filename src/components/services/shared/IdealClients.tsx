import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";

interface IdealClientsProps {
  title?: string;
  clients: string[];
}

export default function IdealClients({
  title = "Ideal Clients",
  clients,
}: IdealClientsProps) {
  return (

    <Section className="bg-white">

      <Container>

        <div className="mx-auto max-w-[1200px]">

          <SectionIntro
            eyebrow="Who It's For"
            title={title}
            description="Organizations and business leaders who need structured reporting, executive visibility, and reliable business intelligence to support strategic decision-making."
            align="center"
            className="mx-auto mb-10 max-w-[720px]"
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {clients.map((client, index) => (

              <div
                key={client}
                className="
                  group

                  rounded-[22px]

                  border
                  border-[#E8EEF7]

                  bg-white

                  px-6
                  py-6

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#D6E5FB]
                  hover:shadow-[0_18px_40px_rgba(18,58,99,0.08)]
                "
              >

                {/* Header */}

                <div className="flex items-center gap-3">

                  <span
                    className="
                      text-[13px]
                      font-semibold

                      tracking-[0.18em]

                      text-[#2563EB]
                    "
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <div className="h-px flex-1 bg-[#E8EEF7]" />

                </div>

                {/* Client */}

                <h3
                  className="
                    mt-5

                    text-[19px]
                    font-semibold

                    leading-8

                    tracking-[-0.02em]

                    text-[#102A56]
                  "
                >
                  {client}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </Container>

    </Section>
  );
}