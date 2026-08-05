import ServiceHero from "@/components/services/shared/ServiceHero";
import BusinessValue from "@/components/services/shared/BusinessValue";
import Deliverables from "@/components/services/shared/Deliverables";
import Workflow from "@/components/services/shared/Workflow";
import Technologies from "@/components/services/shared/Technologies";
import CTA from "@/components/services/shared/CTA";

import data from "./data.ts";

export default function BusinessIntelligence() {
  return (
    <>
      <ServiceHero hero={data.hero} />

      <BusinessValue
        description={data.businessValue.description}
        benefits={data.businessValue.benefits}
      />

      <Deliverables
        items={data.deliverables}
      />

      <Workflow
        steps={data.workflow}
      />

      <Technologies
        technologies={data.technologies}
      />

      <CTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonHref={data.cta.buttonHref}
      />
    </>
  );
}