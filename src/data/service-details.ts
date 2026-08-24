export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;

  businessValue: string;

  deliverables: string[];

  workflow: string[];

  technologies: string[];

  faqs: FAQ[];

  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "executive-dashboards",

    title: "Executive Reporting",

    shortDescription:
      "Executive reporting solutions that turn complex business performance into clear, decision-ready information for leadership.",

    heroDescription:
      "Executive reporting solutions that bring KPIs, business performance, and key operational signals together into a clear view for leadership decision-making.",

    businessValue:
      "Give leadership a trusted view of business performance, helping decision-makers understand what matters, where attention is needed, and what requires action.",

    deliverables: [
      "Executive Reporting Dashboard",
      "KPI & Performance Views",
      "Management Reporting Pack",
      "Custom Executive Visualizations",
      "Supporting Data Model",
      "Documentation",
    ],

    workflow: [
      "Business Discovery",
      "Reporting Requirements",
      "Data Preparation",
      "Reporting Design",
      "Development",
      "Validation",
      "Deployment",
    ],

    technologies: [
      "Power BI",
      "DAX",
      "Power Query",
      "SQL",
      "Excel",
    ],

    faqs: [
      {
        question: "Can executive reporting connect to our existing data sources?",
        answer:
          "Yes. Executive reporting solutions can integrate with Excel, SQL Server, cloud platforms, and various business data sources.",
      },
      {
        question: "Will I receive documentation?",
        answer:
          "Yes. Every project includes documentation to support maintenance and future enhancements.",
      },
    ],

    cta: {
      title: "Ready to Improve Executive Reporting?",
      description:
        "Let's discuss your reporting needs and build a clearer view of business performance for leadership.",
      buttonText: "Let's Talk",
    },
  },

  {
    slug: "mis-reporting-systems",

    title: "MIS Reporting Systems",

    shortDescription:
      "Structured MIS reporting systems that standardize business information, improve reporting consistency, and support management visibility.",

    heroDescription:
      "Structured MIS reporting frameworks that establish consistent reporting standards, templates, and processes across departments.",

    businessValue:
      "Create a consistent reporting environment that improves information clarity, strengthens reporting discipline, and gives management a more reliable view of operations.",

    deliverables: [
      "MIS Reporting Structure",
      "Standard Reporting Templates",
      "Management Reports",
      "Data Validation Framework",
      "Reporting Documentation",
    ],

    workflow: [
      "Current Process Assessment",
      "Reporting Requirements",
      "Framework & Standards Design",
      "Report Development",
      "Validation & Testing",
      "Implementation",
    ],

    technologies: [
      "Excel",
      "Power BI",
      "SQL",
      "Power Query",
    ],

    faqs: [
      {
        question: "Can existing reports be improved?",
        answer:
          "Yes. Existing reporting systems can be reviewed and redesigned to improve consistency, accuracy, structure, and usability.",
      },
    ],

    cta: {
      title: "Improve Your Reporting Process",
      description:
        "Build a structured reporting environment that management can rely on for consistent business information.",
      buttonText: "Get Started",
    },
  },

  {
    slug: "business-intelligence",

    title: "Business Intelligence",

    shortDescription:
      "Business intelligence solutions that connect business data, KPIs, and analysis to reveal meaningful performance insights.",

    heroDescription:
      "Business intelligence solutions that connect data, KPIs, and analysis to help organizations understand performance, identify patterns, and uncover meaningful business insights.",

    businessValue:
      "Turn business data into a clearer understanding of performance, helping leaders identify patterns, relationships, and areas that require attention.",

    deliverables: [
      "BI Analysis Framework",
      "Data Modeling",
      "KPI & Analytical Models",
      "Performance Insights",
      "Documentation",
    ],

    workflow: [
      "Business Assessment",
      "Data & KPI Analysis",
      "Analytical Solution Design",
      "Development",
      "Validation",
      "Deployment",
    ],

    technologies: [
      "Power BI",
      "SQL",
      "Excel",
      "DAX",
    ],

    faqs: [
      {
        question: "What does a Business Intelligence solution help us understand?",
        answer:
          "It helps connect business data and KPIs with analysis to reveal performance patterns, relationships, and areas that may require attention.",
      },
    ],

    cta: {
      title: "Turn Data Into Business Insight",
      description:
        "Build a clearer analytical view of your business data, KPIs, and performance.",
      buttonText: "Book a Consultation",
    },
  },

  {
    slug: "performance-analytics",

    title: "Performance Analytics",

    shortDescription:
      "Performance analytics that measure KPIs, reveal performance gaps, and identify opportunities for improvement.",

    heroDescription:
      "Performance analytics that track KPIs, analyze trends and performance gaps, and help organizations focus on areas that require improvement.",

    businessValue:
      "Create a clear view of performance against expectations, helping leaders identify gaps, understand trends, and focus improvement efforts.",

    deliverables: [
      "KPI Framework",
      "Performance Reports",
      "Trend Analysis",
      "Performance Gap Analysis",
      "Recommendations",
    ],

    workflow: [
      "KPI Definition",
      "Data Preparation",
      "Performance Analysis",
      "Trend & Gap Analysis",
      "Performance Review",
    ],

    technologies: [
      "Power BI",
      "Excel",
      "SQL",
      "DAX",
    ],

    faqs: [
      {
        question: "Can KPIs be customized to our business objectives?",
        answer:
          "Absolutely. KPIs are designed around your business objectives and operational goals.",
      },
    ],

    cta: {
      title: "Measure Business Performance",
      description:
        "Build a performance measurement framework that supports continuous improvement.",
      buttonText: "Start Your Project",
    },
  },
];
