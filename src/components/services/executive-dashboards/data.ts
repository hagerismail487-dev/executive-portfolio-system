import type {
  HeroSection,
  WorkflowStep,
} from "@/types/service";

const data = {
  hero: {
    title: "Executive Dashboards",

    headline:
      "Executive Dashboards That Turn Business Data Into Clear Decisions",

    description: `Executive dashboards are more than visual reports—they are strategic decision-support systems that help leaders understand business performance, monitor critical KPIs, and act with confidence.

I design executive dashboards that transform complex business data into clear, interactive insights, enabling executives, department managers, and business leaders to make faster, evidence-based decisions. Every dashboard is built around business objectives, reporting clarity, and meaningful performance measurement to become a trusted part of the organization's reporting ecosystem.`,
  } satisfies HeroSection,

  businessValue: {
    description: `Effective executive dashboards do more than visualize data—they provide leaders with a consistent, reliable view of business performance that supports confident decision-making.

This service helps organizations establish a unified reporting environment where executives can monitor KPIs, identify trends, reduce manual reporting, and improve visibility across departments. The result is a structured reporting system that enables faster decisions, stronger alignment between teams, and greater confidence in the information driving strategic planning.`,

    benefits: [
      "Single view of business performance",
      "Executive visibility across departments",
      "Real-time KPI monitoring",
      "Reduced manual reporting effort",
      "Early identification of trends and risks",
      "Faster evidence-based decision-making",
      "Improved strategic alignment",
      "Standardized executive reporting",
      "Greater confidence in business data",
    ],
  },

  deliverables: [
    "Executive KPI Dashboards",
    "Department Performance Dashboards",
    "Interactive Power BI Reports",
    "Executive Summary Pages",
    "Drill-through Reporting Experience",
    "Business KPI Framework",
    "Interactive Filters & Slicers",
    "Standardized Executive Reporting Layout",
    "Advanced DAX Measures",
    "Optimized Data Model",
    "Power Query Data Transformation",
    "Reporting Documentation",
    "Dashboard User Guide",
    "Recommendations for Future Reporting Enhancements",
  ],

  workflow: [
    {
      title: "Business Discovery",
      description:
        "Understand your business objectives, reporting challenges, stakeholders, data sources, and decision-making requirements to establish a strong project foundation.",
    },
    {
      title: "KPI & Reporting Framework",
      description:
        "Define business questions, KPIs, reporting hierarchy, and the executive reporting structure to ensure every metric supports strategic decisions.",
    },
    {
      title: "Data Preparation",
      description:
        "Prepare, clean, transform, and organize data to ensure consistency, accuracy, and reliable reporting.",
    },
    {
      title: "Dashboard Design",
      description:
        "Design an executive-focused reporting experience with intuitive navigation, meaningful visualizations, and a clear business storytelling approach.",
    },
    {
      title: "Development",
      description:
        "Build scalable Power BI dashboards using optimized data models, DAX calculations, and interactive reporting capabilities.",
    },
    {
      title: "Validation",
      description:
        "Review business logic, validate KPIs, verify calculations, and confirm reporting accuracy with stakeholders before delivery.",
    },
    {
      title: "Deployment & Knowledge Transfer",
      description:
        "Deploy the final solution, provide documentation, and ensure users can confidently interpret and use the dashboards.",
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
    title: "Ready to Transform Your Business Reporting?",

    description:
      "Let's build executive dashboards that transform complex business data into clear insights, strengthen executive decision-making, and help your leadership team monitor performance with confidence.",

    buttonText: "Let's Talk",

    buttonHref: "/contact",
  },
};

export default data;