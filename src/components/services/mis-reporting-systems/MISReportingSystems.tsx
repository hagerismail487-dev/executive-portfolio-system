import {
  BusinessValue,
  // CTA,
  Deliverables,
  ServiceHero,
  Technologies,
  Workflow,
} from "@/components/services/shared";

import data from "./data";
console.log(data);
export default function MISReportingSystems() {
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

        {/* <CTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonHref={data.cta.buttonHref}
      />*/}
    </>
  );
}