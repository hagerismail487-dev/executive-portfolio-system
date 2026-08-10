import type { ReactNode } from "react";

export interface ExecutiveSalesProject {
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

export const executiveSalesProject: ExecutiveSalesProject = {
  title: "Executive Sales Performance Intelligence",

  category: "Sales Intelligence",
  secondaryCategory: "Executive Reporting",
  tertiaryCategory: "Real Estate Analytics",

  positioning:
    "Sales + Pipeline + Inventory Intelligence",

  description:
    "An executive Power BI solution designed to transform real-estate sales and commercial performance data into a structured decision-support environment across the sales lifecycle.",

  snapshot: [
    {
      label: "Domain",
      value: "Real Estate Sales & Commercial Performance",
    },
    {
      label: "Primary Focus",
      value: "Sales, Pipeline & Inventory Intelligence",
    },
    {
      label: "Reporting Platform",
      value: "Microsoft Power BI",
    },
    {
      label: "Data Sources",
      value: "ERP System\nOnline Excel Sheets",
    },
  ],

  overview: {
    challenge:
      "Sales, commercial, and inventory information needed to be brought together into a clearer management reporting environment across the sales lifecycle.",

    objective:
      "Provide an executive view of sales performance, pipeline activity, conversions, cancellations, team performance, and remaining inventory.",

    solution:
      "A structured Power BI reporting solution connecting Leads, Meetings, Orientations, Reservations, Contracts, Cancellations, and Inventory into one executive intelligence experience.",
  },

  dashboards: [
    {
      title: "Landing Page",
      description:
        "Executive entry point for navigating the reporting experience.",
      image:
        "/projects/executive-sales-performance-intelligence/01-landing-page.png",
    },
    {
      title: "Executive Dashboard",
      description:
        "High-level view of commercial and sales performance.",
      image:
        "/projects/executive-sales-performance-intelligence/02-executive-dashboard.png",
    },
    {
      title: "Contracts, Reservations & Cancellations",
      description:
        "Analysis of contracts, reservations, and cancellation performance.",
      image:
        "/projects/executive-sales-performance-intelligence/03-contracts-reservations-cancellations.png",
    },
    {
      title: "Leads & Meetings",
      description:
        "Sales funnel activity and lead-to-meeting analysis.",
      image:
        "/projects/executive-sales-performance-intelligence/04-leads-meetings.png",
    },
    {
      title: "Inventory Analysis",
      description:
        "Visibility into remaining units and inventory exposure.",
      image:
        "/projects/executive-sales-performance-intelligence/05-inventory-analysis.png",
    },
    {
      title: "Orientation Analysis",
      description:
        "Analysis of orientation activity within the sales journey.",
      image:
        "/projects/executive-sales-performance-intelligence/06-orientation-analysis.png",
    },
  ],

  architectureImage:
    "/projects/executive-sales-performance-intelligence/data-model.png",

  architecture: {
    sources: [
      "ERP System",
      "Online Excel Sheets",
    ],

    dataAreas: [
      "Leads",
      "Meetings",
      "Orientations",
      "Reservations",
      "Contracts",
      "Cancellations",
      "Inventory",
    ],

    analyticalLayer: [
      "Sales Performance",
      "Pipeline Analysis",
      "Conversion Analysis",
      "Cancellation Analysis",
      "Inventory Intelligence",
      "Executive Reporting",
    ],
  },

  insights: [
    {
      label: "Cancellation Rate",
      value: "56.29%",
      secondary: "Cancellation Exposure",
      detail:
        "The documented project analysis identifies a significant cancellation rate within the sales lifecycle.",
      decision:
        "Supports closer monitoring of cancellation patterns and commercial risk.",
      tone: "danger",
    },

    {
      label: "Remaining Inventory",
      value: "≈ 2.87bn",
      secondary: "Inventory Value",
      detail:
        "Remaining inventory is represented as approximately 2.87 billion in the documented analysis.",
      decision:
        "Supports inventory exposure monitoring and commercial planning.",
      tone: "blue",
    },

    {
      label: "Remaining Units",
      value: "390",
      secondary: "Units Remaining",
      detail:
        "The project documents 390 remaining inventory units.",
      decision:
        "Provides visibility into remaining commercial inventory.",
      tone: "green",
    },

    {
      label: "Qualification Rate",
      value: "17.0%",
      secondary: "Lead Qualification",
      detail:
        "9 of 53 leads are documented as qualified in the project analysis.",
      decision:
        "Supports evaluation of lead quality and funnel effectiveness.",
      tone: "amber",
    },

    {
      label: "Top Contract Value",
      value: "31M",
      secondary: "Contract Value",
      detail:
        "The documented project analysis identifies a top contract value of 31M.",
      decision:
        "Provides visibility into high-value commercial transactions.",
      tone: "purple",
    },
  ],

  technologies: [
    "Microsoft Power BI",
    "DAX",
    "Power Query",
  ],

  capabilities: [
    "Executive Dashboard Design",
    "MIS & Management Reporting",
    "Sales Lifecycle Intelligence",
    "Commercial Performance Analysis",
    "Funnel & Conversion Analysis",
    "Cancellation & Risk Analysis",
    "Inventory Intelligence",
    "Project Performance Analysis",
    "Sales Hierarchy Performance",
    "Interactive Power BI Reporting",
    "DAX Implementation",
    "Power Query Implementation",
    "Decision-Oriented Insight Generation",
  ],
};