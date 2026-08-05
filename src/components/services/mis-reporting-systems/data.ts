import type {
  HeroSection,
  WorkflowStep,
} from "@/types/service";

const data = {
  hero: {
    title: "MIS Reporting Systems",

    headline:
      "Structured MIS Reporting Systems That Create Consistency, Visibility, and Better Business Decisions",

    description: `An effective Management Information System (MIS) is more than a collection of reports—it's the foundation for consistent business communication and informed decision-making.

I design structured MIS reporting systems that transform operational data into standardized reporting frameworks, helping organizations improve visibility, monitor performance, and deliver reliable information to leadership. Every reporting system is built to support operational efficiency, reporting consistency, and long-term business growth.`,
  } satisfies HeroSection,

  businessValue: {
    description: `Reliable decisions depend on reliable reporting. Without standardized reporting processes, organizations often spend more time collecting and validating data than analyzing it.

This service helps businesses establish a structured reporting environment that improves visibility, standardizes reporting across departments, and delivers accurate business information for management and executive decision-making.`,

    benefits: [
      "Standardized reporting across departments",
      "Improved operational visibility",
      "Consistent KPI measurement",
      "Reduced reporting inconsistencies",
      "Faster executive reporting",
      "Improved cross-functional communication",
      "Reduced manual reporting effort",
      "Reliable business information",
      "Scalable reporting framework",
    ],
  },

  deliverables: [
    "Complete MIS Reporting Framework",
    "Daily, Weekly & Monthly Reporting Templates",
    "Executive MIS Reports",
    "Department Performance Reports",
    "KPI Reporting Structure",
    "Reporting Calendar",
    "Standardized Report Templates",
    "Data Validation Rules",
    "Reporting Documentation",
    "Reporting Process Mapping",
    "Automated Reporting Workflows",
    "Executive Summary Reports",
    "User Guide",
  ],

  workflow: [
    {
      title: "Business & Reporting Assessment",
      description:
        "Review business objectives, reporting challenges, existing reports, and available data sources to establish a clear reporting strategy.",
    },
    {
      title: "Reporting Framework Design",
      description:
        "Define reporting hierarchy, KPIs, reporting frequency, ownership, and reporting standards to build a consistent MIS framework.",
    },
    {
      title: "Data Preparation",
      description:
        "Clean, organize, and structure business data to ensure reliable reporting and consistent performance metrics.",
    },
    {
      title: "Report Development",
      description:
        "Develop standardized reports that deliver clear operational insights while maintaining consistency across business functions.",
    },
    {
      title: "Validation & Review",
      description:
        "Validate business logic, KPI calculations, and reporting accuracy before deployment.",
    },
    {
      title: "Implementation",
      description:
        "Deploy the reporting system and establish reporting routines aligned with business operations.",
    },
    {
      title: "Documentation & Handover",
      description:
        "Provide documentation and user guidance to support long-term adoption and future maintenance.",
    },
  ] satisfies WorkflowStep[],

  technologies: [
    "Microsoft Power BI",
    "Microsoft Excel",
    "Power Query",
    "DAX",
    "Power Pivot",
    "Microsoft 365",
    "Data Modeling",
    "Data Visualization",
    "Business Process Analysis",
    "Reporting Automation",
    "KPI Framework Design",
    "Executive Reporting",
  ],

  cta: {
    title: "Ready to Build a Reliable MIS Reporting System?",

    description:
      "Let's create a structured reporting framework that improves reporting consistency, strengthens business visibility, and supports confident executive decision-making.",

    buttonText: "Let's Talk",

    buttonHref: "/contact",
  },
};

export default data;