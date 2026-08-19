export interface WorkforceTalentIntelligenceProject {
  title: string;
  category: string;
  secondaryCategory: string;
  tertiaryCategory: string;
  positioning: string;
  description: string;
  snapshot: {
    label: string;
    value: string;
  }[];
  overview: {
    challenge: string;
    objective: string;
    solution: string;
  };
  dashboards: {
    title: string;
    description: string;
    image: string;
  }[];
  architectureImage: string;
  architecture: {
    sources: string[];
    dataAreas: string[];
    analyticalLayer: string[];
  };
  insights: {
    label: string;
    value: string;
    secondary: string;
    detail: string;
    decision: string;
    tone: "danger" | "blue" | "green" | "amber" | "purple";
  }[];
  technologies: string[];
  capabilities: string[];
}

export const workforceTalentIntelligenceProject: WorkforceTalentIntelligenceProject = {
  title: "Workforce & Talent Intelligence Dashboard",

  category: "Workforce Intelligence",
  secondaryCategory: "Talent Analytics",
  tertiaryCategory: "Executive HR Reporting",

  positioning:
    "Workforce + Talent + HR Compliance Intelligence",

  description:
    "An executive Power BI solution designed to transform HR operational data into a structured intelligence environment covering workforce overview, employee resignations, talent acquisition, contract compliance, and HR data architecture.",

  snapshot: [
    {
      label: "Domain",
      value: "Human Resources / Workforce Management",
    },
    {
      label: "Primary Focus",
      value: "Workforce, Talent Acquisition & HR Compliance",
    },
    {
      label: "Reporting Platform",
      value: "Microsoft Power BI",
    },
    {
      label: "Data Preparation",
      value: "Power Query",
    },
    {
      label: "Analytics",
      value: "DAX",
    },
    {
      label: "Data Sources",
      value: "Multiple operational Excel datasets",
    },
  ],

  overview: {
    challenge:
      "HR information was distributed across operational datasets covering employee records, resignations, recruitment, contracts, and compliance activities, creating a need for a more centralized management reporting environment.",

    objective:
      "Provide management with an interactive view of workforce conditions, resignation patterns, talent acquisition activity, and contract compliance indicators.",

    solution:
      "A structured Power BI reporting solution that brings workforce overview, resignations, talent acquisition, contract compliance, and the underlying data model into one executive reporting experience.",
  },

  dashboards: [
    {
      title: "Workforce Overview",
      description:
        "Executive view of workforce composition, vacancies, hiring fill rate, turnover, contract status, and departmental headcount.",
      image:
        "/projects/workforce-talent-intelligence-dashboard/01-workforce-overview.png",
    },
    {
      title: "Resignations",
      description:
        "Analysis of employee resignations by department, month, gender, reason, branch, and turnover indicators.",
      image:
        "/projects/workforce-talent-intelligence-dashboard/02-resignations.png",
    },
    {
      title: "Talent Acquisition",
      description:
        "View of candidate volumes, candidate status, vacancies, candidate sources, offers, interviews, offer acceptance, and hiring performance.",
      image:
        "/projects/workforce-talent-intelligence-dashboard/03-talent-acquisition.png",
    },
    {
      title: "Contract Compliance",
      description:
        "Monitoring of contract compliance, pending compliance cases, missing documents, contract signature status, and insurance compliance indicators.",
      image:
        "/projects/workforce-talent-intelligence-dashboard/04-contract-compliance.png",
    },
    {
      title: "Data Model",
      description:
        "Visual representation of the underlying HR reporting data model supporting the dashboard experience.",
      image:
        "/projects/workforce-talent-intelligence-dashboard/05-data-model.png",
    },
  ],

  architectureImage:
    "/projects/workforce-talent-intelligence-dashboard/05-data-model.png",

  architecture: {
    sources: [
      "Operational Excel Datasets",
    ],

    dataAreas: [
      "Workforce Overview",
      "Resignations",
      "Talent Acquisition",
      "Contract Compliance",
    ],

    analyticalLayer: [
      "Workforce Analytics",
      "Resignation Analysis",
      "Talent Acquisition Analytics",
      "Contract Compliance Analysis",
      "Executive HR Reporting",
    ],
  },

  insights: [],

  technologies: [
    "Microsoft Power BI",
    "Microsoft Excel",
    "Power Query",
    "DAX",
    "Data Modeling",
    "Data Visualization",
  ],

  capabilities: [
    "Executive HR Dashboard Design",
    "Workforce Intelligence",
    "Employee Resignation Analysis",
    "Talent Acquisition Analytics",
    "Contract Compliance Monitoring",
    "Executive HR Reporting",
    "Interactive Power BI Reporting",
    "DAX Implementation",
    "Power Query Data Transformation",
    "HR Data Modeling",
    "Decision-Oriented Reporting",
  ],
};
