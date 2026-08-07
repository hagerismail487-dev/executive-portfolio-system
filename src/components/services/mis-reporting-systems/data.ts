import type {
  HeroSection,
  WorkflowStep,
} from "@/types/service";

const data = {
  hero: {
    title: "MIS Reporting Systems",

    headline:
      "MIS Reporting Systems That Standardize Business Reporting Across the Organization",

    description: `Consistent reporting is the foundation of effective business management. Without standardized reporting processes, leaders often rely on fragmented information that makes performance difficult to monitor and decisions harder to trust.

I design Management Information System (MIS) reporting frameworks that organize business data into structured reporting processes, ensuring departments report consistently, executives receive reliable information, and organizations gain complete visibility into business performance.`,

    executiveTitle: "Reporting Governance",

    executiveDescription: `Designed to establish reporting consistency across the organization by creating structured reporting frameworks, standardized KPIs, and reliable executive reporting processes.`,

    highlights: [
      "Standardized Reporting",
      "Executive MIS Reports",
      "Cross-Department Visibility",
      "Reporting Governance",
    ],
  } satisfies HeroSection,

  businessValue: {
    description: `A well-designed MIS reporting system creates a single reporting language across the organization.

Instead of disconnected spreadsheets and inconsistent reporting formats, leadership teams receive structured, accurate, and repeatable reports that improve visibility, strengthen operational control, and support confident decision-making at every level.`,

    benefits: [
      "Consistent reporting standards",
      "Improved reporting accuracy",
      "Centralized business visibility",
      "Reduced reporting duplication",
      "Reliable executive reporting",
      "Better reporting governance",
    ],
  },

  deliverables: [
    "MIS Reporting Framework",
    "Executive MIS Reports",
    "Department Reporting Templates",
    "Daily, Weekly & Monthly Reports",
    "KPI Reporting Structure",
    "Reporting Calendar",
    "Standardized Report Templates",
    "Reporting Documentation",
  ],

  workflow: [
    {
      title: "Reporting Assessment",
      description:
        "Evaluate current reporting practices, business objectives, reporting gaps, and management information requirements.",
    },
    {
      title: "Framework Design",
      description:
        "Define reporting standards, KPIs, reporting frequency, ownership, and reporting structure across departments.",
    },
    {
      title: "Data Standardization",
      description:
        "Prepare, organize, and validate business data to establish reliable reporting processes and consistent business metrics.",
    },
    {
      title: "MIS Report Development",
      description:
        "Build standardized management reports that provide accurate operational visibility and executive-level insights.",
    },
    {
      title: "Deployment & Governance",
      description:
        "Implement the reporting system, establish reporting routines, and provide documentation that supports long-term reporting consistency.",
    },
  ] satisfies WorkflowStep[],

  technologies: [
    "Microsoft Power BI",
    "Microsoft Excel",
    "Power Query",
    "DAX",
    "Data Modeling",
    "Reporting Automation",
    "Executive Reporting",
    "MIS Framework Design",
  ],

  whyWorkWithMe: {
    description:
      "I believe MIS reporting is not about producing more reports—it's about building reporting systems that create consistency, accountability, and reliable business communication.",

    strengths: [
      {
        title: "Reporting Before Visualization",
        description:
          "I focus on establishing structured reporting processes before designing reports, ensuring every report serves a clear business purpose.",
      },
      {
        title: "Consistency Across Departments",
        description:
          "Every reporting framework is designed to create a unified reporting standard that improves communication across the organization.",
      },
      {
        title: "Reliable Management Information",
        description:
          "I prioritize reporting accuracy, KPI consistency, and data reliability so leadership can make decisions with confidence.",
      },
      {
        title: "Built for Long-Term Adoption",
        description:
          "The goal isn't simply delivering reports—it's creating reporting systems that remain organized, scalable, and sustainable as the business grows.",
      },
    ],
  },

  cta: {
    title: "Ready to Standardize Your Business Reporting?",

    description:
      "Let's build a structured MIS reporting system that improves reporting consistency, strengthens operational visibility, and supports better business decisions.",

    buttonText: "Let's Talk",

    buttonHref: "https://www.linkedin.com/in/hagerismail1/",
  },
};

export default data;