import type {
  HeroSection,
  WorkflowStep,
} from "@/types/service";

const data = {
  hero: {
    title: "Executive Dashboards",

    headline:
      "Executive Dashboards That Turn Business Data Into Clear Decisions",

    description: `Modern organizations generate more data than ever, but data alone doesn't drive better decisions.

I design executive dashboards that transform complex operational information into clear, interactive reporting experiences, giving leadership teams the visibility they need to monitor performance, identify opportunities, and act with confidence.

Every solution is built around business objectives, meaningful KPIs, and intuitive reporting that supports informed decision-making across the organization.`,

    executiveTitle: "Decision Support",

    executiveDescription: `Built to provide leadership teams with instant access to the metrics that matter most, combining interactive reporting, KPI visibility, and performance insights in one centralized experience.`,

    highlights: [
      "Real-Time KPI Visibility",
      "Interactive Reporting",
      "Cross-Department Insights",
      "Strategic Decision Support",
    ],
  } satisfies HeroSection,

  businessValue: {
    description: `Reliable reporting creates a common understanding of business performance across the organization.

This service establishes a structured reporting environment where leadership teams can monitor key metrics, reduce manual reporting, and gain consistent visibility into operational performance.

The outcome is faster decision-making, improved reporting consistency, and greater confidence in the information used to guide strategic initiatives.`,

    benefits: [
      "Executive visibility across departments",
      "Real-time KPI monitoring",
      "Reduced manual reporting effort",
      "Faster evidence-based decision-making",
      "Standardized executive reporting",
      "Greater confidence in business data",
    ],
  },

  deliverables: [
    "Interactive KPI Dashboards",
    "Department Performance Reports",
    "Executive Summary Pages",
    "Performance Measurement Framework",
    "Optimized Data Model",
    "Interactive Filters & Drilldowns",
    "Reporting Documentation",
    "Power BI Reporting Solution",
  ],

  workflow: [
    {
      title: "Business Discovery",
      description:
        "Understand business objectives, stakeholders, reporting challenges, and decision-making requirements.",
    },
    {
      title: "Strategy & KPI Design",
      description:
        "Define KPIs, reporting structure, business questions, and the reporting framework that aligns with organizational goals.",
    },
    {
      title: "Data Preparation",
      description:
        "Clean, transform, model, and validate business data to ensure reporting accuracy and consistency.",
    },
    {
      title: "Solution Development",
      description:
        "Build interactive reporting solutions using optimized data models, DAX calculations, and intuitive user experiences.",
    },
    {
      title: "Deployment & Enablement",
      description:
        "Validate the final solution, deploy the reports, and provide documentation that supports confident business adoption.",
    },
  ] satisfies WorkflowStep[],

  technologies: [
    "Microsoft Power BI",
    "Microsoft Excel",
    "Power Query",
    "DAX",
    "Data Modeling",
    "Data Visualization",
    "KPI Framework Design",
    "Executive Reporting",
  ],
  whyWorkWithMe: {
    description:
      "I don't build dashboards to display data—I build reporting solutions that help leaders understand performance, make informed decisions, and create lasting business value.",

    strengths: [
      {
        title: "Business Before Dashboards",
        description:
          "Every project starts with understanding business goals, decision-making needs, and reporting challenges before designing a single visual.",
      },
      {
        title: "Executive-Focused Reporting",
        description:
          "I design reporting experiences that help executives monitor KPIs, identify trends, and focus on the metrics that truly drive business performance.",
      },
      {
        title: "Structured & Reliable Solutions",
        description:
          "From data preparation to final reporting, every solution follows a structured methodology that prioritizes accuracy, consistency, and long-term scalability.",
      },
      {
        title: "Designed for Better Decisions",
        description:
          "Every dashboard, KPI, and interaction is intentionally designed to simplify complex information and support faster, more confident business decisions.",
      },
    ],
  },

  cta: {
    title: "Ready to Transform Your Business Reporting?",

    description:
      "Let's build a reporting solution that gives your leadership team the visibility, clarity, and confidence needed to make faster, better-informed business decisions.",

    buttonText: "Let's Talk",

    buttonHref: "https://www.linkedin.com/in/hagerismail1/",
  },
};

export default data;