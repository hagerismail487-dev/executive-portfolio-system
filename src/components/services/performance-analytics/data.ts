import type {
  HeroSection,
  WorkflowStep,
} from "@/types/service";

const data = {
  hero: {
    title: "Performance Analytics",

    headline:
      "Performance Analytics That Measure Business Success and Drive Continuous Improvement",

    description: `Business performance should be measured with purpose, not simply reported. Effective Performance Analytics helps organizations understand how well they are achieving their objectives, where performance gaps exist, and which actions create measurable business improvement.

I design performance analytics solutions that combine KPI frameworks, operational metrics, and executive reporting to help organizations monitor progress, strengthen accountability, and support continuous performance improvement across every level of the business.`,

    executiveTitle: "Performance Management",

    executiveDescription: `Designed to help leadership teams measure organizational performance through meaningful KPIs, operational scorecards, and continuous performance monitoring that supports better business outcomes.`,

    highlights: [
      "Performance Measurement",
      "Executive KPI Scorecards",
      "Operational Monitoring",
      "Continuous Improvement",
    ],
  } satisfies HeroSection,

  businessValue: {
    description: `Sustainable business growth depends on the ability to measure performance consistently and respond to change quickly.

Performance Analytics creates a structured measurement framework that enables executives and department leaders to monitor KPIs, evaluate operational effectiveness, identify improvement opportunities, and continuously enhance business performance.`,

    benefits: [
      "Continuous KPI monitoring",
      "Improved operational performance",
      "Executive performance visibility",
      "Early performance gap detection",
      "Greater organizational accountability",
      "Continuous business improvement",
    ],
  },

  deliverables: [
    "Performance Analytics Framework",
    "Executive KPI Scorecards",
    "Performance Dashboards",
    "Department Performance Reports",
    "Operational KPI Tracking",
    "Trend & Variance Analysis",
    "Performance Monitoring Model",
    "Performance Documentation",
  ],

  workflow: [
    {
      title: "Performance Assessment",
      description:
        "Understand business objectives, operational priorities, existing KPIs, and the performance indicators that matter most to leadership.",
    },
    {
      title: "KPI Framework Design",
      description:
        "Design a structured performance measurement framework that aligns KPIs with strategic goals and operational success.",
    },
    {
      title: "Data Preparation",
      description:
        "Prepare, validate, and organize business data to establish an accurate foundation for performance analysis.",
    },
    {
      title: "Performance Analytics",
      description:
        "Develop interactive performance dashboards, executive scorecards, and analytical models that provide continuous visibility into organizational performance.",
    },
    {
      title: "Review & Continuous Improvement",
      description:
        "Deliver the final solution with documentation and recommendations that support ongoing performance monitoring and long-term business improvement.",
    },
  ] satisfies WorkflowStep[],

  technologies: [
    "Microsoft Power BI",
    "Microsoft Excel",
    "Power Query",
    "DAX",
    "Data Modeling",
    "Performance Analytics",
    "KPI Framework Design",
    "Executive Scorecards",
  ],

  whyWorkWithMe: {
    description:
      "Performance Analytics is most valuable when it helps leaders improve results—not simply monitor numbers. I focus on designing measurement systems that create visibility, accountability, and continuous business improvement.",

    strengths: [
      {
        title: "Performance Before Metrics",
        description:
          "I begin by understanding business objectives and success criteria before selecting KPIs or designing analytical reports.",
      },
      {
        title: "Meaningful KPI Frameworks",
        description:
          "Every KPI is designed to measure business performance in a way that supports practical decision-making rather than simply tracking activity.",
      },
      {
        title: "Continuous Improvement Mindset",
        description:
          "My reporting solutions help organizations identify trends, measure progress, and continuously improve operational performance over time.",
      },
      {
        title: "Executive Performance Visibility",
        description:
          "I design executive reporting experiences that provide leadership with clear performance insights while keeping complex operational data easy to understand.",
      },
    ],
  },

  cta: {
    title: "Ready to Improve Business Performance?",

    description:
      "Let's build a performance analytics solution that helps your organization measure success, strengthen accountability, and continuously improve business performance.",

    buttonText: "Let's Talk",

    buttonHref: "https://www.linkedin.com/in/hagerismail1/",
  },
};

export default data;