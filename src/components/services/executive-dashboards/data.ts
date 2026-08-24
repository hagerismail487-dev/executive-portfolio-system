import type {
  HeroSection,
  WorkflowStep,
} from "@/types/service";

const data = {
  hero: {
    title: "Executive Reporting",

    headline:
      "Decision-Ready Reporting for Executive Performance Visibility",

    description: `I design executive reporting solutions that bring business performance, KPIs, and key management information into a clear, structured view for leadership. Each solution is built around business objectives and meaningful measures, helping decision-makers understand what matters, focus attention where it is needed, and act with greater confidence.`,

    executiveTitle: "Decision Support",

    executiveDescription: `Designed to bring the information leadership needs into a clear, centralized reporting view that supports performance visibility and informed decision-making.`,

    highlights: [
      "Real-Time KPI Visibility",
      "Interactive Reporting",
      "Cross-Department Insights",
      "Strategic Decision Support",
    ],
  } satisfies HeroSection,

  businessValue: {
    description: `Leadership teams need more than disconnected reports and individual performance measures.

Executive Reporting brings the information that matters most into a clear management view, helping decision-makers understand current performance, identify areas requiring attention, and make more confident business decisions.`,

    benefits: [
      "Executive visibility across departments",
      "Clear KPI visibility for leadership",
      "Focused management information",
      "Decision-ready performance reporting",
      "Clearer areas requiring attention",
      "Greater confidence in business information",
    ],
  },

  deliverables: [
    "Executive Reporting Views",
    "KPI & Performance Views",
    "Executive Summary Pages",
    "Management Reporting Pack",
    "Custom Executive Visualizations",
    "Supporting Data Model",
    "Interactive Filters & Drilldowns",
    "Reporting Documentation",
  ],

  workflow: [
    {
      title: "Business Discovery",
      description:
        "Understand business objectives, stakeholders, reporting challenges, and decision-making requirements.",
    },
    {
      title: "Reporting & KPI Design",
      description:
        "Define the key measures, reporting structure, business questions, and information required for leadership decision-making.",
    },
    {
      title: "Data Preparation",
      description:
        "Prepare, transform, model, and validate business data to establish a reliable reporting foundation.",
    },
    {
      title: "Reporting Solution Development",
      description:
        "Build the executive reporting solution using structured data models, KPI calculations, and clear reporting experiences.",
    },
    {
      title: "Deployment & Enablement",
      description:
        "Validate the final solution, deploy the reporting environment, and provide documentation that supports confident business use.",
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
        title: "Business Before Reporting",
        description:
          "Every engagement starts with understanding business objectives, decision requirements, and reporting challenges before defining the reporting solution.",
      },
      {
        title: "Leadership-Focused Information",
        description:
          "Reporting is structured around the information leadership needs to monitor performance, identify areas requiring attention, and support informed decisions.",
      },
      {
        title: "Reliable Reporting",
        description:
          "From data preparation through validation and final reporting, the solution follows a structured approach that prioritizes consistency, accuracy, and confidence in the information presented.",
      },
      {
        title: "Designed for Decision Support",
        description:
          "Every KPI, report, and visual is selected with a clear purpose: helping decision-makers understand performance and determine what requires action.",
      },
    ],
  },

  cta: {
    title: "Ready to Build a Clearer Executive Reporting View?",

    description:
      "Let's discuss the information your leadership team needs to monitor performance, understand priorities, and make more confident business decisions.",

    buttonText: "Let's Talk",

    buttonHref: "https://www.linkedin.com/in/hagerismail1/",
  },
};

export default data;