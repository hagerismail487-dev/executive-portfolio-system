import type {
  HeroSection,
  WorkflowStep,
} from "@/types/service";

const data = {
  hero: {
    title: "Business Intelligence",

    headline:
      "Business Intelligence Solutions That Turn Business Data Into Strategic Insight",

    description: `Business Intelligence goes beyond reporting by helping organizations understand why performance changes, where opportunities exist, and which actions create the greatest business impact.

I design Business Intelligence solutions that connect business data, uncover meaningful patterns, and transform information into actionable insights that support strategic planning, operational improvement, and executive decision-making.`,

    executiveTitle: "Strategic Intelligence",

    executiveDescription: `Designed to transform business information into meaningful insights that help leadership teams identify trends, measure performance, and make informed strategic decisions with confidence.`,

    highlights: [
      "Strategic Business Insights",
      "Trend Analysis",
      "Performance Intelligence",
      "Executive Decision Support",
    ],
  } satisfies HeroSection,

  businessValue: {
    description: `Business Intelligence enables organizations to move beyond reporting by understanding business performance at a deeper level.

Instead of simply presenting numbers, analytical models reveal trends, patterns, and opportunities that help leadership teams improve planning, optimize operations, and make proactive business decisions supported by reliable data.`,

    benefits: [
      "Strategic business visibility",
      "Performance trend analysis",
      "Data-driven decision-making",
      "Business opportunity identification",
      "Cross-functional business insights",
      "Long-term analytical capability",
    ],
  },

  deliverables: [
    "Business Intelligence Framework",
    "Interactive Analytical Dashboards",
    "Executive Intelligence Reports",
    "Business Performance Analysis",
    "Trend & Variance Analysis",
    "KPI Intelligence Framework",
    "Analytical Data Model",
    "Business Intelligence Documentation",
  ],

  workflow: [
    {
      title: "Business Discovery",
      description:
        "Understand strategic objectives, business challenges, operational priorities, and the key decisions that require analytical support.",
    },
    {
      title: "Analytical Strategy",
      description:
        "Define business questions, analytical objectives, KPIs, and insight requirements that align with organizational strategy.",
    },
    {
      title: "Data Integration",
      description:
        "Prepare, transform, and model business data to establish a reliable analytical foundation for Business Intelligence.",
    },
    {
      title: "Insight Development",
      description:
        "Develop analytical models and interactive reporting experiences that reveal trends, patterns, and performance opportunities.",
    },
    {
      title: "Business Adoption",
      description:
        "Deliver the complete Business Intelligence solution with documentation and guidance that supports long-term analytical decision-making.",
    },
  ] satisfies WorkflowStep[],

  technologies: [
    "Microsoft Power BI",
    "Microsoft Excel",
    "Power Query",
    "DAX",
    "Data Modeling",
    "Business Intelligence",
    "Trend Analysis",
    "Executive Analytics",
  ],

  whyWorkWithMe: {
    description:
      "Business Intelligence should answer business questions—not simply display data. I focus on transforming information into insights that help organizations understand performance and make better strategic decisions.",

    strengths: [
      {
        title: "Insight Before Reporting",
        description:
          "I begin by identifying the business questions leaders need answered before designing analytical solutions or visual reports.",
      },
      {
        title: "Strategic Thinking",
        description:
          "Every analysis is designed to connect operational performance with broader business objectives, helping leaders focus on what matters most.",
      },
      {
        title: "Meaningful Business Analysis",
        description:
          "I prioritize identifying trends, patterns, and opportunities that create practical business value rather than simply presenting historical data.",
      },
      {
        title: "Designed for Executive Decisions",
        description:
          "Every insight is structured to support faster, more informed decisions through clear analytical storytelling and reliable business intelligence.",
      },
    ],
  },

  cta: {
    title: "Ready to Unlock Better Business Insights?",

    description:
      "Let's build a Business Intelligence solution that transforms your business data into meaningful insights, strengthens strategic planning, and supports smarter executive decisions.",

    buttonText: "Let's Talk",

    buttonHref: "https://www.linkedin.com/in/hagerismail1/",
  },
};

export default data;