import type {
  HeroSection,
  WorkflowStep,
} from "@/types/service";

const data = {
  hero: {
    title: "Performance Analytics",

    headline:
      "Performance Analytics That Turn KPIs Into Actionable Business Decisions",

    description: `Performance Analytics goes beyond reporting numbers—it helps organizations understand business performance, identify trends, and make continuous improvements based on measurable insights.

I design performance analytics solutions that transform operational data into meaningful KPIs, executive scorecards, and interactive dashboards. Every solution is built to improve visibility, strengthen accountability, and support smarter business decisions through reliable performance measurement.`,
  } satisfies HeroSection,

  businessValue: {
    description: `Organizations achieve better results when performance is measured consistently and communicated effectively.

This service helps businesses establish a structured performance measurement framework where executives and department managers can monitor KPIs, evaluate progress, identify performance gaps, and make informed decisions that drive continuous improvement.`,

    benefits: [
      "Consistent KPI monitoring",
      "Improved performance visibility",
      "Executive performance tracking",
      "Early identification of performance gaps",
      "Data-driven business decisions",
      "Performance trend analysis",
      "Improved operational accountability",
      "Standardized performance reporting",
      "Continuous business improvement",
    ],
  },

  deliverables: [
    "Performance Analytics Dashboards",
    "Executive KPI Scorecards",
    "Department Performance Reports",
    "Performance Monitoring Framework",
    "Interactive KPI Tracking",
    "Trend & Variance Analysis",
    "Performance Reporting Templates",
    "Business Performance Metrics",
    "Advanced DAX Measures",
    "Optimized Data Model",
    "Power Query Data Transformation",
    "Reporting Documentation",
    "Performance Analytics User Guide",
    "Recommendations for Performance Improvement",
  ],

  workflow: [
    {
      title: "Business Performance Assessment",
      description:
        "Review business objectives, existing KPIs, operational processes, and reporting requirements to establish a structured performance measurement strategy.",
    },
    {
      title: "KPI Framework Design",
      description:
        "Define performance indicators, measurement methods, reporting frequency, and executive scorecards aligned with business objectives.",
    },
    {
      title: "Data Preparation",
      description:
        "Prepare, clean, transform, and organize business data to ensure accurate and consistent performance analysis.",
    },
    {
      title: "Analytics Design",
      description:
        "Design executive-focused performance dashboards that clearly communicate KPIs, trends, and business outcomes.",
    },
    {
      title: "Development",
      description:
        "Develop Power BI dashboards, KPI calculations, analytical models, and interactive reporting experiences for continuous monitoring.",
    },
    {
      title: "Validation",
      description:
        "Validate business rules, KPI calculations, and reporting accuracy before deployment.",
    },
    {
      title: "Deployment & Continuous Improvement",
      description:
        "Deploy the final solution, provide documentation, and recommend ongoing improvements to strengthen long-term performance management.",
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
    title: "Ready to Improve Business Performance?",

    description:
      "Let's build a performance analytics solution that helps your organization monitor KPIs, strengthen performance management, and make confident data-driven decisions.",

    buttonText: "Let's Talk",

    buttonHref: "/contact",
  },
};

export default data;