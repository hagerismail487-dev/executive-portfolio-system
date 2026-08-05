import type {
  HeroSection,
  WorkflowStep,
} from "@/types/service";

const data = {
  hero: {
    title: "Business Intelligence",

    headline:
      "Business Intelligence Solutions That Transform Data Into Strategic Business Insight",

    description: `Business Intelligence is more than dashboards and reports—it's a strategic approach to transforming business data into meaningful insight that supports confident decision-making.

I design Business Intelligence solutions that connect data, define meaningful KPIs, and deliver interactive analytical experiences that improve visibility across the organization. Every solution is built around business objectives, reporting clarity, and long-term analytical sustainability.`,
  } satisfies HeroSection,

  businessValue: {
    description: `Business Intelligence helps organizations transform raw data into meaningful insights that support strategic planning and operational improvement.

This service provides a structured analytical environment where business leaders can monitor performance, identify trends, reduce fragmented reporting, and make faster, evidence-based decisions with confidence.`,

    benefits: [
      "Improved business visibility",
      "Strategic KPI monitoring",
      "Evidence-based decision-making",
      "Trend and variance analysis",
      "Reduced fragmented reporting",
      "Cross-department performance insights",
      "Reliable executive reporting",
      "Scalable analytical framework",
      "Better alignment between data and strategy",
    ],
  },

  deliverables: [
    "Business Intelligence Strategy Framework",
    "Interactive Power BI Dashboards",
    "Executive BI Reports",
    "KPI Framework Design",
    "Data Modeling Architecture",
    "Business Performance Analysis",
    "Cross-Department Performance Views",
    "Trend & Variance Analysis",
    "Executive Summary Reporting",
    "Power Query Data Transformation",
    "Advanced DAX Measures",
    "Reporting Documentation",
    "Business Intelligence User Guide",
    "Recommendations for Future BI Enhancements",
  ],

  workflow: [
    {
      title: "Business Discovery",
      description:
        "Understand business objectives, reporting challenges, stakeholders, available data sources, and strategic priorities.",
    },
    {
      title: "Business Analysis",
      description:
        "Define business questions, KPIs, analytical requirements, and reporting priorities aligned with organizational goals.",
    },
    {
      title: "Data Preparation",
      description:
        "Prepare, clean, transform, and model business data to ensure reliable analytical outcomes.",
    },
    {
      title: "Solution Design",
      description:
        "Design a Business Intelligence framework that delivers clear insights through interactive dashboards and executive reporting.",
    },
    {
      title: "Development",
      description:
        "Develop analytical models, Power BI reports, DAX calculations, and interactive reporting experiences.",
    },
    {
      title: "Validation",
      description:
        "Validate business logic, KPI calculations, and reporting accuracy before deployment.",
    },
    {
      title: "Delivery & Adoption",
      description:
        "Deliver the complete BI solution with documentation and guidance to support long-term adoption.",
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
    title: "Ready to Turn Business Data Into Strategic Insight?",

    description:
      "Let's build a Business Intelligence solution that transforms your data into reliable insights, strengthens executive reporting, and supports smarter business decisions.",

    buttonText: "Let's Talk",

    buttonHref: "/contact",
  },
};

export default data;