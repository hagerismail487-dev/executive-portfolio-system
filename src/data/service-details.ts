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

    title: "Executive Dashboards",

    shortDescription:
      "Executive dashboards designed to transform complex business data into clear, strategic insights for faster decision-making.",

    heroDescription:
      "Enterprise-grade dashboards that help executives monitor KPIs, business performance, and operational trends through interactive and intuitive visualizations.",

    businessValue:
      "Empower leadership teams with real-time visibility into business performance, enabling faster decisions and improved strategic planning.",

    deliverables: [
      "Interactive Executive Dashboard",
      "KPI Scorecards",
      "Custom Visualizations",
      "Executive Reporting",
      "Data Model",
      "Documentation",
    ],

    workflow: [
      "Business Discovery",
      "Requirements Analysis",
      "Data Preparation",
      "Dashboard Design",
      "Development",
      "Testing",
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
        question: "Can the dashboard connect to existing databases?",
        answer:
          "Yes. Dashboards can integrate with Excel, SQL Server, cloud platforms, and various business data sources.",
      },
      {
        question: "Will I receive documentation?",
        answer:
          "Yes. Every project includes documentation to support maintenance and future enhancements.",
      },
    ],

    cta: {
      title: "Ready to Build Your Dashboard?",
      description:
        "Let's discuss your business goals and create an executive dashboard tailored to your organization.",
      buttonText: "Let's Talk",
    },
  },

  {
    slug: "mis-reporting-systems",

    title: "MIS Reporting Systems",

    shortDescription:
      "Structured reporting systems that improve visibility and standardize business reporting.",

    heroDescription:
      "Designing scalable MIS reporting frameworks that deliver consistent, reliable, and executive-ready reports across departments.",

    businessValue:
      "Create standardized reporting processes that improve transparency, reduce manual work, and support executive decision-making.",

    deliverables: [
      "MIS Reports",
      "Reporting Templates",
      "Performance Reports",
      "Data Validation",
      "Documentation",
    ],

    workflow: [
      "Current Process Assessment",
      "Reporting Framework Design",
      "Development",
      "Testing",
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
          "Yes. Existing reporting systems can be redesigned for better accuracy, automation, and usability.",
      },
    ],

    cta: {
      title: "Improve Your Reporting Process",
      description:
        "Build reporting systems that executives can trust every day.",
      buttonText: "Get Started",
    },
  },

  {
    slug: "business-intelligence",

    title: "Business Intelligence",

    shortDescription:
      "Business intelligence solutions that transform raw business data into actionable insights.",

    heroDescription:
      "Helping organizations establish scalable Business Intelligence ecosystems that support strategic growth.",

    businessValue:
      "Convert disconnected business data into meaningful insights that improve operational and strategic decision-making.",

    deliverables: [
      "BI Strategy",
      "Data Modeling",
      "Reporting Framework",
      "Executive Insights",
      "Documentation",
    ],

    workflow: [
      "Business Assessment",
      "Data Analysis",
      "Solution Design",
      "Development",
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
        question: "Is Business Intelligence suitable for small businesses?",
        answer:
          "Yes. BI solutions can be tailored for organizations of all sizes.",
      },
    ],

    cta: {
      title: "Unlock the Value of Your Data",
      description:
        "Turn business data into meaningful insights that drive growth.",
      buttonText: "Book a Consultation",
    },
  },

  {
    slug: "performance-analytics",

    title: "Performance Analytics",

    shortDescription:
      "Performance analytics that measure KPIs and identify improvement opportunities.",

    heroDescription:
      "Comprehensive analytics solutions designed to monitor business performance, evaluate KPIs, and support continuous improvement.",

    businessValue:
      "Measure what matters most through reliable performance metrics and executive-level analysis.",

    deliverables: [
      "KPI Framework",
      "Performance Reports",
      "Trend Analysis",
      "Executive Dashboards",
      "Recommendations",
    ],

    workflow: [
      "KPI Definition",
      "Data Collection",
      "Analysis",
      "Visualization",
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
        question: "Can KPIs be customized?",
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
