/* ===========================================================
   HR DECISION SUPPORT SYSTEM
   Project 3 — Executive Portfolio System
=========================================================== */

export interface HRDashboardPage {
  title: string;
  image: string;
  description: string;
}

export interface HRDecisionSupportSystemProject {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  industry: string;
  description: string;
  challenge: string;
  objective: string;
  solution: string;
  tools: string[];
  capabilities: string[];
  dashboards: HRDashboardPage[];
}

export const hrDecisionSupportSystem: HRDecisionSupportSystemProject = {
  slug: "hr-decision-support-system",

  title: "HR Decision Support System",

  subtitle:
    "Transforming Workforce Data into Strategic HR Insights",

  category: "Human Resources / Workforce Management",

  industry: "Human Resources",

  description:
    "An executive Business Intelligence solution that transforms fragmented HR operational data into a centralized view of workforce health, talent acquisition, learning and development, employee engagement, and HR compliance.",

  challenge:
    "HR data existed across multiple operational spreadsheets, making it difficult to maintain one connected view of workforce trends, recruitment performance, learning activity, engagement, and compliance.",

  objective:
    "Develop an interactive HR Decision Support System that consolidates multiple HR data sources into one trusted reporting environment for workforce monitoring, recruitment analysis, employee development, compliance management, and strategic HR decision-making.",

  solution:
    "A centralized Power BI HR Decision Support System connecting workforce, recruitment, learning, engagement, and compliance information through interactive executive reporting and decision-support analysis.",

  tools: [
    "Microsoft Power BI",
    "Power Query",
    "DAX",
    "Microsoft Excel",
    "Data Modeling",
    "Data Visualization",
  ],

  capabilities: [
    "Workforce Analytics",
    "HR Reporting",
    "Talent Acquisition Analytics",
    "Learning & Development Analytics",
    "Employee Engagement",
    "HR Compliance Monitoring",
    "Executive Decision Support",
  ],

  dashboards: [
    {
      title: "Landing Page",
      image:
        "/projects/hr-decision-support-system/01-landing-page.png",
      description:
        "Executive entry point defining the HR reporting scope, business objectives, data sources, refresh process, and technology stack.",
    },

    {
      title: "Executive Insights",
      image:
        "/projects/hr-decision-support-system/02-executive-insights.png",
      description:
        "Consolidated executive view of workforce, recruitment, learning, and compliance health indicators.",
    },

    {
      title: "Workforce Overview",
      image:
        "/projects/hr-decision-support-system/03-workforce-overview.png",
      description:
        "Workforce analysis covering employee distribution, workforce composition, tenure, probation, contracts, and related workforce indicators.",
    },

    {
      title: "Talent Acquisition",
      image:
        "/projects/hr-decision-support-system/04-talent-acquisition.png",
      description:
        "Recruitment intelligence covering the recruitment funnel, candidate sources, hiring demand, recruiter performance, and hiring trends.",
    },

    {
      title: "Learning & Engagement",
      image:
        "/projects/hr-decision-support-system/05-learning-engagement.png",
      description:
        "Learning and engagement analysis covering training participation, course demand, scheduling status, engagement activities, and related reporting.",
    },

    {
      title: "HR Compliance",
      image:
        "/projects/hr-decision-support-system/06-hr-compliance.png",
      description:
        "HR compliance analysis covering documentation, contracts, medical coverage, social insurance, and compliance status.",
    },

    {
      title: "Data Model",
      image:
        "/projects/hr-decision-support-system/07-data-model.png",
      description:
        "Power BI data model connecting HR operational datasets, dimensions, and reporting structures.",
    },
  ],
};

